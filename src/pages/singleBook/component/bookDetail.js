import React, { Component } from "react";

export default class BookDetail extends Component {
  render() {
    return (
      <div className="rounded-8xs ml-8  pl-8 pb-10 flex flex-col bg-white-100 box-border w-[507px] h-[730px] text-smi-8 text-dimgray-200 border-[1px] border-solid border-gainsboro-200 font-semibold ">
        <h1 className="m-0text-3xl  font-inherit">Book Details</h1>
        <div className="flex flex-col py-0 pr-[663px] pl-0 box-border items-start justify-start gap-[13px] text-sm">
          <div className="whitespace-nowrap ">Published in</div>
          <div className="whitespace-nowrap ">United States</div>
          <div className="whitespace-nowrap mb-5">Edition Notes</div>
        </div>
        <div className="grid grid-cols-2 items-start justify-start  text-sm">
          <div className="text-darkgray">
            <p>series</p>
            <p>Gener</p>
            <p className="text-xl">Classifications</p>
            <p>Dewey</p>
            <p>Decimal Class</p>
            <p className="mb-6">Library of congress</p>
            <p className="text-xl">The physical object</p>
            <p>Pagination</p>
            <p className="mb-6">Number of pages</p>
            <p className="text-xl">ID Numbers</p>
            <p>My book shelf </p>
            <p>ISBN 10</p>
            <p>LCCV</p>
            <p>Library Thing</p>
            <p>Goodreads</p>
          </div>
          <div>
            <p>Dover large print classics</p>
            <p>Ficition.</p>
            <p>&nbsp;</p>
            <p className="mt-8">823/.8</p>
            <p>&nbsp;</p>
            <p>PR5485 .A1 2002</p>
            <p className="mb-6">&nbsp;</p>
            <p className="mt-9">ix, 112 p.(large print) ;</p>
            <p>216</p>
            <p>&nbsp;</p>
            <p className="mt-9">OL3570252M</p>
            <p>0486424715</p>
            <p>2002073560</p>
            <p>12349</p>
            <p>690668</p>
          </div>
          
        </div>
        
        
      </div>
    );
  }
}
