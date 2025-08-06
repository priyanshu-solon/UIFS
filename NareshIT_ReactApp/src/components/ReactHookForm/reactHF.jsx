import { useForm } from "react-hook-form"


export default function HookForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <form className="container-fluid" onSubmit={handleSubmit(onSubmit)}>
      <dl>
        <dt>Username</dt>
        <dd><input {...register("Username",{required:true,minLength:4})} /></dd>
        <dt>Mobile</dt>
        <dd><input {...register("Mobile",{pattern:/\+91\d{10}/})}/></dd>
        <dt>Gender</dt>
        <dd>
      <select {...register("gender")}>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>
        </dd>
      </dl>
      <input type="submit" />
    </form>
  )
}