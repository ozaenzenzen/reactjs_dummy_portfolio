import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../../constants/experience";

const ExperiencePage = () => {
    return (
        <div className="border-neutral-900 pb-4">
            {/* Title Section */}
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="title my-20 text-center text-4xl"
            >
                Experience
            </motion.h2>

            {/* Detail Section */}
            <div>
                {EXPERIENCES.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="mb-8 flex flex-wrap lg:justify-center"
                        >
                            {/* Year Section */}
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/4"
                            >
                                <p className="title mb-2 text-sm">{item.year}</p>
                            </motion.div>

                            {/* Experience Desc Section */}
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className="w-full max-w-xl lg:w-3/4"
                            >
                                <h6 className="title mb-2 text-base font-semibold">
                                    {item.role} - <span className="title text-sm">{item.company}</span>
                                </h6>
                                <p className="description display-linebreak mb-4">{item.description}</p>

                                <div className="space-x-2">
                                    {item.technologies.map((itemTech, index) => (
                                        <div 
                                            key={itemTech}
                                            className="card inline-flex p-2 my-2">
                                            <h2 className="description">{itemTech}</h2>
                                        </div>
                                        // <span
                                        //     key={index}
                                        //     className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                        // >
                                        //     {itemTech}
                                        // </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ExperiencePage;
