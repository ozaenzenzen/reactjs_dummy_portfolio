import { motion } from "framer-motion";
import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import data from "@/constants/publication_data.json";

const PublicationPage = () => {
    return (
        <div className="border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="title mt-20 text-center text-4xl"
            >
                Publication Page
            </motion.h2>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="title mb-20 mt-5 text-center text-2xl"
            >
                Papers - Conferences - Research
            </motion.h2>

            <div className="mx-auto flex max-w-4xl flex-col gap-8">
                {data.map((publication) => (
                    <motion.article
                        key={publication.id}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6 rounded-lg border-2 border-gray-700 p-6 transition-colors hover:border-slate-500 hover:bg-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-900"
                    >
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                    <BookOpen className="size-6 shrink-0" />
                                    <p className="description text-sm">
                                        {publication.venue} · {publication.year}
                                    </p>
                                </div>
                            </div>
                            <h3 className="title text-xl">{publication.title}</h3>
                            <p className="description display-linebreak">{publication.desc}</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            {publication.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {publication.link && (
                            <div>
                                <a
                                    href={publication.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
                                >
                                    <ExternalLink className="size-4" />
                                    Read Paper
                                </a>
                            </div>
                        )}
                    </motion.article>
                ))}
            </div>
        </div>
    );
};

export default PublicationPage;
