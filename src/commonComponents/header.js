import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container mb-4 flex items-center justify-between bg-darkslateblue-200 h-[3.5rem]">
          <div className="flex ml-6">
            <div className="mr-2">
              <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
            </div>
            <div
              className="relative tracking-[0.02em] font-semibold text-lg"
              style={{ color: "white" }}
            >
              +91 8374902234
            </div>
          </div>

          <div className="flex">
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
          </div>
        </div>
        
        <section className=" container flex">
          
        <section className=" rounded-[50px] bg-silver-100 w-[5.38rem] h-[5.38rem]  mr-10" />
        <div className="h-[calc(100%_-_190px)] w-[13rem] overflow-hidden flex">
          <section className="h-[10.89%] w-[19.23%]  rounded-md [background:linear-gradient(90deg,_#2979ff,_#4c589e)] text-left text-[2.25rem] text-blue-100 font-red-hat-display">
            
            <b className="text-[2rem] leading-[2.25rem] flex text-white-100 text-center items-center justify-center">
              S
            </b>
           
          </section>
          <div className="leading-[2.25rem] font-medium text-left text-[2.25rem] text-blue-100 font-red-hat-display">5kECSF</div>

        </div>

         
          <input
            className="[border:none] font-semibold font-body-normal-14 ml-10 mb-10 mr-8 text-[0.88rem] bg-whitesmoke rounded-xl w-[38.56rem] h-[2.81rem]"
            type="text"
            placeholder="Search books"
          />

          <div className="bg-lightgray-100 w-[0.06rem] h-[1rem]" />
          <div className="left-[8.69rem] w-[6.69rem] h-[1.06rem] mr-8">
            <div className="tracking-[0.12em] uppercase font-semibold">
              Cart:(0$)
            </div>
            <img
              className="right-[89.66%] bottom-[11.78%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector6.svg"
            />
          </div>

          <div className=" bg-lightgray-100 w-[0.06rem] h-[1rem]" />
          <div className="left-[0rem] w-[6.5rem] h-[1.06rem] mr-5">
            <div className="right-[0rem] tracking-[0.12em] uppercase font-semibold">
              Account
            </div>
            <img
              className=" h-[76.47%] w-[11.54%]  max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector7.svg"
            />
          </div>

          <div className="w-[6.56rem] h-[1.06rem] ml-5">
            <div className=" tracking-[0.12em] uppercase font-semibold">
              Wishlist
            </div>
            <img
              className="h-[82.35%] w-[15.24%]  max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector8.svg"
            />
          </div>
        </section>

        <section className="mb-8">
          <div className=" bg-gainsboro-200 h-0.5" />
          <section className="  flex items-center justify-center [background:linear-gradient(82.93deg,_#ffe5e5,_#f5fffe)] h-[98px]">
            <div className=" container text-center text-[20px] leading-[32px] font-medium text-left">
              Home / books
            </div>
          </section>
        </section>
      </div>
    );
  }
}
