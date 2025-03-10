import { motion } from "framer-motion";
import React, { useState } from "react";
import aboutImg from "@/assets/profile-image2.jpg";
import PricingItemComponent from "./component/PricingItemComponent";
import { HiBadgeCheck } from "react-icons/hi";
import data from "@/constants/project_data.json";
import ProjectItemComponent from "./component/ProjectItemComponent";
import ProjectItemComponentV2 from "./component/ProjectItemComponentV2";
import ChipFilterComponent from "./component/ChipFilterComponent";
import FilterChip from "./component/FilterChip";

import DetailProjectComponent from "./component/DetailProjectComponent";

const ProjectPage = () => {
    const types = [...new Set(data.map((item) => item.type))];

    const [selectedOption, setSelectedOption] = useState(null);

    const filteredItems = selectedOption === null ? data : data.filter((item) => item.type === selectedOption);

    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="title mt-20 text-center text-4xl"
            >
                Project Page
            </motion.h2>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="title mb-20 mt-5 text-center text-2xl"
            >
                Project - Technologies - Part Of
            </motion.h2>

            {/* Chip */}
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="flex gap-2"
            >
                <FilterChip
                    options={types}
                    onChange={setSelectedOption}
                />
            </motion.div>

            <div className="flex flex-wrap">
                <div className="mt-8 grid w-full grid-cols-1 items-start justify-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredItems.map((element) => {
                        return (
                            <motion.div
                                key={element.id}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 100 }}
                                transition={{ duration: 1.5 }}
                            >
                                <button
                                    onClick={() => {
                                        setSelectedItem(element.title);
                                    }}
                                >
                                    <ProjectItemComponent
                                        key={element.id}
                                        name={element.title}
                                        image={element.foto[0]}
                                        desc={element.desc}
                                    />
                                </button>
                                {selectedItem == element.title && selectedItem != null && (
                                    <DetailProjectComponent
                                        key={element.id}
                                        isOpen={selectedItem == element.title && selectedItem != null}
                                        onClose={() => {
                                            setSelectedItem(null);
                                        }}
                                        title={element.title}
                                        description={element.desc}
                                        image={element.foto}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
