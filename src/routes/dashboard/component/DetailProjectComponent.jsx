import React, { useState } from "react";
import { Description, Dialog, DialogPanel, DialogTitle, Button } from "@headlessui/react";

const DetailProjectComponent = ({ isOpen, onClose, title, description, image }) => {
    return (
        <Dialog
            open={isOpen}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={onClose}
        >
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-slate-50/50 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0 dark:bg-slate-950/50"
                    >
                        <div className="flex flex-nowrap justify-center overflow-x-scroll">
                            {image.map((element) => (
                                <img
                                    src={element}
                                    alt="element image"
                                    className="mx-2 max-h-[500px] min-h-[200px] object-contain"
                                ></img>
                            ))}
                        </div>
                        {/* <img
                            src={image}
                            alt="image"
                            className="h-[250px]"
                        /> */}
                        <DialogTitle
                            as="h3"
                            className="title mb-4 text-xl"
                            // className="text-base/7 font-medium text-white"
                        >
                            {title}
                            {/* Payment successful */}
                        </DialogTitle>
                        <p className="description">
                            {/* <p className="mt-2 text-sm/6 text-white/50"> */}
                            {description}
                            {/* Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order. */}
                        </p>
                        <div className="mt-4">
                            <Button
                                className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                onClick={onClose}
                            >
                                Back
                            </Button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default DetailProjectComponent;
