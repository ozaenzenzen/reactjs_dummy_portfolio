import React from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DetailProjectComponent = ({
    isOpen,
    onClose,
    title,
    description,
    image,
    logo,
    company,
    year,
    platform,
    playstore,
    appstore,
}) => {
    return (
        <Dialog
            open={isOpen}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={onClose}
        >
            <DialogBackdrop
                transition
                className="fixed inset-0 z-10 bg-slate-900/30 backdrop-blur-sm duration-300 ease-out data-[closed]:opacity-0"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="data-[closed]:transform-[scale(95%)] w-full max-w-3xl rounded-xl bg-slate-50/50 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0 dark:bg-slate-950/50"
                    >
                        <div className="mb-4 mt-4 flex justify-end">
                            <button onClick={onClose}>
                                <MdClose className="size-8 text-slate-950 dark:text-slate-50" />
                            </button>
                        </div>

                        {logo && (
                            <div className="mb-6 flex justify-center">
                                <img
                                    src={logo}
                                    alt={`${title} logo`}
                                    className="h-24 w-24 object-contain"
                                />
                            </div>
                        )}

                        <DialogTitle
                            as="h3"
                            className="title mb-4 text-center text-xl"
                        >
                            {title}
                        </DialogTitle>

                        {(company || year || platform) && (
                            <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
                                {company && <span className="meta-badge">{company}</span>}
                                {year && <span className="meta-badge">{year}</span>}
                                {platform && <span className="meta-badge">{platform}</span>}
                            </div>
                        )}

                        <p className="description display-linebreak mb-6">{description}</p>

                        {(playstore || appstore) && (
                            <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
                                {playstore && (
                                    <a
                                        href={playstore}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="store-btn"
                                    >
                                        <FaGooglePlay className="size-5" />
                                        Google Play
                                    </a>
                                )}
                                {appstore && (
                                    <a
                                        href={appstore}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="store-btn"
                                    >
                                        <FaApple className="size-5" />
                                        App Store
                                    </a>
                                )}
                            </div>
                        )}

                        {image && image.length > 0 && (!logo || image.length > 1) && (
                            <div className="mb-4 flex flex-nowrap justify-center overflow-x-scroll">
                                {image.map((element) => (
                                    <img
                                        key={element}
                                        src={element}
                                        alt="element image"
                                        loading="lazy"
                                        decoding="async"
                                        className="mx-2 max-h-[400px] min-h-[200px] shrink-0 object-contain"
                                    />
                                ))}
                            </div>
                        )}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default DetailProjectComponent;
