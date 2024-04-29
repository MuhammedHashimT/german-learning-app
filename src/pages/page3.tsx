import { useEffect, useState } from "react";

interface Page2Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Page3 = (props: Page2Props) => {
  const [comicNo, setComicNo] = useState(1);
  const [comicOne, setComicOne] = useState({
    one: 2,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
  });

  useEffect(() => {
    const comic = localStorage.getItem(`comicOne`);
    const comicNo = localStorage.getItem("comicOneNo");
    if (comic) {
      setComicOne(JSON.parse(comic));
    }

    if (comicNo) {
      setComicNo(parseInt(comicNo));
    }
  }, []);

  return (
    <>
      <div
        className={`w-[200vw] h-screen absolute ${
          props.currentPage == 3
            ? "block z-40 "
            : props.currentPage < 3
            ? "opacity-0 "
            : "trans opacity-0"
        }  right-0 pl-[100vw]  transition-all delay-75 duration-1000`}
      >
        <div className="w-screen h-screen  flex">
          <div className="w-5/6 h-full grid grid-cols-4 grid-rows-10 gap-4 pl-2 lg:pl-36 md:pl-4 xl:pl-56  pr-2 md:pr-28 lg:32 xl:pr-40 py-8">
            <div className="col-span-2 row-span-10 bg-slate-400 rounded-2xl overflow-hidden relative">
              <img
                className={`object-cover object-center h-full transition-all ease-in duration-500 absolute z-50  ${
                  comicNo > 1 ? "-translate-x-full" : "translate-x-0"
                }`}
                src="/story-1/1.png"
                alt=""
              />
              <img
                className={`object-cover object-center h-full transition-all ease-in duration-500 absolute z-40 ${
                  comicNo > 2 ? "-translate-x-full" : "translate-x-0"
                }`}
                src="/story-1/2.png"
                alt=""
              />
              <img
                className={`object-cover object-center h-full transition-all ease-in duration-500 absolute z-30 ${
                  comicNo > 3 ? "-translate-x-full" : "translate-x-0"
                }`}
                src="/story-1/3.png"
                alt=""
              />
              <img
                className={`object-cover object-center h-full transition-all ease-in duration-500 absolute z-20 ${
                  comicNo > 4 ? "-translate-x-full" : "translate-x-0"
                }`}
                src="/story-1/4.png"
                alt=""
              />
              <img
                className={`object-cover object-center h-full transition-all ease-in duration-500 absolute z-10 ${
                  comicNo > 5 ? "-translate-x-full" : "translate-x-0"
                }`}
                src="/story-1/5.png"
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-3 row-start-1  rounded-2xl">
              <div className="grid relative grid-cols-5 grid-rows-1  w-full h-full items-center justify-center overflow-hidden">
                <div
                  className={`col-span-1 p-1 row-span-1 rounded-lg overflow-hidden relative transition-all ease-in duration-500 `}
                >
                  <div
                    className={`p-[4px] rounded-lg ${
                      comicOne.one == 1
                        ? "bg-gray-500"
                        : comicOne.one == 2
                        ? "bg-blue-500"
                        : comicOne.one == 3
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    <img className="rounded-lg" src="/story-1/1.png" alt="" />
                  </div>
                  <div className="absolute z-50"> 1</div>
                </div>

                <div
                  className={`col-span-1 p-1 row-span-1 rounded-lg overflow-hidden relative transition-all ease-in duration-500 `}
                >
                  <div
                    className={`p-[4px] rounded-lg ${
                      comicOne.two == 1
                        ? "bg-gray-500"
                        : comicOne.two == 2
                        ? "bg-blue-500"
                        : comicOne.two == 3
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    <img className="rounded-lg" src="/story-1/2.png" alt="" />
                  </div>
                </div>

                <div
                  className={`col-span-1 p-1 row-span-1 rounded-lg overflow-hidden relative transition-all ease-in duration-500  `}
                >
                  <div
                    className={`p-[4px] rounded-lg ${
                      comicOne.three == 1
                        ? "bg-gray-500"
                        : comicOne.three == 2
                        ? "bg-blue-500"
                        : comicOne.three == 3
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    <img className="rounded-lg" src="/story-1/3.png" alt="" />
                  </div>
                </div>

                <div
                  className={`col-span-1 p-1 row-span-1 rounded-lg overflow-hidden relative transition-all ease-in duration-500  `}
                >
                  <div
                    className={`p-[4px] rounded-lg ${
                      comicOne.four == 1
                        ? "bg-gray-500"
                        : comicOne.four == 2
                        ? "bg-blue-500"
                        : comicOne.four == 3
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    <img className="rounded-lg" src="/story-1/4.png" alt="" />
                  </div>
                </div>

                <div
                  className={`col-span-1 p-1 row-span-1 rounded-lg overflow-hidden relative transition-all ease-in duration-500  `}
                >
                  <div
                    className={`p-[4px] rounded-lg ${
                      comicOne.five == 1
                        ? "bg-gray-500"
                        : comicOne.five == 2
                        ? "bg-blue-500"
                        : comicOne.five == 3
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    <img className="rounded-lg" src="/story-1/5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={` 
                     ${
                       comicNo == 5 ? "opacity-100" : "opacity-0"
                     } flex items-center justify-center col-span-2 row-span-2 col-start-3 row-start-6  text-slate-700   rounded-2xl  text-lg  flex-col  overflow-hidden
                    `}
            >
              <svg
                onClick={() => {
                  setTimeout(() => {
                    setComicOne({
                      one: 2,
                      two: 1,
                      three: 1,
                      four: 1,
                      five: 1,
                    });
                    setComicNo(1);
                    localStorage.setItem(
                      `comicOne`,
                      JSON.stringify({
                        one: 2,
                        two: 1,
                        three: 1,
                        four: 1,
                        five: 1,
                      })
                    );
                    localStorage.setItem("comicOneNo", `1`);
                  }, 500);
                }}
                className=" fill-blue-600 w-10 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z" />
              </svg>
              Repeat
            </div>

            <div className=" relative col-span-2 row-span-3 col-start-3 row-start-8  text-slate-700  rounded-2xl  text-lg flex flex-col justify-end overflow-hidden">
              <div
                className={`bg-white transition-all ease-in duration-500 absolute z-50 ${
                  comicNo > 1 ? "-translate-x-full" : "translate-x-0"
                }`}
              >
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing ..........
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setTimeout(() => {
                        setComicOne({ ...comicOne, one: 3, two: 2 });
                        setComicNo(comicNo + 1);
                        localStorage.setItem(
                          `comicOne`,
                          JSON.stringify(comicOne)
                        );
                        localStorage.setItem("comicOneNo", `${comicNo + 1}`);
                      }, 1000);
                    }}
                    className="
                  w-1/2 border-solid border-2 focus:bg-green-500 focus:text-white  rounded-2xl py-1  hover:scale-105 hover:bg-slate-400 hover:text-white transition-all duration-500 
                "
                  >
                    Lebin
                  </button>
                  <button
                    className="
                  w-1/2 border-solid border-2 focus:bg-red-500 focus:text-white rounded-2xl py-1 hover:scale-105 hover:bg-slate-400    transition-all duration-500 
                  "
                    onClick={() => {
                      setTimeout(() => {
                        setComicOne({ ...comicOne, one: 4, two: 2 });
                        setComicNo(comicNo + 1);
                        localStorage.setItem(
                          `comicOne`,
                          JSON.stringify(comicOne)
                        );
                        localStorage.setItem("comicOneNo", `${comicNo + 1}`);
                      }, 1000);
                    }}
                  >
                    Liben
                  </button>
                </div>
              </div>

              <div
                className={`bg-white transition-all ease-in duration-500 absolute z-40 ${
                  comicNo > 2 ? "-translate-x-full" : "translate-x-0"
                }`}
              >
                <div>
                  An essay is a literary composition that is analytic ..........
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setTimeout(() => {
                        setComicOne({ ...comicOne, two: 4, three: 2 });
                        setComicNo(comicNo + 1);
                        localStorage.setItem(
                          `comicOne`,
                          JSON.stringify(comicOne)
                        );
                        localStorage.setItem("comicOneNo", `${comicNo + 1}`);
                      }, 1000);
                    }}
                    className="
                  w-1/2 border-solid border-2 focus:bg-red-500 focus:text-white  rounded-2xl py-1  hover:scale-105 hover:bg-slate-400 hover:text-white transition-all duration-500 
                "
                  >
                    that
                  </button>
                  <button
                    onClick={() => {
                      setTimeout(() => {
                        setComicOne({ ...comicOne, two: 3, three: 2 });
                        setComicNo(comicNo + 1);
                        localStorage.setItem(
                          `comicOne`,
                          JSON.stringify(comicOne)
                        );
                        localStorage.setItem("comicOneNo", `${comicNo + 1}`);
                      }, 1000);
                    }}
                    className="
                  w-1/2 border-solid border-2 focus:bg-green-500 focus:text-white  rounded-2xl py-1 hover:scale-105 hover:bg-slate-400 hover:text-white transition-all duration-500 
                  "
                  >
                    thit
                  </button>
                </div>
              </div>

              <div
                className={`bg-white transition-all ease-in duration-500 absolute z-30 ${
                  comicNo > 3 ? "-translate-x-full" : "translate-x-0"
                }`}
              >
                <div>
                  limited and personal perspective, and can inform or persuade
                  ..........
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setTimeout(() => {
                        setComicOne({ ...comicOne, three: 3, four: 2 });
                        setComicNo(comicNo + 1);
                        localStorage.setItem(
                          `comicOne`,
                          JSON.stringify(comicOne)
                        );
                        localStorage.setItem("comicOneNo", `${comicNo + 1}`);
                      }, 1000);
                    }}
                    className="
                  w-1/2 border-solid border-2 focus:bg-green-500 focus:text-white  rounded-2xl py-1  hover:scale-105 hover:bg-slate-400 hover:text-white transition-all duration-500 
                "
                  >
                    tinformhat
                  </button>
                  <button
                    onClick={() => {
                      setTimeout(() => {
                        setComicOne({ ...comicOne, three: 4, four: 2 });
                        setComicNo(comicNo + 1);
                        localStorage.setItem(
                          `comicOne`,
                          JSON.stringify(comicOne)
                        );
                        localStorage.setItem("comicOneNo", `${comicNo + 1}`);
                      }, 1000);
                    }}
                    className="
                  w-1/2 border-solid border-2 focus:bg-red-500 focus:text-white rounded-2xl py-1 hover:scale-105 hover:bg-slate-400 hover:text-white transition-all duration-500 
                  "
                  >
                    inform
                  </button>
                </div>
              </div>

              <div
                className={`bg-white transition-all ease-in duration-500 absolute z-20 ${
                  comicNo > 4 ? "-translate-x-full" : "translate-x-0"
                }`}
              >
                <div>
                  typically have three parts: introduction, body, ..........
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setTimeout(() => {
                        setComicOne({ ...comicOne, four: 4, five: 2 });
                        setComicNo(comicNo + 1);
                        localStorage.setItem(
                          `comicOne`,
                          JSON.stringify(comicOne)
                        );
                        localStorage.setItem("comicOneNo", `${comicNo + 1}`);
                      }, 1000);
                    }}
                    className="
                  w-1/2 border-solid border-2 focus:bg-red-500 focus:text-white rounded-2xl py-1  hover:scale-105 hover:bg-slate-400 hover:text-white transition-all duration-500 
                "
                  >
                    tinfmhat
                  </button>
                  <button
                    onClick={() => {
                      setTimeout(() => {
                        setComicOne({ ...comicOne, four: 3, five: 2 });
                        setComicNo(comicNo + 1);
                        localStorage.setItem(
                          `comicOne`,
                          JSON.stringify(comicOne)
                        );
                        localStorage.setItem("comicOneNo", `${comicNo + 1}`);
                      }, 1000);
                    }}
                    className="
                  w-1/2 border-solid border-2 focus:bg-green-500 focus:text-white  rounded-2xl py-1 hover:scale-105 hover:bg-slate-400 hover:text-white transition-all duration-500 
                  "
                  >
                    iorm
                  </button>
                </div>
              </div>

              <div
                className={`bg-white transition-all ease-in duration-500 absolute z-10 ${
                  comicNo > 5 ? "-translate-x-full" : "translate-x-0"
                }`}
              >
                <div>
                  dissertation. Essays are often written from a limited and
                  personal perspective ..........
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setTimeout(() => {
                        setComicOne({ ...comicOne, five: 4 });
                        localStorage.setItem(
                          `comicOne`,
                          JSON.stringify(comicOne)
                        );
                      }, 1000);
                    }}
                    className="
                  w-1/2 border-solid border-2  focus:bg-red-500 focus:text-white rounded-2xl py-1  hover:scale-105 hover:bg-slate-400 hover:text-white transition-all duration-500 
                "
                  >
                    limited
                  </button>
                  <button
                    className="
                  w-1/2 border-solid border-2  focus:bg-green-500 focus:text-white rounded-2xl py-1 hover:scale-105 hover:bg-slate-400 hover:text-white transition-all duration-500 
                  "
                    onClick={() => {
                      setTimeout(() => {
                        setComicOne({ ...comicOne, five: 3 });
                        localStorage.setItem(
                          `comicOne`,
                          JSON.stringify(comicOne)
                        );
                      }, 1000);
                    }}
                  >
                    dsad
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-1/6 h-full flex flex-col items-end justify-end gap-4  p-8 transition-all ease-out duration-500 ${
              comicNo == 5 ? "opacity-100" : "opacity-0"
            }`}
          >
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

export default Page3;
