import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import imageTest from "/assets/content/project/post1/post1-foto(1).png";
import PricingItemComponentV2 from "./ProjectItemComponentV2";

// Function to detect URLs in text and convert them to clickable links
const convertLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) =>
        urlRegex.test(part) ? (
            <a
                key={index}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
            >
                {part}
            </a>
        ) : (
            part
        ),
    );
};

const ProjectItemComponent = ({ name, image, desc }) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="relative flex h-[550px] w-full cursor-pointer flex-col items-center justify-start gap-6 overflow-hidden rounded-lg border-2 border-gray-700 hover:border-slate-500 hover:bg-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-900"
        >
            <div className="flex flex-col">
                <div className="max-h-44 overflow-hidden">
                    <img
                        src={image}
                        alt=""
                        className="clip-half object-cover"
                    />
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-6 rounded-lg px-4 py-6">
                    <h1 className="title text-center">{name}</h1>
                    <div className="flex max-h-36 w-full flex-col items-center justify-center gap-2 overflow-hidden text-white">
                        <p className="description line-clamp-5 break-all">{convertLinks(desc)}</p>
                    </div>
                </div>
            </div>
            <div className="md:hidden absolute bottom-5 right-5">
                <h1 className="title text-base">See Detail</h1>
            </div>
        </div>
    );
};

export default ProjectItemComponent;
