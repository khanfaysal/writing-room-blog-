import React from 'react';

const BlogsDetails = (props) => {
    const {imageUpload,contentTitle,Description,category} = props.content;
    return (
        <article class="flex flex-col shadow my-4">
        {/* article image */}
        <img src={imageUpload} alt="" className="md:w-full object-cover object-center" />
        <div class="bg-white flex flex-col justify-start p-6">
            <h5 class="text-blue-700 text-sm font-bold uppercase pb-4">{category}</h5>
            <h2 class="text-3xl font-bold hover:text-gray-700 pb-4 capitalize">{contentTitle}</h2>
            <h5 class="text-sm pb-3 ">
                By <p class="font-semibold hover:text-gray-800 inline-block">David Grzyb</p>, Published on April 25th, 2020
            </h5>
            <p class="pb-6 normal-case">{Description}</p>
            <a  href="https://www.facebook.com"  class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
        </div>
    </article>
    );
};

export default BlogsDetails;