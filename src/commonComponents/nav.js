import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <div>
        <section className="mb-8 flex flex-row justify-center">
          <div className=" bg-gainsboro-200 h-0.5" />
          <div className=" m-8 text-[1.13rem] tracking-[0.12em] capitalize text-align-center">
            <Link className="font-extrabold  text-tomato " to = "/">HOME</Link>
            <span className="font-medium text-gray-300">
              <span className="text-lightgray-100 mx-8">|</span>
              <span className="text-gray-300">{`     ABOUT US     `}</span>
              <span className="text-lightgray-100 mx-8">|</span>
              <Link className="text-gray-300" to = "/listing">{`     BOOKS     `}</Link>
              <span className="text-lightgray-100 mx-8">|</span>
              <span>{`     NEW RELEASE     `}</span>
              <span className="text-lightgray-100 mx-8">|</span>
              <span className="text-gray-300">{`     CONTACT US     `}</span>
              <span className="text-lightgray-100 mx-8">|</span>
              <span className="text-gray-300 mx-8"> BLOG</span>
            </span>
          </div>
        </section>
      </div>
    );
  }
}
