import React, { Component } from "react";
export default class PublishDate extends Component {
  render() {
    return (

        <div className="overflow-hidden flex flex-row justify-center my-2.5 ml-10 box-border items-start justify-start gap-[50px] text-center text-[10.52px]">
          <div className="rounded-8xs bg-white-100 flex flex-col w-[240px] h-[51px] items-center justify-center gap-[3px] border-[1px] border-solid border-gainsboro-200">
            <div className="relative font-semibold">Publish Date</div>
            <div className="relative text-smi-8 font-semibold text-darkslategray">
              2000
            </div>
          </div>

          <section className=" rounded-8xs bg-white-100 flex flex-col w-[240px] h-[51px] items-center justify-center gap-[6px] text-center text-[10.52px] text-dimgray-100 font-inter border-[1px] border-solid border-gainsboro-200">
            <div className="relative font-semibold">Publisher</div>
            <div className="relative text-2xs-8 font-semibold text-coral">
              New Riders Press
            </div>
          </section>
          <section className="rounded-8xs bg-white-100 flex flex-col  w-[240px] h-[51px] items-center justify-center gap-[5px] text-center text-[10.52px] text-dimgray-100 font-inter border-[1px] border-solid border-gainsboro-200">
            <div className="relative font-semibold">Language</div>
            <div className="relative text-2xs-8 font-semibold text-coral">
              English
            </div>
          </section>
          <div className="rounded-8xs bg-white-100 flex flex-col w-[240px] h-[51px] items-center justify-center gap-[4px] border-[1px] border-solid border-gainsboro-200">
            <div className="relative font-semibold">Pages</div>
            <div className="relative text-smi-8 font-semibold text-darkslategray">
              216
            </div>
          </div>
        </div>
   
    );
  }
}
