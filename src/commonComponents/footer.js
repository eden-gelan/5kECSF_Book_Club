import React, { Component } from "react";
import logo from "../assets/image/home/homeFooterLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  render() {
    return (
      <footer className="grid  p-10 place-items-center grid-cols-3 gap-5  h-[500px] p-10 p-10 bg-tomato text-white" style={{fontSize:25 }}>
        <div className="block ml-10">
          <img className="" src={logo} alt="" />
          <p>
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.{" "}
          </p>
          <div>
          <div className="flex m-5 gap-8 ">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "white", fontSize: 42 }}
            />
            <FontAwesomeIcon
              icon={faPhone}
              style={{color: "white", fontSize: 42 }}
            />
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "white", fontSize: 42 }}
            />
            <FontAwesomeIcon
              icon={faPhone}
              style={{color: "white", fontSize: 42 }}
            />
          </div>

          </div>
        </div>
        <div className="mt-10">
          <b className="block ">Company</b>
          <b className="block mt-4">Home</b>
          <b className="block mt-4">About Us</b>
          <b className="block mt-4">Books</b>
          <b className="block mt-4">New Releas</b>
          <b className="block mt-4">Contact Us</b>
          <b className="block mt-4">Blog</b>
        </div>
        <div>
          <p className="mb-8">  Important Link</p>
          <p>Privacy Policy</p>
          <p>FAQ</p>
          <p>Terms of Service</p>
        </div>
        
          <p className=" text-sm" >© 2022 Arihant. All Rights Reserved.</p>
          <p className="text-sm"> Privacy | Terms of Service</p>
       
      </footer>
    );
  }
}
