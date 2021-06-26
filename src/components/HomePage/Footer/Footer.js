import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faGoogle, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer class="text-gray-600 font-sans bg-primary text-yellow-400">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a href="https://www.facebook.com" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img className="h-8 w-8 rounded-full"
            src="https://i.ibb.co/qjR14Hx/blogging.png"
            alt=""
             />
            <span class="ml-3 text-xl">Tech blog</span>
          </a>
          <p class="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a  href="https://www.facebook.com" class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a href="https://www.facebook.com" class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a  href="https://www.facebook.com"class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a  href="https://www.facebook.com" class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a href="https://www.facebook.com" class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a  href="https://www.facebook.com" class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a  href="https://www.facebook.com" class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a  href="https://www.facebook.com" class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            © 2021 — Faysal Khan
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              class="text-gray-600 ml-1"
              target="_blank"
            >
              @faysalkhan
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
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
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
