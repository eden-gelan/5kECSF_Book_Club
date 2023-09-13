import book from "../../../assets/image/home/singleBook.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faQuoteRight,
  faNoteSticky,
  faStar,
  faLocationDot,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import share from "../../../assets/Icons/share-android.svg";
import React, { Component } from "react";

export default class BackToResult extends Component {
  render (){
    return (
      <div className="grid grid-cols-2 p-10 bg-whitesmoke-200">
        <div>
          <div className="flex flex-row items-center justify-start gap-[9px] text-mini mb-8">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#000000" }} />
            <h3 className="m-0 relative text-inherit leading-[128.52%] font-normal font-inherit inline-block w-[151px] shrink-0">
              Back to results
            </h3>
          </div>
  
          <div className=" rounded-3xs bg-darkslategray w-[558px] h-[473px] overflow-hidden text-2xs text-darkslategray font-liberation-sans">
            <div className="w-[463px] h-[421px] flex items-center justify-center">
              <img className=" w-full h-full" alt="" src={book} />
            </div>
  
            <div className=" flex justify-center ml-10 w-[300px] h-[52px] text-white">
              <div className="rounded w-[51.36px] h-[52px]  mr-4">
                <FontAwesomeIcon
                  className="w-8 h-8"
                  icon={faQuoteRight}
                  style={{ color: "#000000" }}
                />
                <b className=" leading-[12px]">Review</b>
              </div>
  
              <div className="rounded flex flex-col pt-0.5 px-1.5 pb-1.5 items-start justify-start  mr-4">
                <FontAwesomeIcon
                  className="w-8 h-8"
                  icon={faNoteSticky}
                  style={{ color: "#000000" }}
                />
                <b className="relative leading-[12px]">Notes</b>
              </div>
  
              <div className="rounded flex flex-col pt-0.5 px-[6.015625px] pb-1.5 items-start justify-start">
                <img
                  className="relative w-8 h-8 object-cover"
                  alt=""
                  src={share}
                />
                <b className="relative leading-[12px]">Share</b>
              </div>
            </div>
          </div>
        </div>
  
        <div>
          <div className=" mt-10">
            <div className=" flex flex-col items-start justify-start gap-[5px] text-[35px]">
              <div className="w-[357px] flex flex-col items-start justify-start gap-[38px]">
                <h1 className="m-0 relative text-inherit leading-[128.52%] font-normal font-inherit inline-block w-[429px] h-3.5 shrink-0">{`Don’t Make Me Think `}</h1>
              </div>
              <p className="text-sm mt-6 text-dimgray-200">By Steve Krug, 2000</p>
              <p className="text-sm text-darkgray">Second Edition</p>
            </div>
            <div className="flex flex-row items-start justify-start gap-[19px] text-darkslategray my-7 mx-5">
              <div className="flex flex-row items-center justify-start gap-[11px] text-dimgray-200 mr-6">
                <div className="w-[82px] h-3 flex flex-row items-start justify-start gap-[3px]">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f9c639" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f9c639" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f9c639" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f9c639" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f9c639" }} />
                </div>
              </div>
              <div className="relative font-medium inline-block w-20 h-4 shrink-0">
                5.0 Ratings
              </div>
              <div className="relative font-medium inline-block w-[146px] h-4 shrink-0">
                25 Currently reading
              </div>
              <div className="relative font-medium inline-block w-[146px] h-4 shrink-0">
                119 Have read
              </div>
            </div>
  
            <div className="flex flex-row items-start justify-start text-dimgray-200  my-7 mx-5">
              <div className="mr-10">
                <b className="inline-block">Availability</b>
                <div className="flex flex-col">
                  <div className="flex">
                    <input className="cursor-pointer " type="radio" />
                    <p>Hard Copy</p>
                  </div>
  
                  <div className="flex">
                    <input className="cursor-pointer " type="radio" />
                    <p>E-book</p>
                  </div>
                  <div className="flex">
                    <input className="cursor-pointer" type="radio" />
                    <p>Audio</p>
                  </div>
                </div>
              </div>
  
  
              <div className="mr-8">
                <b className="inline-block mb-5">Status</b>
                <div className="flex flex-col items-start justify-start gap-[13px] text-mini">
                  <button className="cursor-pointer [border:none] p-0 bg-forestgreen-100 relative rounded-8xs shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[85px] h-[26px]">
                    <div className="text-mini font-inter text-white-100 text-center inline-block w-[85px] h-[17px]">
                      In-Shelf
                    </div>
                  </button>
                  <div className="flex ">
                  <FontAwesomeIcon icon={faLocationDot} style={{color: "#f76b56",}} />
                    <div className="">
                     
                      CS A-15
                    </div>
                  </div>
                </div>
              </div>
  
              <button className="cursor-pointer [border:none] p-0 bg-dimgray-200 rounded-8xs w-[127px] h-10 my-8">
                <div className="text-mini leading-[128.52%] font-inter text-white-100 text-left inline-block w-[95px] h-5">
                  Add to List
                </div>
                <FontAwesomeIcon icon={faCaretDown} style={{color: "#ffffff",}} />
              </button>
  
            </div>
  
  
            <div className="flex flex-row items-start justify-start gap-[38px]  my-7 mx-5">
              <button className="cursor-pointer [border:none] p-0 bg-coral relative rounded-8xs w-[209px] h-[61px]">
                <div className="text-xl leading-[12px] font-semibold font-inter text-white-100 text-center flex items-center justify-center ">
                  BORROW
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-forestgreen-200 relative rounded-8xs w-[209px] h-[61px]">
                <b className="text-xl leading-[12px] flex font-inter text-white-100 text-center items-center justify-center ">
                  Return book
                </b>
              </button>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};

