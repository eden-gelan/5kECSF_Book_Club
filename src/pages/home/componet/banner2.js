import React, { Component } from "react";
import banner3 from "../../../assets/image/home/homeBanner3.png";


export default class Banner2 extends Component {
    render(){
        return(
            <div className=" text-[1.44rem] text-darkslateblue-200 ">
        <div className="[background:linear-gradient(78.43deg,_#fbeeee,_#f7fffe)]  h-[55.5rem] ">
          <div
            className=" grid grid-cols-2 center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="gridOne">
              <img
                className="w-[32.44rem] h-[44.25rem] object-cover  mt-10"
                alt=""
                src={banner3}
              />
            </div>

            <div className="gridTwo">
              <div className="text-[3rem] capitalize font-semibold mb-5">
                Featured book
              </div>
              <div className="bg-tomato w-[6.31rem] h-[0.13rem]" />
              <div className=" text-[0.81rem] tracking-[0.16em] my-4 uppercase font-medium text-gray-100">
                By Timbur Hood
              </div>
              <div className=" text-[1.75rem] my-4 capitalize font-semibold">
                Birds gonna be happy
              </div>
              <div className=" text-[1rem] tracking-[0.02em] leading-[208%] text-gray-200 inline-block w-[30.38rem] h-[4.13rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac.
              </div>
              <div className="tracking-[0.02em] bold my-8 capitalize text-tomato">
                $ 45.00
              </div>

              <button className="cursor-pointer p-0 bg-[transparent]  rounded-6xs box-border w-[12.31rem] h-[3.81rem] border-[1px] border-solid border-darkslateblue-200 flex justify-center items-center">
                <div className="text-[1rem] tracking-[0.1em] leading-[220%] uppercase font-medium font-body-normal-14 text-darkslateblue-200 text-left">
                  View more
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

