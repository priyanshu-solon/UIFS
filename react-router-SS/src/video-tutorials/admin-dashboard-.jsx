import axios from "axios";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function AdminDashboard() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cookies, , removeCookie] = useCookies(["admin_id"]);
    const [sortBy, setSortBy] = useState("title"); // default sorting
    const [filterCategory, setFilterCategory] = useState("all"); // default filter
    const [searchTerm, setSearchTerm] = useState(""); // search input
    let navigate = useNavigate();

    // Memoized signout
    const handleSignout = useCallback(() => {
        removeCookie("admin_id");
        navigate("/admin-login");
    }, [removeCookie, navigate]);

    // Memoized load videos
    const LoadVideos = useCallback(() => {
        setLoading(true);
        axios
            .get(`http://localhost:3000/videos`)
            .then((response) => {
                setVideos(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error loading videos:", error);
                setLoading(false);
            });
    }, []);

    //  Memoized delete handler
    const handleDelete = useCallback((id) => {
        if (window.confirm("Are you sure you want to delete this video?")) {
            axios
                .delete(`http://localhost:3000/videos/${id}`)
                .then(() => {
                    setVideos((prevVideos) =>
                        prevVideos.filter((video) => video.id !== id)
                    );
                })
                .catch((error) => {
                    console.error("Error deleting video:", error);
                });
        }
    }, []);

    useEffect(() => {
        if (!cookies["admin_id"]) {
            navigate("/admin-login");
        } else {
            LoadVideos();
        }
    }, [cookies, navigate, LoadVideos]);

    // useMemo for search + filter + sort
    const processedVideos = useMemo(() => {
        let filtered = [...videos];

        // search by title or description
        if (searchTerm.trim() !== "") {
            const lowerSearch = searchTerm.toLowerCase();
            filtered = filtered.filter(
                (video) =>
                    (video.title && video.title.toLowerCase().includes(lowerSearch)) ||
                    (video.description &&
                        video.description.toLowerCase().includes(lowerSearch))
            );
        }

        // filter by category
        if (filterCategory !== "all") {
            filtered = filtered.filter(
                (video) => video.category_id === Number(filterCategory)
            );
        }

        // sort by selected option
        filtered.sort((a, b) => {
            if (sortBy === "title") return a.title.localeCompare(b.title);
            if (sortBy === "likes") return b.likes - a.likes;
            if (sortBy === "views") return b.views - a.views;
            return 0;
        });

        return filtered;
    }, [videos, sortBy, filterCategory, searchTerm]);

    // useMemo for rendering rows
    const videoRows = useMemo(() => {
        if (processedVideos.length === 0) {
            return (
                <tr>
                    <td colSpan="3" className="text-center text-muted">
                        No videos available
                    </td>
                </tr>
            );
        }

        return processedVideos.map((video) => (
            <tr key={video.id}>
                <td>{video.title}</td>
                <td>
                    <iframe
                        width="200"
                        height="100"
                        src={video.url}
                        title={video.title}
                        allowFullScreen
                    />
                </td>
                <td>
                    <Link
                        to={`/edit-video/${video.id}`}
                        className="btn btn-warning bi bi-pen-fill"
                    ></Link>
                    <button
                        onClick={() => handleDelete(video.id)}
                        className="btn btn-danger bi bi-trash-fill mx-2"
                    ></button>
                </td>
            </tr>
        ));
    }, [processedVideos, handleDelete]);

    return (
        <div className="bg-light p-2">
            <h3 className="d-flex justify-content-between">
                <span>{cookies["admin_id"]} - Dashboard</span>
                <button onClick={handleSignout} className="btn btn-link">
                    Signout
                </button>
            </h3>

            <div className="mt-2">
                <Link
                    to="/add-video"
                    className="btn btn-success bi bi-camera-video my-2"
                >
                    {" "}Add Video
                </Link>

                {/*  Search + Sorting + Filtering Controls */}
                <div className="d-flex flex-wrap gap-3 mb-3">
                    <input
                        type="text"
                        className="form-control w-auto"
                        placeholder="Search by title or description..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <select
                        className="form-select w-auto"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="title">Sort by Title</option>
                        <option value="likes">Sort by Likes</option>
                        <option value="views">Sort by Views</option>
                    </select>

                    <select
                        className="form-select w-auto"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        <option value="1">Java</option>
                        <option value="2">React</option>
                        <option value="3">AWS</option>
                    </select>
                </div>

                {loading ? (
                    <div className="text-center my-4">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Preview</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>{videoRows}</tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
