import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./UploadContent.css";

const UploadContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const contentUploadData = {
      imageUpload: imageURL,
      contentTitle: data.contentTitle,
      Description: data.Description,
    };
    const url = `http://localhost:5000/addContentInfo`;
    console.log(contentUploadData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contentUploadData),
    }).then((res) => console.log("server side response"));
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
    // <section>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-10 mt-5">
    //         <h4 className="brand-txt mt-5">Add service</h4>
    //         <form className="addService-form" onSubmit={handleSubmit(onSubmit)}>
    //           <input
    //             name="imageUpload"
    //             type="file"
    //             {...register("imageUpload", { required: true })}
    //             onChange={handleImageUpload}
    //             placeholder="Upload image"
    //           />
    //           {errors.imageUpload && (
    //             <p className="error">imageUpload is required</p>
    //           )}
    //           <input
    //             name="contentTitle"
    //             {...register("contentTitle", { required: true })}
    //             placeholder="Enter Title"
    //           />
    //           {errors.contentTitle && (
    //             <p className="error">Title is required</p>
    //           )}
    //           &nbsp;&nbsp;
    //           <textarea
    //             name="Description"
    //             {...register("Description", { required: true })}
    //             placeholder="Enter Description"
    //           />
    //           {errors.Description && (
    //             <p className="error">description is required</p>
    //           )}
    //           <input type="submit" />
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default UploadContent;
