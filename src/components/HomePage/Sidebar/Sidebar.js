import React from 'react';

const Sidebar = () => {
    return (
        <aside class="w-full md:w-1/3 flex flex-col items-center px-3">

            <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                <p class="text-xl font-semibold pb-5">About Us</p>
                <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                <a href="https://www.facebook.com" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                    Get to know us
                </a>
            </div>

            <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                <p class="text-xl font-semibold pb-5">Instagram</p>
                <div class="grid grid-cols-3 gap-3">
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" alt="" />
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2"alt="" />
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3"alt="" />
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4"alt="" />
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5"alt="" />
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6"alt="" />
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7"alt="" />
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8"alt="" />
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9"alt="" />
                </div>
                <a href="https://www.facebook.com" class="w-full bg-blue-800 text-yellow-400 font-bold text-sm rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6 lowercase">
                    <i class="fab fa-instagram mr-2"></i> Follow @faysalkhan
                </a>
            </div>

        </aside>
    );
};

export default Sidebar;