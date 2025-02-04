import React from "react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/profile-image2.jpg";
import { BsAndroid2 } from "react-icons/bs";
import { FaGithub, FaGithubAlt, FaGithubSquare, FaLinkedin, FaNodeJs, FaYoutube, FaYoutubeSquare } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { RiFlutterLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { RiFlutterFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const ContactPage = () => {
    return (
        <div className="border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="title my-20 text-center text-4xl"
            >
                Contact
            </motion.h2>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-4 space-x-10">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <a
                        href="https://www.linkedin.com/in/fauzan-akmal-mahdi/"
                        target="_blank"
                    >
                        <FaLinkedin className="text-9xl text-blue-700" />
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <a
                        href="https://github.com/ozaenzenzen"
                        target="_blank"
                    >
                        <FaGithubSquare className="text-9xl text-gray-600" />
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <a
                        href="https://www.youtube.com/channel/UCckF54eS-l51uWyfQqVj9Dg"
                        target="_blank"
                    >
                        <FaYoutubeSquare className="text-9xl text-red-600" />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
