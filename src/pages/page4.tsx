import { useEffect, useState } from "react";

interface Page2Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Page4 = (props: Page2Props) => {
  const [comicNo, setComicNo] = useState(1);
  const [comicOne, setComicOne] = useState({
    one: 2,
    two: 1,
    three: 1,
    four: 1,
    five: 1,
  });

  const Nots = [
    { focus: "Kochen", text: "Ein kurzer Text.", status: 1 },
    { focus: "Lesen", text: "Noch ein Text.", status: 1 },
    { focus: "Strand", text: "Text hier.", status: 1 },
    { focus: "Kaffee", text: "Ein Text.", status: 1 },
    { focus: "Hochzeit", text: "Ein Text.", status: 1 },
    { focus: "Park", text: "Text.", status: 1 },
    { focus: "Schule", text: "Ein Text.", status: 1 },
    { focus: "Berg", text: "Text hier.", status: 1 },
    { focus: "Kunst", text: "Text.", status: 1 },
    { focus: "Blumen", text: "Ein Text.", status: 1 },
    { focus: "Theater", text: "Text hier.", status: 1 },
    { focus: "Restaurant", text: "Ein Text.", status: 1 },
    { focus: "Resurant", text: "Ein Rn Text.", status: 1 }
  ];

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
        className={` absolute ${
          props.currentPage == 4
            ? "block z-40"
            : props.currentPage < 4
            ? "opacity-0  "
            : "-translate-x-full"
        }     transition-all delay-75 duration-1000`}
      >
        <div className="w-screen h-screen flex  ">
          <div className="w-5/6 h-1/2 grid grid-cols-12 grid-rows-4 gap-4 px-2 py-4">
            <div className="flex items-center justify-end">
              <div className="w-10 h-10 rounded-lg bg-slate-400"></div>
            </div>
            <div className="col-start-1 row-start-2 flex items-center justify-end">
              <div className="w-10 h-10 rounded-lg bg-slate-400"></div>
            </div>
            <div className="col-start-1 row-start-3 flex items-center justify-end">
              <div className="w-10 h-10 rounded-lg bg-slate-400"></div>
            </div>
            <div className="col-start-1 row-start-4 flex items-center justify-end">
              <div className="w-10 h-10 rounded-lg bg-slate-400"></div>
            </div>

            <div className="col-span-4 col-start-2 row-start-1 flex items-center justify-start  font-medium text-lg  ">
              <span className="pr-2 font-extrabold text-green-600">
                {Nots[1].focus}
              </span>{" "}
              {Nots[1].text}
            </div>
            <div className="col-span-4 col-start-2 row-start-2 flex items-center justify-start  font-medium text-xl ">
              {" "}
              <span className="pr-2 font-extrabold text-blue-600">
                {Nots[2].focus}
              </span>{" "}
              {Nots[2].text}
            </div>
            <div className="col-span-4 col-start-2 row-start-3 flex items-center justify-start  font-medium text-xl ">
              {" "}
              <span className="pr-2 font-extrabold text-yellow-600">
                {Nots[3].focus}
              </span>{" "}
              {Nots[3].text}
            </div>
            <div className="col-span-4 col-start-2 row-start-4 flex items-center justify-start  font-medium text-xl ">
              {" "}
              <span className="pr-2 font-extrabold text-pink-600">
                {Nots[4].focus}
              </span>{" "}
              {Nots[4].text}
            </div>

            <div className="col-start-5 row-start-1 flex items-center justify-end">
              <div className="w-10 h-10 rounded-lg bg-slate-400 flex items-center justify-end"></div>
            </div>
            <div className="col-start-5 row-start-2 flex items-center justify-end">
              <div className="w-10 h-10 rounded-lg bg-slate-400 flex items-center justify-end"></div>
            </div>
            <div className="col-start-5 row-start-3 flex items-center justify-end">
              <div className="w-10 h-10 rounded-lg bg-slate-400 flex items-center justify-end"></div>
            </div>
            <div className="col-start-5 row-start-4 flex items-center justify-end">
              <div className="w-10 h-10 rounded-lg bg-slate-400 flex items-center justify-end"></div>
            </div>
            <div className="col-span-3 col-start-6 row-start-1 flex items-center justify-start  font-medium text-xl ">
              {" "}
              <span className="pr-2 font-extrabold text-green-600">
                {Nots[5].focus}
              </span>{" "}
              {Nots[5].text}
            </div>
            <div className="col-span-3 col-start-6 row-start-2 flex items-center justify-start  font-medium text-xl ">
              {" "}
              <span className="pr-2 font-extrabold text-blue-600">
                {Nots[6].focus}
              </span>{" "}
              {Nots[6].text}
            </div>
            <div className="col-span-3 col-start-6 row-start-3 flex items-center justify-start  font-medium text-xl ">
              {" "}
              <span className="pr-2 font-extrabold text-yellow-600">
                {Nots[7].focus}
              </span>{" "}
              {Nots[7].text}
            </div>
            <div className="col-span-3 col-start-6 row-start-4 flex items-center justify-start  font-medium text-xl ">
              {" "}
              <span className="pr-2 font-extrabold text-pink-600">
                {Nots[8].focus}
              </span>{" "}
              {Nots[8].text}
            </div>
            <div className="col-start-9 row-start-1 flex items-center justify-end">
              <div className="w-10 h-10 rounded-lg bg-slate-400 flex items-center justify-end"></div>
            </div>
            <div className="col-start-9 row-start-2 flex items-center justify-end">
              <div className="w-10 h-10 rounded-lg bg-slate-400 flex items-center justify-end"></div>
            </div>
            <div className="col-start-9 row-start-3 flex items-center justify-end">
              <div className="w-10 h-10 rounded-lg bg-slate-400 flex items-center justify-end"></div>
            </div>
            <div className="col-start-9 row-start-4 flex items-center justify-end">
              <div className="w-10 h-10 rounded-lg bg-slate-400 flex items-center justify-end"></div>
            </div>
            <div className="col-span-3 col-start-10 row-start-1 flex items-center justify-start  font-medium text-xl ">
              {" "}
              <span className="pr-2 font-extrabold text-green-600">
                {Nots[9].focus}
              </span>{" "}
              {Nots[9].text}
            </div>
            <div className="col-span-3 col-start-10 row-start-2 flex items-center justify-start  font-medium text-xl ">
              {" "}
              <span className="pr-2 font-extrabold text-blue-600">
                {Nots[10].focus}
              </span>{" "}
              {Nots[10].text}
            </div>
            <div className="col-span-3 col-start-10 row-start-3 flex items-center justify-start  font-medium text-xl ">
              {" "}
              <span className="pr-2 font-extrabold text-yellow-600">
                {Nots[11].focus}
              </span>{" "}
              {Nots[11].text}
            </div>
            <div className="col-span-3 col-start-10 row-start-4 flex items-center justify-start  font-medium text-xl ">
              {" "}
              <span className="pr-2 font-extrabold text-pink-600">
                {Nots[12].focus}
              </span>{" "}
              {Nots[12].text}
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

export default Page4;
