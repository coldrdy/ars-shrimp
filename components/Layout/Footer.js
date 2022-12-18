import React from "react";
import LogoArs from "../../public/assets/ars/logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-white-600 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoArs className="h-16 w-auto mb-6 mt-7" />
          <p className="mb-4">
            <strong className="font-medium">Ars Shrimp</strong> adalah distributor Udang Global dari Indonesia.
          </p>
          <p className="mb-4">
            <h6 className="mt-2"><strong>Alamat:</strong> CV. Sumber KDH Gebang Kulon, Kec. Gebang, Kab. Cirebon, Jawa Barat, Indonesia 45190</h6>
            <h6 className="mt-2"><strong>Senin - Kamis:</strong> 08.00 - 16.00 WIB</h6>
            <h6 className="mt-2"><strong>Jumat - Minggu:</strong> 08.00 - 17.00 WIB</h6>
            <h6 className="mt-2"><strong>Email:</strong><a className="hover:text-orange-500 cursor-pointer transition-all" href="mailto:arsshrimp@gmail.com"> arsshrimp@gmail.com</a></h6>
            <h6 className="mt-2"><strong>Telepon/WhatsApp:</strong><a className="hover:text-orange-500 cursor-pointer transition-all" href="https://wa.me/6283103245728"> +62 8310 3245 728</a></h6>
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()}, Ars Shrimp</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col mt-8">
          <p className="text-black-600 mb-4 font-medium text-lg">Tautan</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <a href="https://arsshrimp.com">🇺🇸 English </a>
            </li>
          </ul>
        </div>
        {/* <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              .... ?{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
