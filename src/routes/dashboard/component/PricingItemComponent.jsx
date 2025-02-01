import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const PricingItemComponent = ({ name, icon, price, listItems = [] }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="600"
      className="w-full flex flex-col justify-center items-center gap-6 border-2 border-gray-700 hover:border-themered px-6 py-8 rounded-lg"
    >
      <h1 className="text-white font-semibold text-[24px] font-poppins">
        {name}
      </h1>
      <div className="bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110">
        {/* <HiBadgeCheck className="fill-white size-9" /> */}
        {icon}
      </div>
      <h1 className="text-white font-semibold text-3xl font-poppins">
        {/* Rp1.000.000 */}
        {price}
      </h1>
      <ul className="w-full flex flex-col justify-center items-center gap-2 text-white">
        {listItems.map((element) => (
          <li className="flex justify-center items-center gap-2 text-[15px] font-poppins">
            <span>
              <IoMdArrowDroprightCircle className="size-7" />
            </span>{" "}
            {element}
          </li>
        ))}
        {/* <li className="flex justify-center items-center gap-2 text-[15px] font-poppins">
          <span>
            <IoMdArrowDroprightCircle className="size-7" />
          </span>{" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="flex justify-center items-center gap-2 text-[15px] font-poppins">
          <span>
            <IoMdArrowDroprightCircle className="size-7" />
          </span>{" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="flex justify-center items-center gap-2 text-[15px] font-poppins">
          <span>
            <IoMdArrowDroprightCircle className="size-7" />
          </span>{" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li> */}
      </ul>
      <button className="text-white font-semibold border-2 mt-5 hover:bg-themered border-white hover:border-themered rounded-lg px-8 py-2 text-[15px] font-poppins flex justify-center items-center gap-2">
        Select Plan{" "}
        <span>
          <FaArrowRightLong className="text-white" />
        </span>{" "}
      </button>
    </div>
  );
};

export default PricingItemComponent;