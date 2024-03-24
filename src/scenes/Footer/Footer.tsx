import React from "react";
import Logo from "@/assets/Logo.png";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="md:flex justify-content mx-auto w-5/6 gap-16">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Id venenatis a condimentum vitae sapien pellentesque. Diam maecenas
            sed enim ut sem viverra. Eget dolor morbi non arcu risus quis.
          </p>
          <p>© Evogym All right reseved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Links</h4>
        <p className="my-5">Massa orci sentuary</p>
        <p className="my-5">Lavida orci sentuary</p>
        <p className="my-5">Ullam cop.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact us</h4>
        <p className="my-5">+25007888</p>
        <p className="my-5">pascal</p>
        <p className="my-5">+58228785</p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;