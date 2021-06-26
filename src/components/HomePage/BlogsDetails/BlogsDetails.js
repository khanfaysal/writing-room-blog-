import React from 'react';

const BlogsDetails = () => {
    return (
        <article class="flex flex-col shadow my-4">
        {/* article image */}
        <a  href="https://www.facebook.com"  class="hover:opacity-75">
            <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="" />
        </a>
        <div class="bg-white flex flex-col justify-start p-6">
            <a href="https://www.facebook.com"  class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
            <a  href="https://www.facebook.com"  class="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
            <p  href="https://www.facebook.com" class="text-sm pb-3">
                By <a href="https://www.facebook.com" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
            </p>
            <a  href="https://www.facebook.com" class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
            <a  href="https://www.facebook.com"  class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
        </div>
    </article>
    );
};

export default BlogsDetails;