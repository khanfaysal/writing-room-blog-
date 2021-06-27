import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AdminAdd = () => {
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
              <input class="pb-3 w-full px-5 py-1 text-gray-700 bg-gray-900 rounded"
                name="imageUpload"
                type="file"
                {...register("imageUpload", { required: true })}
                onChange={handleImageUpload}
                placeholder=""
              />
              {errors.imageUpload && (
                <p className="error">imageUpload is required</p>
              )}<br />

               <label className="mt-2 block text-sm text-gray-600">Title</label>
              <input class="pb-3 w-full"
                name="contentTitle"
                {...register("contentTitle", { required: true })}
                placeholder=""
              />
              {errors.contentTitle && (
                <p className="error">Title is required</p>
              )}<br />

              <label className="mt-2 block text-sm text-gray-600">Category</label>
              <input class="pb-3 w-full"
                name="categoryTitle"
                {...register("categoryTitle", { required: true })}
                placeholder=""
              />
              {errors.categoryTitle && (
                <p className="error">Category is required</p>
              )}<br />

              <label className="mt-2 block text-sm text-gray-600">Description</label>
              <textarea class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                rows="6"
                name="Description"
                {...register("Description", { required: true })}
                placeholder=""
              />
              {errors.Description && (
                <p className="error">description is required</p>
              )}<br />
              <input class="mt-6 px-4 py-1 text-white font-bold uppercase tracking-wider bg-primary rounded" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
    );
};

export default AdminAdd;