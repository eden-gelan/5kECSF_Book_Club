import React, { Component } from "react";
import person from "../../../assets/image/home/aboutSingle.png"
import other1 from "../../../assets/image/home/RichDad.png"
import other2 from "../../../assets/image/home/React.png"
export default class About extends Component {
  render() {
    return (
      <div className="rounded-3xs bg-darkgray px-9 py-10 w-[445px] h-[418px] overflow-hidden text-xl">
        <div className="flex">
          <div className="mr-10">
            <h2 className="m-0 text-inherit leading-[128.52%] font-semibold w-[138px] h-[29px]">
              <span className="  text-coral">About</span>
              <span className="text-dimgray-200"> Author</span>
            </h2>
            <h2 className="m-0 text-inherit leading-[128.52%] font-normal w-[138px] h-[29px]">
              Steve Krug
            </h2>
          </div>
          <div>
            <img
              className="w-[88px] h-[101px] object-cover"
              alt=""
              src={person}
            />
          </div>
        </div>
        <div className="">
         
          <div className="text-smi leading-[128.52%] inline-block w-[386px]">
            Steve Krug is a usability consultant who has more than 30 years of
            experience as a user advocate for companies like Apple, Netscape,
            AOL, Lexus, and others. Based in part on the success of his first
            book, Don't Make Me Think, he has become a highly sought-after
            speaker on usability design.
          </div>
          <h3 className="mt-3 text-mini font-bold ">
            Other Books
          </h3>
          <img
          className="rounded-8xs w-[75px]  h-[99px] mr-8"
          alt=""
          src={other1}
        />
        <img
          className="rounded-8xs w-[75px]  h-[99px]"
          alt=""
          src={other2}
        />
        </div>
        
      </div>
    );
  }
}
