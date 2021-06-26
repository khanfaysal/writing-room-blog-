import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faGoogle, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const SocialNavbar = () => {
    return (
         <nav class="w-full py-4 bg-primary shadow">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between">

            <nav>
                <ul class="flex items-center justify-between font-bold text-sm text-yellow-400 uppercase no-underline">
                    <li><a href="https://www.facebook.com" class="hover:text-yellow-200 hover:underline px-4" >Shop</a></li>
                    <li><a href="https://www.facebook.com" class="hover:text-yellow-200 hover:underline px-4" >About</a></li>
                </ul>
            </nav>

            <div class="flex items-center text-lg no-underline text-yellow-400 pr-6">
                <a href="https://www.facebook.com/mdfaysal.khan.71/" class="">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
                <a href="https://twitter.com/mdfaysalkhancs1"class="pl-6">
                <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="https://www.facebook.com" class="pl-6">
                <FontAwesomeIcon icon={faGoogle}/>
                </a>
                <a href="https://www.facebook.com"class="pl-6">
                <FontAwesomeIcon icon={faYoutube}/>
                </a>
                <a href="https://www.facebook.com"class="pl-6">
                <FontAwesomeIcon icon={faInstagram}/>
                </a>
            </div>
        </div>

    </nav>
    );
};

export default SocialNavbar;