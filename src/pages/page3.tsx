interface Page2Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Page3 = (props: Page2Props) => {
  return (
    <>
      <div
        className={` absolute ${
          props.currentPage == 3
            ? "block z-40"
            : props.currentPage < 3
            ? "opacity-0  "
            : "-translate-x-full"
        }     transition-all delay-75 duration-1000`}
      >
        <div className="w-screen h-screen  flex">
          <div className="w-5/6 h-full grid grid-cols-4 grid-rows-10 gap-4 pl-56 pr-40 py-8">
            <div className="col-span-2 row-span-10 bg-slate-400 rounded-2xl overflow-hidden">
            <img className="object-cover object-center h-full" src="/story-1/1.png" alt="" />
            </div>
            <div className="col-span-2 row-span-2 col-start-3 row-start-1  rounded-2xl">
              <div className="grid relative grid-cols-4 grid-rows-1 gap-4 w-full h-full items-center justify-center ">
                <div className="col-span-1 row-span-1 rounded-lg overflow-hidden relative ">
                  <img src="/story-1/2.png" alt="" />
                  <div className="absolute z-50"> 1</div>
                </div>

                <div className="col-span-1 row-span-1 rounded-lg overflow-hidden relative ">
                  <img src="/story-1/3.png" alt="" />
                </div>

                <div className="col-span-1 row-span-1 rounded-lg overflow-hidden relative ">
                  <img src="/story-1/4.png" alt="" />
                </div>

                <div className="col-span-1 row-span-1 rounded-lg overflow-hidden relative ">
                  <img src="/story-1/5.png" alt="" />
                </div>

                <div className="col-span-1 row-span-1 rounded-lg overflow-hidden absolute translate-x-full opacity-0">
                  <img src="/story-1/2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-2 row-span-3 col-start-3 row-start-8  text-slate-700  rounded-2xl  text-lg flex flex-col justify-end">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing ..........
              </div>
              {/* options for fill the blanks */}

              <div className="flex gap-4">
                <button className="
                  w-1/2 border-solid border-2  rounded-2xl py-1  hover:scale-105 hover:bg-slate-400 hover:text-white transition-all duration-500 
                ">
                  Lebin
                </button>
                <button className="
                  w-1/2 border-solid border-2  rounded-2xl py-1 hover:scale-105 hover:bg-slate-400 hover:text-white transition-all duration-500 
                  ">
                  Liben
                </button>
                </div>
            </div>
          </div>
          <div className="w-1/6 h-full flex flex-col items-end justify-end gap-4  p-8">
            <button
              onClick={() => props.setCurrentPage(props.currentPage - 1)}
              className="bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text border-solid border-2 hover:text-white hover:bg-clip-padding transition-all duration-500  text-lg py-1 px-8 font-bold rounded-2xl"
            >
              Previous
            </button>

            <button
              onClick={() => props.setCurrentPage(props.currentPage + 1)}
              className="bg-gradient-to-r from-blue-500 to-orange-500 text-transparent text-white  border-solid border-2 hover:scale-105 transition-all duration-500  text-lg py-1 px-8 font-bold rounded-2xl"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
