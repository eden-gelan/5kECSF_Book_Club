import React, { Component } from "react";
export default class Nav extends Component {
    render (){
        return(
            <section className="mb-8">
            <div className=" bg-gainsboro-200 h-0.5" />
            <div className=" m-8 text-[1.13rem] tracking-[0.12em] capitalize text-align-center text-tomato">
              <span className="font-extrabold">HOME</span>
              <span className="font-medium text-gray-300">
                <span className="text-gray-300">{`     `}</span>
                <span className="text-lightgray-100">|</span>
                <span className="text-gray-300">{`     ABOUT US     `}</span>
                <span className="text-lightgray-100">|</span>
                <span className="text-gray-300">{`     BOOKS     `}</span>
                <span className="text-lightgray-100">|</span>
                <span>{`     NEW RELEASE     `}</span>
                <span className="text-lightgray-100">|</span>
                <span className="text-gray-300">{`     CONTACT US     `}</span>
                <span className="text-lightgray-100">|</span>
                <span className="text-gray-300"> BLOG</span>
              </span>
            </div>
          </section> 
        )
    }
}