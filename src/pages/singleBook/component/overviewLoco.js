import React, { Component } from "react";

export default class Overview extends Component{
  render(){
    return (

      <div className="flex justify-center">
        <div className="bg-white-100 w-[1072px] h-[40px] bg-white flex justify-between box-border h-10 overflow-hidden border-b-[1px] border-solid border-gainsboro-200">
      
      <button className="cursor-pointer [border:none] pt-1 pb-[9.5px] pr-[14.828125px] pl-[15px] bg-[transparent] ">
        <div className="flex-col">
          <div className="relative text-smi leading-[19.5px] font-semibold font-inter text-coral text-left">
            Overview
          </div>
          <div className="h-[100 px] w-[89 px] box-border  border-b-[1px] border-solid border-coral" />
        </div>
      </button>

      <button className="cursor-pointer [border:none] pt-1 pb-[9.5px] pr-[14.828125px] pl-[15px] bg-[transparent] ">
        <div className="text-smi font-semibold font-inter text-darkgray whitespace-nowrap ">
          View book Instances
        </div>
      </button>

      <button className="cursor-pointer [border:none] pt-1 pb-[9.5px] pr-[14.828125px] pl-[15px] bg-[transparent] ">
        <div className="text-smi font-semibold font-inter text-darkgray whitespace-nowrap ">
        Details
        </div>
      </button>

      <button className="cursor-pointer [border:none] pt-1 pb-[9.5px] pr-[14.828125px] pl-[15px] bg-[transparent] ">
        <div className="text-smi font-semibold font-inter text-darkgray whitespace-nowrap ">
        4.1k Reviews
        </div>
      </button>

      
      <button className="cursor-pointer [border:none] pt-1 pb-[9.5px] pr-[14.828125px] pl-[15px] bg-[transparent] ">
        <div className="text-smi font-semibold font-inter text-darkgray whitespace-nowrap ">
         lists
        </div>
      </button>

      <button className="cursor-pointer [border:none] pt-1 pb-[9.5px] pr-[14.828125px] pl-[15px] bg-[transparent] ">
        <div className="text-smi font-semibold font-inter text-darkgray whitespace-nowrap ">
        Related Books
        </div>
      </button>


     
   
  </div>
      </div>
      
    );
  }
 
};

