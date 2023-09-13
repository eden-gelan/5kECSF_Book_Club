import Header from "../../commonComponents/header";
import React from "react";
import  BackToResult from "./component/backToResultLoco"
import Overview from "./component/overviewLoco"
import PublishDate from "./component/publishDateLoco"
import Preview from "./component/previewLoco"
import BookDetail from "./component/bookDetailLoco";
import About from "./component/aboutLoco";
const SingleBook = () => {
  return (
    <div className="relative bg-white-100 w-full h-[2429px] overflow-hidden">
      <Header />
      <section className ="w-[1254px] h-[1556px] rounded-3xs bg-forestgreen-200 ml-10">
      
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
    </div>
  );
};

export default SingleBook;
