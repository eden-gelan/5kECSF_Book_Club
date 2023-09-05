import React, { Component } from "react";
import logo from "../assets/image/home/homeFooterLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer1 from "../assets/image/home/footerImage1.png";
import Footer2 from "../assets/image/home/footerImgae2.png"


export default class HomeFooter extends Component {
  render() {
    return (
      <footer className="grid m-10 place-items-center grid-cols-3 gap-5  h-[500px] p-10 p-10 bg-white text-darkslateblue_100 text-lg">
        <div className="block ml-10">
          <img className="" src={logo} alt="" />
          <p>
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.{" "}
          </p>
          <div className="flex m-5 gap-8 ">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "tomato", fontSize: 42 }}
            />
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "tomato", fontSize: 42 }}
            />
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "tomato", fontSize: 42 }}
            />
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "tomato", fontSize: 42 }}
            />
          </div>
        </div>
        <div className="" style={{ fontSize: 22 }}>
          <b className="block text-tomato mb-5" style={{ fontSize: 32 }}>
            Company
          </b>
          <b className="block mb-3">Home</b>
          <b className="block mb-3">About Us</b>
          <b className="block mb-3">Books</b>
          <b className="block mb-3">New Releas</b>
          <b className="block mb-3">Contact Us</b>
          <b className="block mb-3">Blog</b>
        </div>
        <div className="mr-5">
          <b className="text-tomato" style={{ fontSize: 32 }}>
            Latest news
          </b>
          <div className="flex">
            <img className="m-6" src={Footer1} alt="" />
            <div>
              <p style={{ color:"tomato",fontSize: 18 }}>Nostrud exercitation</p>
              <p style={{ fontSize: 15 }}>
                Nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.{" "}
              </p>
              <p style={{ fontSize: 9 }}>15 April 2022</p>
            </div>
            
          </div>
          <div className="flex">
            <img className="m-6" src={Footer2} alt="" />
            <div>
              <p style={{color:"tomato", fontSize: 18 }}>Nostrud exercitation</p>
              <p style={{ fontSize: 15 }}>
                Nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.{" "}
              </p>
              <p style={{ fontSize: 9 }}>15 April 2022</p>
            </div>
            
          </div>
          
        </div>
        <div className="container flex items-center justify-between ">
          <p>© 2022 Arihant. All Rights Reserved.</p>
          <p> Privacy | Terms of Service</p>
        </div>
      </footer>
    );
  }
}
