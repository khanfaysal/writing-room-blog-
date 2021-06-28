import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./UploadContent.css";

const UploadContent = () => {
  const {register,handleSubmit,formState: { errors }, reset} = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const contentUploadData = {
      imageUpload: imageURL,
      category: data.categoryTitle,
      contentTitle: data.contentTitle,
      Description: data.Description,
    };
    const url = `https://vast-thicket-58406.herokuapp.com/addContentInfo`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contentUploadData),
    })
    .then((res) => res.json())
    .then(data =>{
      alert("image upload Successfully")})
      reset()
    };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "defc38c8221f60aa89f0ade96a2e8342");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        // setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
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
              
            <label class="mt-2 block text-sm text-black-600">Upload Image</label>
              <input class="pb-3 w-full px-5 py-1 text-gray-700 bg-gray-900 rounded" type="file"
              {...register("imageUpload", { required: true })} onChange={handleImageUpload} placeholder=""/>
              {errors.imageUpload && <p className="error">imageUpload is required</p>}<br />

              <label className="mt-2 block text-sm text-gray-600">Title</label>
              <input class="pb-3 w-full"{...register("contentTitle", { required: true })} placeholder=""/>
              {errors.contentTitle && <p className="error">Title is required</p>}<br />

              <label className="mt-2 block text-sm text-gray-600">Category</label>
              <input class="pb-3 w-full"{...register("categoryTitle", { required: true })} placeholder=""/>
              {errors.categoryTitle && <p className="error">Category is required</p>}<br />

              <label className="mt-2 block text-sm text-gray-600">Description</label>
              <textarea class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                rows="6" {...register("Description", { required: true })} placeholder=""/>
              {errors.Description && <p>description is required</p>}<br />

              <input class="mt-6 px-4 py-1 text-white font-bold uppercase tracking-wider bg-primary rounded" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadContent;
