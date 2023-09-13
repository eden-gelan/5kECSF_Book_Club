import Header from "../../commonComponents/header";
import React from "react";
import  BackToResult from "./component/backToResult"
import Overview from "./component/overview"
import PublishDate from "./component/publishDate"
import Preview from "./component/preview"
import BookDetail from "./component/bookDetail";
import About from "./component/about";

import Footer from "../../commonComponents/footer";
const SingleBook = () => {
  return (
    <div className="relative bg-white-100 w-full h-[2429px] overflow-hidden">
      <Header />
      <section className ="w-[1254px] h-[1556px] rounded-3xs bg-whitesmoke-100 ml-10">
      
          <BackToResult/>
          <Overview/>
          <PublishDate/>
          <Preview/>
          <div className="grid grid-cols-2 mt-8">
            <BookDetail/>
            <div>
              <About/>
            </div>
          </div>

        
      </section>
      <Footer/>
    </div>
  );
};

export default SingleBook;
