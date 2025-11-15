"use client"
import Image from "next/image";
import {Phone, Mail, Menu, Search,Facebook, Youtube,Instagram,Linkedin} from "lucide-react"
import SimpleImageSlider from "react-simple-image-slider"
import { TiSocialFacebook } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Home() {

  const images = [
    {
      url: "https://prime.edu.np/wp-content/uploads/2023/08/3.-Innovate-scaled.jpg",

    },
     {
      url: "https://prime.edu.np/wp-content/uploads/2023/08/2.-Explore-scaled.jpg",

    },
     {
      url: "https://prime.edu.np/wp-content/uploads/2023/08/1.-Initiate-scaled.jpg",

    },
    {
      url:""
    }

  ];

  return (
  <>

  <div>
    <nav className="bg-[#263675] text-white py-2">
  
      <div className="flex ">
       <div className="flex mx-2">
        <Phone />
        <ul className="mx-2 ">01-4961690 | 01-4970072</ul>
       
      </div>
      <div className="flex mx-2">
        <Mail />
      <ul className="mx-2 ">info@prime.edu.np</ul>
       
      </div>

      <div className="flex ml-auto cursor-pointer  ">
       <TiSocialFacebook className="mx-2 hover:scale-105 hover:text-amber-300" />
        <FaYoutube className="mx-2 hover:scale-105 hover:text-amber-300"/>
         <FaInstagram className="mx-2 hover:scale-105 hover:text-amber-300"/>
          <FaLinkedinIn className="mx-2 hover:scale-105 hover:text-amber-300"/>
           <FaTiktok className="mx-2 hover:scale-105 hover:text-amber-300"/>
       

      </div>
     </div>

   
    
    </nav>

    <section id='Header'className="mr-4">
      <div className=" flex justify-between items-center ">
       <div> <Image src="https://prime.edu.np/wp-content/uploads/2023/08/prime-logo.svg" alt="Header Image" width={200} height={120} className="pl-2 pt-2"></Image></div>

<div className="flex gap-9 mt-6">
  <ul className="hover:text-amber-300">Who We Are</ul>
  <ul className="hover:text-amber-300">Our Programs</ul>
  <ul className="hover:text-amber-300">Why Join Prime</ul>
  <ul className="hover:text-amber-300">Life at Prime</ul>
  <ul className="hover:text-amber-300">Contact Us</ul>
  <button className="rounded bg-[#263675] hover:bg-blue-800 duration-300 text-white w-40 py-2 justify-center flex ">Apply Now</button>
    <div className="  relative group ">
      <Menu className=" hover:text-amber-300 cursor-pointer w-6 h-6"/>
        <div className=" flex
    absolute top-full right-0 
    bg-white text-black
    w-220 rounded shadow-lg
    opacity-0 pointer-events-none
   
    group-hover:opacity-100 group-hover:pointer-events-auto
    transition-opacity duration-300
    z-20
   
">
 <div> 
   <h1 className="px-4 font-bold text-[#263675] cursor-pointer">Who We Are?</h1>
  <ul className="px-4  hover:text-amber-300 cursor-pointer">About Us</ul>
  <ul className="px-4 mb-6 hover:text-amber-300 cursor-pointer">Know Our Team</ul>
  {/* <ul className="px-4 py-2 hover:text-amber-300 cursor-pointer">Item 4</ul> */}

  <h1 className="px-4 font-bold text-[#263675] cursor-pointer">Our Programs</h1>
  <ul className="px-4  hover:text-amber-300 cursor-pointer">BITM</ul>
  <ul className="px-4  hover:text-amber-300 cursor-pointer">BBA</ul>
  <ul className="px-4  hover:text-amber-300 cursor-pointer">BBS</ul>
  <ul className="px-4  hover:text-amber-300 cursor-pointer">BSc.CSIT</ul>
  <ul className="px-4  hover:text-amber-300 cursor-pointer">BBM</ul>
  <ul className="px-4  hover:text-amber-300 cursor-pointer">BCA</ul>
  <ul className="px-4  hover:text-amber-300 cursor-pointer">MBS</ul>
  <ul className="px-4  hover:text-amber-300 cursor-pointer">Scholarships at prime</ul>
    <ul className="px-4  hover:text-amber-300 cursor-pointer  mb-5">College</ul>
 </div>
  <div>
   <ul className="px-4 font-bold text-[#263675] cursor-pointer">Why Join Prime?</ul>
  <ul className="px-4 py-2 hover:text-amber-300 cursor-pointer">Progressive Infrastructure</ul>
  <ul className="px-4 py-2 hover:text-amber-300 cursor-pointer">Pride Of Prime</ul>
  <ul className="px-4 py-2 hover:text-amber-300 cursor-pointer">Important Downloads</ul>
 </div>
</div>

    
    </div>
     <Search className=""></Search>
</div>
      </div>
    </section>



<section>
  <div className="mt-1 ">
    <SimpleImageSlider
 
  width={1250}
  height={500}
  images={images}
  autoPlay={true}
  showNavs={true}


  />
  </div>
  

</section>

  </div>
  </>
  );
}
