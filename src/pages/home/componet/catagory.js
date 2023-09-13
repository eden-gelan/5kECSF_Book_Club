import React, { Component } from "react";
import higher from "../../../assets/image/home/higherEduc.png";
import manag from "../../../assets/image/home/managBooks.png";
import eng from "../../../assets/image/home/engineerBook.png";

export default class Categories extends Component {
  render() {
    return (
      <div className=" text-[1.5rem] text-darkslateblue-200 m-10">
        <div className=" flex text-left flex text-[0.88rem] text-tomato m-8">
          <div className="bg-tomato w-[2.01rem] h-[0.12rem] mt-2 mr-2" />
          <b className=" tracking-[0.1em] inline-block w-[12.6rem] h-[1.16rem]">
            Categories
          </b>
        </div>

        <div className="explore m-8 ">
          <b className=" text-[2rem] leading-[2.75rem] inline-block text-darkslateblue-200 w-[32.15rem] h-[2.62rem]">
            Explore our Top Categories
          </b>
        </div>

        <div className="grid grid-cols-3 gap-10 m-8 text-center">
          <div>
            <img
              className="rounded-3xs  h-[12.0rem] object-cover"
              alt=""
              src={higher}
            />

            <div className="leading-[2rem] font-semibold inline-block w-[14.98rem] h-[2.19rem]">
              Higher Education
            </div>
          </div>

          <div>
            <img
              className=" rounded-3xs h-[12.0rem] object-cover"
              alt=""
              src={manag}
            />

            <div className=" font-semibold inline-block w-[16.32rem] h-[2.19rem]">
              Management Books
            </div>
          </div>

          <div>
            <img
              className=" rounded-3xs h-[12.0rem] object-cover"
              alt=""
              src={eng}
            />

            <div className=" font-semibold inline-block w-[17.42rem] h-[2.19rem]">
              Engineering Books
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="cursor-pointer p-0 bg-[transparent]  rounded-6xs box-border w-[12.31rem] h-[3.81rem] border-[1px] border-solid border-darkslateblue-200 flex justify-center items-center">
            <img
              className=" h-[16.39%] w-[6.6%]  max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector15.svg"
            />
            <div className=" text-[1rem] tracking-[0.1em] leading-[220%] uppercase font-body-normal-14 text-darkslateblue-200 text-left">
              View more
            </div>
          </button>
        </div>
      </div>
    );
  }
}
