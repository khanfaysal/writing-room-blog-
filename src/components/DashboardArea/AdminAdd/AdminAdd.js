import React from "react";
import { useForm } from "react-hook-form";

const AdminAdd = () => {
  const {register,handleSubmit,formState: { errors }, reset} = useForm();
  // const onSubmit = (data) => console.log(data);

    const onSubmit = data => {
        console.log(data);
        
          const url = `https://evening-caverns-39772.herokuapp.com/addAdmin`;
          fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data=>{
            alert("Admin Added Successfully")})
            reset()
    }
    return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-10 grid justify-items-center md:justify-items-center">
        <div class="flex flex-col w-full mb-5 text-center pb-3">
          <h1 class="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
            Upload Content
          </h1>
        </div>
        <div class="">
          <div class="flex flex-wrap -m-2">
            <form class="p-10 bg-secondary rounded shadow-xl border-t-2" onSubmit={handleSubmit(onSubmit)}>

              <label className="mt-2 block text-sm text-gray-600 capitalize">password</label>
              <input class="pb-3 w-full" {...register("password", { required: true })} placeholder=""/>
              {errors.password && <p>Password is required</p>}<br />

              <label className="mt-2 block text-sm text-gray-600 capitalize">password</label>
              <input class="pb-3 w-full" type="password" {...register("password", { required: true })} placeholder=""/>
              {errors.password && <p>Password is required</p>}

              <input class="mt-6 px-4 py-1 text-white font-bold uppercase tracking-wider bg-primary rounded" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
    );
};

export default AdminAdd;