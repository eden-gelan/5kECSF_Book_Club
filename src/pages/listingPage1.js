import Header from "../commonComponents/header.js";
import Footer from "../commonComponents/footer.js";
import GridView from "../components/gridView.js";
import Filter from "../components/filter.js";

const listingPage1 = () => {
  return (
    <div>
      <Header />

      <div className="grid grid-cols-3 p-8">
        <Filter />
        <div className=" col-span-2  ">
          <div className="flex mb-8">
            <div className="h-8 flex flex-row items-center justify-end gap-[10px] ">
              <b className="relative leading-[32px]">
                Sort by : Alphabetically, A-Z
              </b>
              <img
                className="relative w-[15px] h-2"
                alt=""
                src="/vector6.svg"
              />
            </div>
            <div className="h-8 flex flex-row items-center justify-end gap-[11px] ">
              <b className="relative leading-[32px]">Show : 12</b>
              <img
                className="relative w-[15px] h-2"
                alt=""
                src="/vector6.svg"
              />
            </div>
            <div>
              <b className=" leading-[32px] ">Showing 1 - 12 of 26 result</b>
            </div>
          </div>
          <GridView />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default listingPage1;
