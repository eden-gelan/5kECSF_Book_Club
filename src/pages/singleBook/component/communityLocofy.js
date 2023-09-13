import React, { Component } from "react";

export default class Commmunity extends Component {
  render() {
    return (
      <div className="absolute top-[436px] left-[552px] rounded-8xs bg-white-100 box-border w-[507px] h-[353px] text-3xl font-liberation-sans border-[1px] border-solid border-gainsboro-200">
        <div className="absolute top-[15px] left-[34px] w-[225px] h-[45px]">
          <h1 className="m-0 absolute top-[5px] left-[0px] text-inherit font-bold font-inherit">
            Community Reviews
          </h1>
          <h3 className="m-0 absolute top-[9px] left-[351px] text-mini [text-decoration:underline] font-bold font-inherit text-tomato-100">
            Feedback?
          </h3>
        </div>
        <div className="absolute top-[60px] left-[34px] w-[440px] flex flex-col py-0 pr-2.5 pl-0.5 box-border items-start justify-start gap-[4px] text-xs-2 text-dimgray-100 font-inter">
          <div className="relative w-[494px] h-[29px]">
            <div className="absolute top-[10px] left-[0px] flex flex-row py-0 pr-[4.984375px] pl-0 items-start justify-start">
              <div className="relative tracking-[0.5px] uppercase font-semibold">
                Pace
              </div>
            </div>
            <div className="absolute top-[3px] left-[51.44px] rounded-2xl flex flex-row py-1.5 pr-[10.453125px] pl-[9px] items-start justify-start text-xs text-darkslategray border-[1px] border-solid border-lightgray-200">
              <div className="relative font-semibold">
                <span>{`Meandering `}</span>
                <span className="text-gray-100"> 100%</span>
              </div>
            </div>
          </div>
          <div className="relative w-[494px] h-[29px]">
            <div className="absolute top-[10px] left-[0px] flex flex-row py-0 pr-[4.921875px] pl-0 items-start justify-start">
              <div className="relative tracking-[0.5px] uppercase font-semibold">
                Enjoyability
              </div>
            </div>
            <div className="absolute top-[3px] left-[105.38px] rounded-2xl flex flex-row pt-1.5 pb-[7px] pr-[11.984375px] pl-[9px] items-start justify-start text-2xs text-darkslategray border-[1px] border-solid border-lightgray-200">
              <div className="relative font-semibold">
                <span>Interesting</span>
                <span className="text-gray-100"> 100%</span>
              </div>
            </div>
          </div>
          <div className="relative w-[494px] h-[29px]">
            <div className="absolute top-[10px] left-[0px] flex flex-row py-0 pr-[4.9375px] pl-0 items-start justify-start">
              <div className="relative tracking-[0.5px] uppercase font-semibold">
                Difficulty
              </div>
            </div>
            <div className="absolute top-[3px] left-[88.39px] rounded-2xl flex flex-row py-1.5 pr-[8.796875px] pl-[9px] items-start justify-start text-xs text-darkslategray border-[1px] border-solid border-lightgray-200">
              <div className="relative font-semibold">
                <span>{`Advanced `}</span>
                <span className="text-gray-100"> 100%</span>
              </div>
            </div>
          </div>
          <div className="relative w-[494px] h-[29px] text-2xs text-darkslategray">
            <div className="absolute top-[10px] left-[0px] flex flex-row py-0 pr-[4.96875px] pl-0 items-start justify-start text-xs-2 text-dimgray-100">
              <b className="relative tracking-[0.5px] uppercase">Genres</b>
            </div>
            <div className="absolute top-[3px] left-[69.42px] rounded-2xl flex flex-row pt-1.5 pb-[7px] pr-[11.96875px] pl-[9px] items-start justify-start border-[1px] border-solid border-lightgray-200">
              <div className="relative font-semibold">
                <span>{`Horror `}</span>
                <span className="text-gray-100"> 66%</span>
              </div>
            </div>
            <div className="absolute top-[3px] left-[160.84px] rounded-2xl flex flex-row pt-1.5 pb-[7px] pr-[14.296875px] pl-[9px] items-start justify-start border-[1px] border-solid border-lightgray-200">
              <div className="relative font-semibold">
                <span>{`Mystery `}</span>
                <span className="text-gray-100"> 33%</span>
              </div>
            </div>
          </div>
          <div className="relative w-[494px] h-[29px] text-2xs text-darkslategray">
            <div className="absolute top-[10px] left-[0px] flex flex-row py-0 pr-[4.53125px] pl-0 items-start justify-start text-xs-2 text-dimgray-100">
              <div className="relative tracking-[0.5px] uppercase font-semibold">
                Mood
              </div>
            </div>
            <div className="absolute top-[3px] left-[55.98px] rounded-2xl flex flex-row pt-1.5 pb-[7px] pr-[15.328125px] pl-[9px] items-start justify-start border-[1px] border-solid border-lightgray-200">
              <div className="relative font-semibold">
                <span>{`Ominous `}</span>
                <span className="text-gray-100"> 25%</span>
              </div>
            </div>
            <div className="absolute top-[3px] left-[163.77px] rounded-2xl flex flex-row pt-1.5 pb-[7px] pr-[13.328125px] pl-[9px] items-start justify-start border-[1px] border-solid border-lightgray-200">
              <div className="relative">
                <span>
                  <span className="font-semibold">Scientific</span>
                  <b className="font-liberation-sans text-gray-100">{` `}</b>
                </span>
                <b className="font-liberation-sans text-gray-100">
                  <span> 25%</span>
                </b>
              </div>
            </div>
          </div>
          <div className="relative w-[494px] h-[29px] text-xs text-darkslategray">
            <div className="absolute top-[10px] left-[0px] flex flex-row py-0 pr-[4.9375px] pl-0 items-start justify-start text-xs-2 text-dimgray-100">
              <div className="relative tracking-[0.5px] uppercase font-semibold">{`Impressions `}</div>
            </div>
            <div className="absolute top-[3px] left-[102.39px] rounded-2xl flex flex-row py-1.5 pr-[9.78125px] pl-[9px] items-start justify-start border-[1px] border-solid border-lightgray-200">
              <div className="relative font-semibold">
                <span>{`Overhyped `}</span>
                <span className="text-gray-100"> 50%</span>
              </div>
            </div>
            <div className="absolute top-[3px] left-[222.63px] rounded-2xl flex flex-row py-1.5 pr-[9.125px] pl-[9px] items-start justify-start border-[1px] border-solid border-lightgray-200 lg:items-start lg:justify-start">
              <div className="relative font-semibold">
                <span>{`Forgettable `}</span>
                <span className="text-gray-100"> 50%</span>
              </div>
            </div>
          </div>
          <div className="relative w-[494px] h-[29px]">
            <div className="absolute top-[10px] left-[0px] flex flex-row py-0 pr-[4.71875px] pl-0 items-start justify-start">
              <div className="relative tracking-[0.5px] uppercase font-semibold">{`Length `}</div>
            </div>
            <div className="absolute top-[3px] left-[68.17px] rounded-2xl flex flex-row pt-1.5 pb-[7px] pr-[10.984375px] pl-[9px] items-start justify-start text-2xs text-darkslategray border-[1px] border-solid border-lightgray-200">
              <div className="relative font-semibold">
                <span>{`Short `}</span>
                <span className="text-gray-100"> 100%</span>
              </div>
            </div>
          </div>
        </div>
        <b className="absolute top-[307px] left-[36px] text-sm [text-decoration:underline]">
          Add your community review
        </b>
      </div>
    );
  }
}
