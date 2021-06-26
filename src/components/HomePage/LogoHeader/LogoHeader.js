import React from 'react';

const   LogoHeader = () => {
    return (
        <header class="w-full container mx-auto">
        <div class="flex flex-col items-center py-12">
            <a href="https:www.facebook.com" class=" font-serif font-bold text-black-700 uppercase hover:text-yellow-400 delay-75 text-5xl">
                Tech Blog
            </a>
            <p class=" font-sans text-lg text-black-400 capitalize font-light italic py-1.5">
                start is here
            </p>
        </div>
    </header>
    );
};

export default LogoHeader;