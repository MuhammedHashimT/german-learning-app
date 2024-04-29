import { useEffect, useState } from "react";

interface Page2Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Page6 = (props: Page2Props) => {

  const [qOne , setQOne ] =  useState(0)
  const [qTwo , setQTwo ] =  useState(0)
  const [qThree , setQThree ] =  useState(0)
  const [qFour , setQFour ] =  useState(0)
  const [qFive , setQFive ] =  useState(0)
  const [qSix , setQSix ] =  useState(0)
  const [qSeven , setQSeven ] =  useState(0)
  return (
    <>
      <div
        className={` absolute ${
          props.currentPage == 6
            ? "block z-40"
            : props.currentPage < 6
            ? "opacity-0  "
            : "-translate-x-full"
        }     transition-all delay-75 duration-1000`}
      >
        <div className="w-screen h-screen  flex flex-col lg:flex-row">
          <div className="w-full lg:w-5/6  h-[90%] lg:h-full grid grid-cols-3 grid-rows-3 gap-4 pl-2 lg:pl-32 md:pl-16 xl:pl-20  pr-2 md:pr-8  xl:pr-8 py-8">
            <div className="col-span-1 row-span-2 bg-slate-400 rounded-2xl overflow-hidden">
              <img
                className="object-cover h-full w-full"
                src="/story-1/1.png"
                alt=""
              />
            </div>
            <div className="col-span-1 row-span-2 col-start-2 row-start-1  bg-slate-400 rounded-2xl overflow-hidden">
              <img
                className="object-cover h-full w-full"
                src="/story-1/3.png"
                alt=""
              />
            </div>
            <div className="col-span-1 row-span-2 col-start-3 row-start-1  bg-slate-400 rounded-2xl overflow-hidden">
              <img
                className="object-cover h-full w-full"
                src="/story-1/4.png"
                alt=""
              />
            </div>
            <div className="col-span-3 flex flex-col  row-span-2 col-start-1 row-start-3   rounded-2xl overflow-hidden  justify-center">
              <p className=" text-gray-700 text-2xl p-4 text-center font-bold">
                Heute ist Samstag. Die
                <select
                  name=""
                  id=""
                  className="
                bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text border-solid border-2 hover:text-white hover:bg-clip-padding transition-all duration-500  text-lg py-1 px-8 font-bold rounded-2xl m-2
                "
                onChange={
                  (e)=>{setQOne(parseInt(e.target.value))}
                }
                >
                  <option
                    value=""
                    className="
                  text-black bg-white
                  "
                  >
                    Select
                  </option>
                  <option
                    value=""
                    className="
                  text-black bg-white
                  "
                  >
                    Mond
                  </option>
                  <option
                    value=""
                    className="
                  text-black bg-white
                  "
                  >
                    Stern
                  </option>
                </select>
                Sonne scheint. Dafi arbeitet im{" "}
                <select
                  name=""
                  id=""
                  className="
                bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text border-solid border-2 hover:text-white hover:bg-clip-padding transition-all duration-500  text-lg py-1 px-8 font-bold rounded-2xl m-2
                "
                >
                  <option
                    value=""
                    className="
                  text-black bg-white
                  "
                  >
                    Select
                  </option>
                  <option
                    value=""
                    className="
                  text-black bg-white
                  "
                  >
                    Mond
                  </option>
                  <option
                    value=""
                    className="
                  text-black bg-white
                  "
                  >
                    Stern
                  </option>
                </select>{" "}
                Garten. Der Zaun ist kaputt. Dafi holt einen Hammer und Nägel.
                Er repariert den{" "}
                <select
                  name=""
                  id=""
                  className="
                bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text border-solid border-2 hover:text-white hover:bg-clip-padding transition-all duration-500  text-lg py-1 px-8 font-bold rounded-2xl m-2
                "
                >
                  <option
                    value=""
                    className="
                  text-black bg-white
                  "
                  >
                    Select
                  </option>
                  <option
                    value=""
                    className="
                  text-black bg-white
                  "
                  >
                    Mond
                  </option>
                  <option
                    value=""
                    className="
                  text-black bg-white
                  "
                  >
                    Stern
                  </option>
                </select>{" "}
                Zaun
              </p>

              <button
                className="bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text border-solid border-2 hover:text-white hover:bg-clip-padding transition-all duration-500  text-lg py-1 px-8 font-bold rounded-2xl m-2 w-1/4 mx-auto"
                onClick={() => {
                  // props.setCurrentPage(props.currentPage + 1);
                  // localStorage.setItem("page", `${props.currentPage + 1}`);
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/6 h-[10%] lg:h-full flex  lg:flex-col items-end justify-end gap-4  p-8">
            <button
              onClick={() => {
                props.setCurrentPage(props.currentPage - 1);
                localStorage.setItem("page", `${props.currentPage - 1}`);
              }}
              className="bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text border-solid border-2 hover:text-white hover:bg-clip-padding transition-all duration-500  text-lg py-1 px-8 font-bold rounded-2xl"
            >
              Previous
            </button>

            <button
              onClick={() => {
                props.setCurrentPage(props.currentPage + 1);
                localStorage.setItem("page", `${props.currentPage + 1}`);
              }}
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

export default Page6;
