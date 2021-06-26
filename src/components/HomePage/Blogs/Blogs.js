import React, { useEffect, useState } from 'react';
import BlogsDetails from '../BlogsDetails/BlogsDetails';
import Sidebar from '../Sidebar/Sidebar';

const Blogs = () => {
  const [contents, setContents] =useState ([]);
  useEffect(() => {
    fetch('http://localhost:5000/addContent')
    .then(res => res.json())
    .then(data => setContents(data))
  },[])
    return (
      <div class="container mx-auto flex flex-wrap py-6">
        <section class="w-full md:w-2/3 flex flex-col items-center px-3">

           {
             contents.map(content => <BlogsDetails key={content.id} content={content}></BlogsDetails>)
           }

            {/* pagination */}
            <div class="flex items-center py-8">
                <a href="https://www.facebook.com" class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
                <a href="https://www.facebook.com" class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
                <a href="https://www.facebook.com" class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i class="fas fa-arrow-right ml-2"></i></a>
            </div>
          </section>
          <Sidebar />
        </div>
    );
};

export default Blogs;