interface Page2Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Page2 = (props: Page2Props) => {
  return (
    <>
      <div
        className={` absolute ${
          props.currentPage == 2
            ? "block z-40"
            : props.currentPage < 2
            ? "opacity-0  "
            : "-translate-x-full"
        }     transition-all delay-75 duration-1000`}
      >
        <div className="w-screen h-screen  flex">
          <div className="w-5/6 h-full grid grid-cols-4 grid-rows-10 gap-4 pl-56 pr-40 py-8">
            <div className="col-span-2 row-span-4 bg-slate-400 rounded-2xl overflow-hidden">
              <img className="object-cover" src="/story-1/1.png" alt="" />
            </div>
            <div className="col-span-2 row-span-3 col-start-1 row-start-5  bg-slate-400 rounded-2xl overflow-hidden">
            <img className="object-cover" src="/story-1/3.png" alt="" />

            </div>
            <div className="col-span-2 row-span-3 col-start-1 row-start-8  bg-slate-400 rounded-2xl overflow-hidden">
            <img className="object-cover" src="/story-1/4.png" alt="" />

            </div>
            <div className="col-span-2 row-span-4 col-start-3 row-start-1  bg-slate-400 rounded-2xl overflow-hidden">
            <img className="object-cover" src="/story-1/2.png" alt="" />

            </div>
            <div className="col-span-2 row-span-6 col-start-3 row-start-5  bg-slate-400 rounded-2xl overflow-hidden">
            <img className="object-cover" src="/story-1/5.png" alt="" />

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


export default Page2;
