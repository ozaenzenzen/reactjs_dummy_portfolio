import React from "react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/profile-image2.jpg";
import { ABOUT_TEXT } from "../../constants/experience";

const AboutMePage = () => {
    return (
        <div className="border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="title my-20 text-center text-4xl"
            >
                About Me
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-start justify-center">
                        <img
                            src={aboutImg}
                            alt="about"
                            className="h-[600px] rounded-2xl"
                        />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center text-justify text-white lg:justify-start">
                        <p className="description my-2 max-w-2xl py-6">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMePage;
