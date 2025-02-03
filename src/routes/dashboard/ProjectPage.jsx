import { motion } from "framer-motion";
import React from "react";
import aboutImg from "@/assets/profile-image2.jpg";
import PricingItemComponent from "./component/PricingItemComponent";
import { HiBadgeCheck } from "react-icons/hi";
import data from "@/constants/project_data.json";
import ProjectItemComponent from "./component/ProjectItemComponent";

const listItemPricingData = [
    {
        name: "Silver",
        icon: <HiBadgeCheck className="size-9 fill-white" />,
        price: "Rp1.000.000",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        ],
    },
    {
        name: "Gold",
        icon: <HiBadgeCheck className="size-9 fill-white" />,
        price: "Rp2.000.000",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        ],
    },
    {
        name: "Diamond",
        icon: <HiBadgeCheck className="size-9 fill-white" />,
        price: "Rp3.000.000",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        ],
    },
    {
        name: "Silver",
        icon: <HiBadgeCheck className="size-9 fill-white" />,
        price: "Rp1.000.000",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        ],
    },
    {
        name: "Gold",
        icon: <HiBadgeCheck className="size-9 fill-white" />,
        price: "Rp2.000.000",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        ],
    },
    {
        name: "Diamond",
        icon: <HiBadgeCheck className="size-9 fill-white" />,
        price: "Rp3.000.000",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        ],
    },
    {
        name: "Silver",
        icon: <HiBadgeCheck className="size-9 fill-white" />,
        price: "Rp1.000.000",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        ],
    },
    {
        name: "Gold",
        icon: <HiBadgeCheck className="size-9 fill-white" />,
        price: "Rp2.000.000",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        ],
    },
    {
        name: "Diamond",
        icon: <HiBadgeCheck className="size-9 fill-white" />,
        price: "Rp3.000.000",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        ],
    },
    {
        name: "Silver",
        icon: <HiBadgeCheck className="size-9 fill-white" />,
        price: "Rp1.000.000",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        ],
    },
    {
        name: "Gold",
        icon: <HiBadgeCheck className="size-9 fill-white" />,
        price: "Rp2.000.000",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        ],
    },
    {
        name: "Diamond",
        icon: <HiBadgeCheck className="size-9 fill-white" />,
        price: "Rp3.000.000",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        ],
    },
];

const ProjectPage = () => {
    return (
        <div className="border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="title my-20 text-center text-4xl"
            >
                Project Page
            </motion.h2>
            <div className="flex flex-wrap">
                <div className="mt-8 grid w-full grid-cols-1 items-start justify-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((element) => (
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 1.5 }}
                        >
                           
                            <ProjectItemComponent
                                key={element.id}
                                name={element.title}
                                image={element.foto[0]}
                                desc={element.desc}
                            />
                        </motion.div>
                    ))}
                    {/* {listItemPricingData.map((element) => (
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 1.5 }}
                        >
                            <PricingItemComponent
                                name={element.name}
                                icon={element.icon}
                                price={element.price}
                                listItems={element.listItems}
                            />
                        </motion.div>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
