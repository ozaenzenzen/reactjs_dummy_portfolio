import React from "react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/profile-image2.jpg";

const AboutMePage = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
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
                    <div className="flex justify-center text-white lg:justify-start">
                        <p className="description my-2 max-w-xl py-6">
                            With 3 years of hands-on experience as a software engineer, I thrive on the challenge of turning complex problems into
                            elegant solutions. My expertise spans a dynamic tech stack, including Flutter for creating captivating frontend mobile
                            applications, React JS for web application development, Golang for building robust backend systems, and Python for
                            pioneering developments in machine learning. Additionally, I have a solid foundation in OOP programming languages like
                            Java and Kotlin, enhancing my versatility as an engineer. In 2022, I proudly graduated with a bachelor's degree in
                            Computer Science, specializing in the fascinating realm of Deep Learning. Throughout my academic journey, I maintained an
                            outstanding GPA of 3.86, a testament to my commitment to excellence. My passion for innovation led me to embark on a
                            remarkable thesis, where I implemented Convolutional Neural Networks (CNN) to identify Taekwondo Martial Arts Movement.
                            This groundbreaking research has been recognized and accepted as a research paper by the prestigious Institute of
                            Electrical and Electronics Engineers (IEEE). In Taekwondo Martial Arts: Beyond the realm of technology, I immerse myself
                            in the discipline of Taekwondo. As a dedicated practitioner with a black belt, I embrace the ethos of perseverance,
                            respect, and continuous growth. My thesis project exemplifies my dedication to combining my passion for martial arts with
                            my IT skill set to tackle real-world challenges.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMePage;
