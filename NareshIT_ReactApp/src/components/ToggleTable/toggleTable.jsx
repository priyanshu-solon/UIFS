import axios from "axios";
import { useEffect, useState, useCallback } from "react";

// --- useToggleEditSave Hook ---
export function useToggleEditSave(initialState = false) {
  const [isEditing, setIsEditing] = useState(initialState);

  const toggleEditSave = useCallback(() => {
    setIsEditing(prevIsEditing => !prevIsEditing);
  }, []);

  return [isEditing, toggleEditSave];
}

// --- useCellEdit Hook ---
export function useCellEdit() {
  const [editingCell, setEditingCell] = useState(null);
  const [editedValue, setEditedValue] = useState('');

  const startEditing = useCallback((id, field, initialValue) => {
    setEditingCell({ id, field });
    setEditedValue(initialValue);
  }, []);

  const stopEditing = useCallback(() => {
    setEditingCell(null);
    setEditedValue('');
  }, []);

  const isCellEditing = useCallback((id, field) => {
    return editingCell && editingCell.id === id && editingCell.field === field;
  }, [editingCell]);

  return {
    editingCell,
    editedValue,
    setEditedValue,
    startEditing,
    stopEditing,
    isCellEditing,
  };
}

// --- TableRow Component ---
export function TableRow({ item, handleSaveCellEdit }) {
  const [isEditingRow, toggleEditSaveRow] = useToggleEditSave(false);
  const { editingCell, editedValue, setEditedValue, startEditing, stopEditing, isCellEditing } = useCellEdit();

  return (
    <tr key={item.id}>
      {Object.keys(item).filter(key => key !== 'id').map((key) => (
        <td
          key={key}
          onDoubleClick={() => {
            if (key === 'Name' || key === 'Price') {
              startEditing(item.id, key, item[key]);
            }
          }}
        >
          {isCellEditing(item.id, key) ? (
            <input
              type={key === 'Price' ? 'number' : 'text'}
              className="form-control"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              onBlur={() => { handleSaveCellEdit(item.id, key, editedValue); stopEditing(); }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSaveCellEdit(item.id, key, editedValue);
                  stopEditing();
                }
              }}
              autoFocus
            />
          ) : (
            item[key]
          )}
        </td>
      ))}
      <td>
        <button
          className={`btn ${isEditingRow ? 'btn-success' : 'btn-warning'} bi ${isEditingRow ? 'bi-check-lg' : 'bi-pen-fill'}`}
          onClick={() => toggleEditSaveRow()}
          aria-label={isEditingRow ? "Save item" : "Edit item"}
        >
          {isEditingRow ? ' Save' : ' Edit'}
        </button>
      </td>
    </tr>
  );
}

// --- ToggleTable Component ---
export function ToggleTable() {
  const [items, setItems] = useState([]);

  function GetItems() {
    axios.get("grocery.json").then((response) => {
      const dataWithIds = response.data.map((item, index) => ({
        id: item.Name.replace(/\s+/g, '-') + '-' + index,
        ...item,
      }));
      setItems(dataWithIds);
    });
  }

  useEffect(() => {
    GetItems();
  }, []);

  const handleSaveCellEdit = (itemId, fieldName, newValue) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? { ...item, [fieldName]: newValue }
          : item
      )
    );
  };

  return (
    <>
      <h2>Grocery List</h2>
      <table className="table table-hover caption-top">
        <thead>
          <tr>
            {items.length > 0 &&
              Object.keys(items[0]).filter(key => key !== 'id').map((key) => (
                <th key={key}>{key}</th>
              ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 &&
            items.map((item) => (
              <TableRow
                key={item.id}
                item={item}
                handleSaveCellEdit={handleSaveCellEdit}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}
