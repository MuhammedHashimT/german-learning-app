import { useEffect, useState } from "react";

interface PageProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

interface ButtonGroup {
  id: number;
  buttons: Button[];
}

interface Button {
  id: number;
  label: string;
}

const Page4 = (props: PageProps) => {
  const [selectedButtons, setSelectedButtons] = useState<number[]>([]);
  const initialGroups: ButtonGroup[] = [
    {
      id: 1,
      buttons: [
        { id: 1, label: "Button 1" },
        { id: 2, label: "Button 2" },
      ],
    },
    {
      id: 2,
      buttons: [
        { id: 3, label: "Button 3" },
        { id: 4, label: "Button 4" },
      ],
    },
    {
      id: 3,
      buttons: [
        { id: 5, label: "Button 5" },
        { id: 6, label: "Button 6" },
      ],
    },
    {
      id: 4,
      buttons: [
        { id: 7, label: "Button 7" },
        { id: 8, label: "Button 8" },
      ],
    },
  ];
  const [nom, setNom] = useState(0);
  const [Nots, setNots] = useState([
    { focus: "Lesen", text: "Noch ein Text.", status: 1, answer: "e" },
    { focus: "Strand", text: "Text hier.", status: 1, answer: "e" },
    { focus: "Kaffee", text: "Ein Text.", status: 1, answer: "e" },
    { focus: "Hochzeit", text: "Ein Text.", status: 1, answer: "en" },
    { focus: "Park", text: "Text.", status: 1, answer: "en" },
    { focus: "Schule", text: "Ein Text.", status: 1, answer: "e" },
    { focus: "Berg", text: "Text hier.", status: 1, answer: "e" },
    { focus: "Kunst", text: "Text.", status: 1, answer: "en" },
    { focus: "Blumen", text: "Ein Text.", status: 1, answer: "e" },
    { focus: "Theater", text: "Text hier.", status: 1, answer: "e" },
    { focus: "Restaurant", text: "Ein Text.", status: 1, answer: "e" },
    { focus: "Resurant", text: "Ein Rn Text.", status: 1, answer: "e" },
  ]);

  useEffect(() => {}, []);

  const handleClick = (groupId: number, buttonId: number) => {
    setSelectedButtons((prevSelectedButtons) => {
      const updatedSelected = prevSelectedButtons.filter((button) => {
        const group = initialGroups.find((group) => group.id === groupId);
        return group ? group.buttons.every((b) => b.id !== button) : false;
      });

      return [...updatedSelected, buttonId];
    });
  };

  return (
    <>
      <div
        className={`w-[200vw] h-screen absolute ${
          props.currentPage == 4
            ? "block z-40 "
            : props.currentPage < 4
            ? "opacity-0 "  
            : "trans opacity-0"
        }  right-0 pl-[100vw]  transition-all delay-75 duration-1000`}
      >
        <div className="w-screen h-screen flex  ">
          <div className="w-5/6 h-full">
            <div className="w-full h-1/2 grid grid-cols-12 grid-rows-4 gap-4 px-2 py-4">
              <div className="flex items-center justify-end">
                <div
                  className={`w-10 h-10 rounded-lg ${
                    Nots[0].status == 1
                      ? "bg-slate-500"
                      : Nots[0].status == 2
                      ? "bg-blue-500"
                      : Nots[0].status == 3
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
              </div>
              <div className="col-start-1 row-start-2 flex items-center justify-end">
                <div
                  className={`w-10 h-10 rounded-lg ${
                    Nots[1].status == 1
                      ? "bg-slate-500"
                      : Nots[1].status == 2
                      ? "bg-blue-500"
                      : Nots[1].status == 3
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
              </div>
              <div className="col-start-1 row-start-3 flex items-center justify-end">
                <div
                  className={`w-10 h-10 rounded-lg ${
                    Nots[2].status == 1
                      ? "bg-slate-500"
                      : Nots[2].status == 2
                      ? "bg-blue-500"
                      : Nots[2].status == 3
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
              </div>
              <div className="col-start-1 row-start-4 flex items-center justify-end">
                <div
                  className={`w-10 h-10 rounded-lg ${
                    Nots[3].status == 1
                      ? "bg-slate-500"
                      : Nots[3].status == 2
                      ? "bg-blue-500"
                      : Nots[3].status == 3
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
              </div>

              <div className="col-span-4 col-start-2 row-start-1 flex items-center justify-start  font-medium text-lg  ">
                <span className="pr-2 font-extrabold text-green-600">
                  {Nots[1 - 1].focus}
                </span>{" "}
                {Nots[1 - 1].text}
              </div>
              <div className="col-span-4 col-start-2 row-start-2 flex items-center justify-start  font-medium text-xl ">
                {" "}
                <span className="pr-2 font-extrabold text-blue-600">
                  {Nots[2 - 1].focus}
                </span>{" "}
                {Nots[2 - 1].text}
              </div>
              <div className="col-span-4 col-start-2 row-start-3 flex items-center justify-start  font-medium text-xl ">
                {" "}
                <span className="pr-2 font-extrabold text-yellow-600">
                  {Nots[3 - 1].focus}
                </span>{" "}
                {Nots[3 - 1].text}
              </div>
              <div className="col-span-4 col-start-2 row-start-4 flex items-center justify-start  font-medium text-xl ">
                {" "}
                <span className="pr-2 font-extrabold text-pink-600">
                  {Nots[4 - 1].focus}
                </span>{" "}
                {Nots[4 - 1].text}
              </div>

              <div className="col-start-5 row-start-1 flex items-center justify-end">
                <div
                  className={`w-10 h-10 rounded-lg  flex items-center justify-end ${
                    Nots[4].status == 1
                      ? "bg-slate-500"
                      : Nots[4].status == 2
                      ? "bg-blue-500"
                      : Nots[4].status == 3
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
              </div>
              <div className="col-start-5 row-start-2 flex items-center justify-end">
                <div
                  className={`w-10 h-10 rounded-lg  flex items-center justify-end ${
                    Nots[5].status == 1
                      ? "bg-slate-500"
                      : Nots[5].status == 2
                      ? "bg-blue-500"
                      : Nots[5].status == 3
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
              </div>
              <div className="col-start-5 row-start-3 flex items-center justify-end">
                <div
                  className={`w-10 h-10 rounded-lg  flex items-center justify-end ${
                    Nots[6].status == 1
                      ? "bg-slate-500"
                      : Nots[6].status == 2
                      ? "bg-blue-500"
                      : Nots[6].status == 3
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
              </div>
              <div className="col-start-5 row-start-4 flex items-center justify-end">
                <div
                  className={`w-10 h-10 rounded-lg  flex items-center justify-end ${
                    Nots[7].status == 1
                      ? "bg-slate-500"
                      : Nots[7].status == 2
                      ? "bg-blue-500"
                      : Nots[7].status == 3
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
              </div>
              
              <div className="col-span-3 col-start-6 row-start-1 flex items-center justify-start  font-medium text-xl ">
                {" "}
                <span className="pr-2 font-extrabold text-green-600">
                  {Nots[5 - 1].focus}
                </span>{" "}
                {Nots[5 - 1].text}
              </div>
              <div className="col-span-3 col-start-6 row-start-2 flex items-center justify-start  font-medium text-xl ">
                {" "}
                <span className="pr-2 font-extrabold text-blue-600">
                  {Nots[6 - 1].focus}
                </span>{" "}
                {Nots[6 - 1].text}
              </div>
              <div className="col-span-3 col-start-6 row-start-3 flex items-center justify-start  font-medium text-xl ">
                {" "}
                <span className="pr-2 font-extrabold text-yellow-600">
                  {Nots[7 - 1].focus}
                </span>{" "}
                {Nots[7 - 1].text}
              </div>
              <div className="col-span-3 col-start-6 row-start-4 flex items-center justify-start  font-medium text-xl ">
                {" "}
                <span className="pr-2 font-extrabold text-pink-600">
                  {Nots[8 - 1].focus}
                </span>{" "}
                {Nots[8 - 1].text}
              </div>
              <div className="col-start-9 row-start-1 flex items-center justify-end">
                <div
                  className={`w-10 h-10 rounded-lg  flex items-center justify-end ${
                    Nots[8].status == 1
                      ? "bg-slate-500"
                      : Nots[8].status == 2
                      ? "bg-blue-500"
                      : Nots[8].status == 3
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
              </div>
              <div className="col-start-9 row-start-2 flex items-center justify-end">
                <div
                  className={`w-10 h-10 rounded-lg  flex items-center justify-end ${
                    Nots[9].status == 1
                      ? "bg-slate-500"
                      : Nots[9].status == 2
                      ? "bg-blue-500"
                      : Nots[9].status == 3
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
              </div>
              <div className="col-start-9 row-start-3 flex items-center justify-end">
                <div
                  className={`w-10 h-10 rounded-lg  flex items-center justify-end ${
                    Nots[10].status == 1
                      ? "bg-slate-500"
                      : Nots[10].status == 2
                      ? "bg-blue-500"
                      : Nots[10].status == 3
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
              </div>
              <div className="col-start-9 row-start-4 flex items-center justify-end">
                <div
                  className={`w-10 h-10 rounded-lg  flex items-center justify-end ${
                    Nots[11].status == 1
                      ? "bg-slate-500"
                      : Nots[11].status == 2
                      ? "bg-blue-500"
                      : Nots[11].status == 3
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
              </div>
              <div className="col-span-3 col-start-10 row-start-1 flex items-center justify-start  font-medium text-xl ">
                {" "}
                <span className="pr-2 font-extrabold text-green-600">
                  {Nots[9 - 1].focus}
                </span>{" "}
                {Nots[9 - 1].text}
              </div>
              <div className="col-span-3 col-start-10 row-start-2 flex items-center justify-start  font-medium text-xl ">
                {" "}
                <span className="pr-2 font-extrabold text-blue-600">
                  {Nots[10 - 1].focus}
                </span>{" "}
                {Nots[10 - 1].text}
              </div>
              <div className="col-span-3 col-start-10 row-start-3 flex items-center justify-start  font-medium text-xl ">
                {" "}
                <span className="pr-2 font-extrabold text-yellow-600">
                  {Nots[11 - 1].focus}
                </span>{" "}
                {Nots[11 - 1].text}
              </div>
              <div className="col-span-3 col-start-10 row-start-4 flex items-center justify-start  font-medium text-xl ">
                {" "}
                <span className="pr-2 font-extrabold text-pink-600">
                  {Nots[12 - 1].focus}
                </span>{" "}
                {Nots[12 - 1].text}
              </div>
            </div>

            <p className="text-center text-3xl">
              {nom == 0 ? "Nominative" : nom == 1 ? "Akkusative" : "Dative"}
            </p>
            <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-[35%] px-48">
              <div className="col-span-3 flex items-center justify-center  font-medium text-3xl ">
                <span className="pr-2 font-extrabold text-green-600">
                  {Nots[nom * 4 + 0].focus}
                </span>{" "}
                {Nots[nom * 4 + 0].text}
              </div>
              <div className="col-start-4 flex items-center justify-center  font-medium text-3xl gap-4">
                <button
                  className={`rounded-lg flex items-center justify-end px-4 py-1 transition-all duration-500 text-white focus:bg-blue-500 ${
                    selectedButtons.includes(1)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-500"
                  }`}
                  onClick={() => {
                    handleClick(1, 1);
                    if (Nots[nom * 4 + 0].answer == "e") {
                      Nots[nom * 4 + 0].status = 3;
                      setNots(Nots);
                    } else {
                      Nots[nom * 4 + 0].status = 4;
                      setNots(Nots);
                    }
                    console.log(Nots);
                    
                  }}
                >
                  e
                </button>

                <button
                  className={`rounded-lg flex items-center justify-end px-4 py-1 transition-all duration-500 text-white focus:bg-blue-500 ${
                    selectedButtons.includes(2)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-500"
                  }`}
                  onClick={() => {
                    handleClick(1, 2);
                    if (Nots[nom * 4 + 0].answer == "en") {
                      Nots[nom * 4 + 0].status = 3;
                      setNots(Nots);
                    } else {
                      Nots[nom * 4 + 0].status = 4;
                      setNots(Nots);
                    }
                  }}
                >
                  en
                </button>
              </div>
              <div className="col-span-3 row-start-2 flex items-center justify-center  font-medium text-3xl ">
                <span className="pr-2 font-extrabold text-green-600">
                  {Nots[nom * 4 + 1].focus}
                </span>{" "}
                {Nots[nom * 4 + 1].text}
              </div>
              <div className="col-start-4 row-start-2 flex items-center justify-center  font-medium text-3xl gap-4">
                <button
                  className={`rounded-lg blex items-center justify-end px-4 py-1 transition-all duration-500 text-white focus:bg-blue-500 ${
                    selectedButtons.includes(3)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-500"
                  }`}
                  onClick={() => {
                    handleClick(2, 3);
                    if (Nots[nom * 4 + 1].answer == "e") {
                      Nots[nom * 4 + 1].status = 3;
                      setNots(Nots);
                    } else {
                      Nots[nom * 4 + 1].status = 4;
                      setNots(Nots);
                    }
                  }}
                >
                  e
                </button>

                <button
                  className={`rounded-lg flex items-center justify-end px-4 py-1 transition-all duration-500 text-white focus:bg-blue-500 ${
                    selectedButtons.includes(4)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-500"
                  }`}
                  onClick={() => {
                    handleClick(2, 4);
                    if (Nots[nom * 4 + 1].answer == "en") {
                      Nots[nom * 4 + 1].status = 3;
                      setNots(Nots);
                    } else {
                      Nots[nom * 4 + 1].status = 4;
                      setNots(Nots);
                    }
                  }}
                >
                  en
                </button>
              </div>
              <div className="col-span-3 row-start-3 flex items-center justify-center  font-medium text-3xl ">
                <span className="pr-2 font-extrabold text-green-600">
                  {Nots[nom * 4 + 2].focus}
                </span>{" "}
                {Nots[nom * 4 + 2].text}
              </div>
              <div className="col-start-4 row-start-3 flex items-center justify-center  font-medium text-3xl gap-4">
                <button
                  className={`rounded-lg blex items-center justify-end px-4 py-1 transition-all duration-500 text-white focus:bg-blue-500 ${
                    selectedButtons.includes(5)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-500"
                  }`}
                  onClick={() => {
                    handleClick(3, 5);
                    if (Nots[nom * 4 + 2].answer == "e") {
                      Nots[nom * 4 + 2].status = 3;
                      setNots(Nots);
                    } else {
                      Nots[nom * 4 + 2].status = 4;
                      setNots(Nots);
                    }
                  }}
                >
                  e
                </button>

                <button
                  className={`rounded-lg flex items-center justify-end px-4 py-1 transition-all duration-500 text-white focus:bg-blue-500 ${
                    selectedButtons.includes(6)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-500"
                  }`}
                  onClick={() => {
                    handleClick(3, 6);
                    if (Nots[nom * 4 + 2].answer == "en") {
                      Nots[nom * 4 + 2].status = 3;
                      setNots(Nots);

                      console.log(Nots);
                    } else {
                      Nots[nom * 4 + 2].status = 4;
                      setNots(Nots);
                    }
                  }}
                >
                  en
                </button>
              </div>
              <div className="col-span-3 row-start-4 flex items-center justify-center  font-medium text-3xl">
                <span className="pr-2 font-extrabold text-green-600">
                  {Nots[nom * 4 + 3].focus}
                </span>{" "}
                {Nots[nom * 4 + 3].text}
              </div>
              <div className="col-start-4 row-start-4 flex items-center justify-center  font-medium text-3xl gap-4">
                <button
                  className={`rounded-lg blex items-center justify-end px-4 py-1 transition-all duration-500 text-white focus:bg-blue-500 ${
                    selectedButtons.includes(7)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-500"
                  }`}
                  onClick={() => {
                    handleClick(4, 7);
                    if (Nots[nom * 4 + 3].answer == "e") {
                      Nots[nom * 4 + 3].status = 3;
                      setNots(Nots);
                    } else {
                      Nots[nom * 4 + 3].status = 4;
                      setNots(Nots);
                    }
                  }}
                >
                  e
                </button>

                <button
                  className={`rounded-lg flex items-center justify-end px-4 py-1 transition-all duration-500 text-white focus:bg-blue-500 ${
                    selectedButtons.includes(8)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-500"
                  }`}
                  onClick={() => {
                    handleClick(4, 8);
                    if (Nots[nom * 4 + 3].answer == "en") {
                      Nots[nom * 4 + 3].status = 3;
                      setNots(Nots);
                    } else {
                      Nots[nom * 4 + 3].status = 4;
                      setNots(Nots);
                    }
                  }}
                >
                  en
                </button>
              </div>
            </div>

            <div
              className={`w-full h-[5%]  flex items-center justify-center gap-4  p-8 transition-all ease-out duration-500 `}
            >
              <button
                onClick={() => {
                  setNom((nom + 1) % 3);
                  setSelectedButtons([]);
                }}
                className="bg-gradient-to-r from-blue-500 to-orange-500 text-transparent text-white  border-solid border-2 hover:scale-105 transition-all duration-500  text-lg py-1 px-8 font-bold rounded-2xl"
              >
                {nom % 3 == 2 ? "Redo" : "Next"}
              </button>
            </div>
          </div>

          <div
            className={`w-1/6 h-full flex flex-col items-end justify-end gap-4  p-8 transition-all ease-out duration-500 ${
              nom == 2 ? "opacity-100" : "opacity-0"
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
