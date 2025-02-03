import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import imageTest from "/assets/content/project/post1/post1-foto(1).png";
import PricingItemComponentV2 from "./PricingItemComponentV2";

const ProjectItemComponent = ({ name, image, desc }) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-lg border-2 border-gray-700"
        >
            <div className="max-h-44 overflow-hidden">
                <img
                    src={image}
                    alt=""
                    className="clip-half object-cover"
                />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 rounded-lg px-4 py-6">
                {/* <div className="max-h-40 w-64 overflow-hidden rounded-lg bg-blue-200 p-4 shadow-md">
                    <p>
                        This is a flexible height div. If the content exceeds the max height, it will be hidden. Add more text to see the effect. The
                        text should be truncated after a certain height. This is a flexible height div. If the content exceeds the max height, it will
                        be hidden. Add more text to see the effect. The text should be truncated after a certain height. This is a flexible height
                        div. If the content exceeds the max height, it will be hidden. Add more text to see the effect. The text should be truncated
                        after a certain height.
                    </p>
                </div> */}
                {/* <h1 className="font-poppins text-center text-[24px] font-semibold text-white">{name}</h1> */}
                {/* <div className="max-h-full min-h-20 w-64 bg-gray-300 p-4">
                    <div className="max-h-full min-h-20 overflow-hidden rounded-lg bg-blue-200 p-4 shadow-md">
                        <p>
                            This div will have a minimum height but won’t exceed the parent’s height. If the text is too long, it will be hidden
                            instead of growing indefinitely. This div will have a minimum height but won’t exceed the parent’s height. If the text is
                            too long, it will be hidden instead of growing indefinitely. This div will have a minimum height but won’t exceed the
                            parent’s height. If the text is too long, it will be hidden instead of growing indefinitely.
                        </p>
                    </div>
                </div> */}

                <h1 className="title text-center">{name}</h1>
                <div className="flex max-h-36 w-full flex-col items-center justify-center gap-2 overflow-hidden text-white">
                    <p className="description">{desc}</p>
                </div>
                {/* <div className="max-h-full min-h-20 overflow-hidden rounded-lg bg-blue-200 p-4 shadow-md">
                    <p>
                        This div will have a minimum height but won’t exceed the parent’s height. If the text is too long, it will be hidden instead
                        of growing indefinitely.
                    </p>
                </div> */}
                <button className="hover:bg-themered hover:border-themered font-poppins mt-5 flex items-center justify-center gap-2 rounded-lg border-2 border-slate-300 px-8 py-2 text-[15px] font-semibold text-white dark:border-slate-700">
                    <p className="description">See More</p>
                    <span>
                        <FaArrowRightLong className="description" />
                    </span>{" "}
                </button>
            </div>
        </div>
    );
};

export default ProjectItemComponent;
