import { useState } from "react";

interface Page1Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Page1 = (props: Page1Props) => {
  const [isLearning, setIsLearning] = useState(false);

  return (
    <div
      className={`w-screen absolute ${
        props.currentPage == 1 ? "z-50 " : "-translate-x-full"
      }  transition-all delay-75 duration-[2000ms] flex justify-center items-center h-screen `}
    >
      <div className="flex flex-col items-center justify-center space-y-8 bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text bg-white">
        <h1
          className="text-center font-bold text-8xl cursor-pointer "
          onClick={() => setIsLearning(!isLearning)}
        >
          Lern mit Dafi!
        </h1>

        {/* button to enter */}
        <button
          onClick={() => {
            props.setCurrentPage(props.currentPage + 1);
            localStorage.setItem("page", `${props.currentPage + 1}`);
          }}
          className="bg-gradient-to-r from-blue-500 to-orange-500 text-white text-2xl py-2  px-8 font-bold rounded-2xl "
        >
          Loslegen
        </button>
      </div>
    </div>
  );
};

export default Page1;
