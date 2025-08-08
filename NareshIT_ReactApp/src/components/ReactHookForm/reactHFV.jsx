import { useForm } from "react-hook-form";
export default function HookFormV() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});
  function submit(user) {
    console.log(user);
  }

  return (
    <div className="container-fluid">
      <h1>react-hook-form</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <dl>
            <dt>
              <label>Enter User Name</label>
            </dt>
            <dd>
              <input
                {...register("username", {
                  required: true,
                  minLength: 4,
                  maxLength: 15,
                })}
                type="text"
              />
            </dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>
              <label>Enter Mobile No.</label>
            </dt>
            <dd>
              <input
                {...register("mobile", {
                  required: true,
                  pattern: /\+91\d{10}/,
                })}
                type="text"
              />
            </dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>
              <label>Enter your Age</label>
            </dt>
            <dd>
              <input
                {...register("age", { required: true, min: 15, max: 30 })}
                type="number"
              />
            </dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>
              <label>Select Your City</label>
            </dt>
            <dd>
              <select
                {...register("city", { required: true })}
              >
                <option>Select City</option>
                <option>Hyderabad</option>
                <option>Pune</option>
                <option>Mumbai</option>
              </select>
            </dd>
          </dl>
        </div>
        <ul>
          <li
            className={`text-danger ${
              errors.username?.type === "required" ||
              errors.username?.type === "minLength" ||
              errors.username?.type === "maxLength"
                ? ""
                : "d-none"
            }
            `}
          >
            {errors.username?.type === "required" ||
            errors.username?.type === "minLength" ||
            errors.username?.type === "maxLength"
              ? "User Name should me between 4 to 15 character"
              : ""}
          </li>
          <li
            className={`text-danger ${
              errors.mobile?.type === "required" ||
              errors.mobile?.type === "pattern"
                ? ""
                : "d-none"
            }
            `}
          >
            {errors.mobile?.type === "required" ||
            errors.mobile?.type === "pattern"
              ? "mobile should start with +91 code and 10 digit number"
              : ""}
          </li>
          <li
            className={`text-danger ${
              errors.age?.type === "required" ||
              errors.age?.type === "min" ||
              errors.age?.type === "max"
                ? ""
                : "d-none"
            }
            `}
          >
            {errors.age?.type === "required" ||
            errors.age?.type === "min" ||
            errors.age?.type === "max"
              ? "age Name should be between 15 to 30 character"
              : ""}
          </li>
          <li
            className={`text-danger ${
              errors.city?.type === "required" ||
              watch("city") === "Select City"
                ? ""
                : "d-none"
            }`}
          >
            {errors.city?.type === "required" || watch("city") === "Select City"
              ? "select the city"
              : ""}
          </li>
        </ul>
        <div>
          <button >Submit</button>
        </div>
      </form>
    </div>
  );
}