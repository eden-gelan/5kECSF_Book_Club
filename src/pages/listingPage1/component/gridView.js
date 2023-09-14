import React, { Component } from "react";
import books from "../model/listingPage1.json";
import { Link } from "react-router-dom";

export default class GridView extends Component {
  render() {
    return (
      <div className="grid grid-cols-3 gap-10 ">
        {books.map((book) => {
          return (
            <div>
              <div
                className="mb-5 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.15)] w-[100%] h-[385.83px] "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to ="/single">
                  <div>
                    <img
                      className="  w-[201.5px] h-[291.26px] "
                      alt=""
                      src={book.bookUrl}
                    />
                  </div>
                </Link>
              </div>
              <div
                style={{
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  className="text-lg capitalize font-semibold w-[287.46px] h-[24.14px]"
                  style={{ color: "darkslateblue.200" }}
                >
                  The lady beauty Scarlett
                </div>
                <div className=" text-sm tracking-[0.02em] capitalize text-gray.100 block w-[287.46px] h-[14.26px] ">
                  {book.autor}
                </div>
                <b className=" text-3xl  capitalize text-tomato ">
                  {book.price}
                </b>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
