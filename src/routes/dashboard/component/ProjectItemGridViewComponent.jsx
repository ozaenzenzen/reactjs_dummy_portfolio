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

const ProjectItemGridViewComponent = ({ filteredItems }) => {
    const [selected, setSelected] = useState(null);

    const handleChange = (value) => {
        setSelected(value);
        if (onChange) {
            onChange(value);
        }
    };
    return (
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
                                    handleChange(element.title);
                                }}
                            >
                                <ProjectItemComponent
                                    key={element.id}
                                    name={element.title}
                                    image={element.foto[0]}
                                    desc={element.desc}
                                />
                            </button>
                            {selected == element.title && (
                                <DetailProjectComponent
                                    key={element.id}
                                    isOpen={selected == element.title}
                                    onClose={() => {
                                        setSelected(null);
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
    );
};

export default ProjectItemGridViewComponent;
