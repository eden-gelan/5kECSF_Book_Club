import React, { Component } from "react";
import banner1 from "../../../assets/image/home/homeBanner1.png"

export default class Banner1 extends Component{
    render(){
        return(
            <section className="[background:linear-gradient(83.53deg,_#ffe5e5_14.37%,_#f5fffe_30%,_#fff_66.98%,_#fff_99.86%)] flex items-center text-darkslateblue-200 mb-10 p-10 h-[41.06rem]">
            <section className=" rounded-[50px] bg-silver-100 w-[48px] h-[48px] mr-10 ml-10" />
    
            <div className="grid grid-cols-2">
              <div>
                <p className="text-darkslateblue.200" style={{ fontSize: 60 }}>
                  ipsum dolor si
                </p>
                <p style={{ fontSize: 20 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                  feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus
                  ut magna velit eleifend. Amet, quis urna, a eu.
                </p>
                <button className="cursor-pointer p-0 bg-[transparent] rounded-6xs box-border w-[12.31rem] h-[3.81rem] border-[1px] border-solid border-darkslateblue-200 flex justify-center items-center">
                  <div className="text-[1rem] tracking-[0.1em] leading-[220%] uppercase font-body-normal-14 text-darkslateblue-200 text-left">
                    Read more
                  </div>
                </button>
              </div>
    
              <div className=" h-[30.0rem]">
                <img className=" h-[30.0rem] object-cover" alt="" src={banner1} />
              </div>
            </div>
          </section> 
        )
    }
}