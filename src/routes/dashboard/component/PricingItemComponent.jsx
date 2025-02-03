import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const PricingItemComponent = ({ name, icon, price, listItems = [] }) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="hover:border-themered flex w-full flex-col items-center justify-center gap-6 rounded-lg border-2 border-gray-700 px-6 py-8"
        >
            <h1 className="font-poppins text-[24px] font-semibold text-white">{name}</h1>
            <div className="bg-themered flex items-center justify-center rounded-full p-4 transition-all duration-300 ease-in-out hover:scale-110">
                {/* <HiBadgeCheck className="fill-white size-9" /> */}
                {icon}
            </div>
            <h1 className="font-poppins text-3xl font-semibold text-white">
                {/* Rp1.000.000 */}
                {price}
            </h1>
            <ul className="flex w-full flex-col items-center justify-center gap-2 text-white">
                {listItems.map((element) => (
                    <li className="font-poppins flex items-center justify-center gap-2 text-[15px]">
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
            <button className="hover:bg-themered hover:border-themered font-poppins mt-5 flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-2 text-[15px] font-semibold text-white">
                Select Plan{" "}
                <span>
                    <FaArrowRightLong className="text-white" />
                </span>{" "}
            </button>
        </div>
    );
};

export default PricingItemComponent;
