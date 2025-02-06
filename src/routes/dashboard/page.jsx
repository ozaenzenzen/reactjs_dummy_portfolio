import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users } from "lucide-react";
import React from "react";
import CardSummaryComponent from "./component/CardSummaryComponent";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { overviewData, recentSalesData, topProducts } from "@/constants";
import { useTheme } from "@/hooks/use-theme";
import Footer from "../../layouts/footer";
import aboutImg from "@/assets/profile-image3.jpg";

import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const DashboardPage = () => {
    const { theme } = useTheme();

    return (
        <div className="border-neutral-900 pb-4">
            <div className="flex flex-wrap items-center justify-center p-10">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >
                    <div className={cn("flex h-full items-center justify-center text-center lg:text-start")}>
                        <div>
                            <h1 className="title mb-10 md:text-5xl text-3xl">Fauzan Akmal Mahdi</h1>
                            <p className="description my-2 max-w-xl md:text-2xl text-xl">Software Engineer.</p>
                            <p className="description my-2 max-w-xl md:text-base text-sm">
                                4 years experience as software engineer using various tech stack such as Flutter, Kotlin, Swift, React JS, Golang,
                                Python and doing research on machine learning & deep learning world.
                            </p>
                            <div className="mb-10"></div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex justify-center text-white">
                        <img
                            src={aboutImg}
                            alt="about"
                            className="lg:h-[650px] md:h-[550px] h-[400px] rounded-2xl"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DashboardPage;
