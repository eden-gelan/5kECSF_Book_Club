import React, { Component } from "react";
export default class Filter extends Component {
    render(){
        return (
            <div className="col-span-1">
          <div className="w-[280px] h-[158.82px] flex flex-col items-center justify-start gap-[14px] text-left">
            <div className="w-[280px] h-[30.25px] flex flex-row items-center justify-start gap-[223px]">
              <b className="relative leading-[32px] inline-block w-10 h-[30.25px] shrink-0">
                Page
              </b>
              <img
                className="relative w-[17px] h-0.5"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <div className="relative bg-gainsboro-200 w-[280px] h-[1.89px]" />
            <div className="w-[280px] h-[94.54px] flex flex-col items-center justify-start gap-[21px]">
              <input
                className="[border:none] font-medium font-inter text-lg bg-[transparent] w-[280px] h-[31.2px] flex flex-row items-center justify-start"
                type="text"
                placeholder="to"
              />
              <button className="cursor-pointer [border:none] p-0 bg-darkslateblue-200 w-[280px] h-[41.6px] flex flex-col items-center justify-center">
                <div className="relative text-base capitalize   font-medium font-inter text-white text-center inline-block w-52 h-[16.07px] shrink-0">
                  Filter
                </div>
              </button>
            </div>
          </div>
          <div className="w-[280px] m-3 h-8 text-left">
            <b className=" leading-[32px]">Book type</b>
            <img className="w-[17px] h-0.5" alt="" src="/vector-31.svg" />
            <img className=" w-0.5 h-[17px]" alt="" src="/vector-4.svg" />
          </div>

          <div className="bg-gainsboro-200 w-[280px] h-0.5" />
          <div className=" w-[280px]  m-3 h-8  flex text-left">
            
            <b className="leading-[32px]">Availability</b>
            <div>+</div>

          </div>

          <div className="bg-gainsboro-200 w-[280px] h-0.5" />
          <div className="w-[280px] m-3 h-8 text-left">
            <img className=" w-[17px] h-0.5" alt="" src="/vector-31.svg" />
            <img className="w-0.5 h-[17px]" alt="" src="/vector-4.svg" />
            <b className="leading-[32px]">Genre</b>
          </div>

          <div className=" bg-gainsboro-200 w-[280px] h-0.5" />
          <div className="w-[280px] m-3 h-8 text-left">
            <img className="w-[17px] h-0.5" alt="" src="/vector-31.svg" />
            <img className="w-0.5 h-[17px]" alt="" src="/vector-4.svg" />
            <b className="leading-[32px]">language</b>
          </div>
        </div>
        )
    }
}
