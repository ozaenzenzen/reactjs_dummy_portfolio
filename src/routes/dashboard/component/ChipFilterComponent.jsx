import { div } from "framer-motion/client";
import React, { useState } from "react";

const ChipFilterComponent = ({ isActive, text, options }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onChange(option);
    };

    var output = <div></div>;
    var parent = <div className="cursor-pointer">{output}</div>;
    if (isActive) {
        output = (
            <div class="cursor-pointer rounded-md border border-transparent bg-slate-900 px-2.5 py-0.5 text-sm text-slate-100 shadow-sm transition-all dark:bg-slate-100 dark:text-slate-600">
                Chip Active
            </div>
        );
    } else {
        output = (
            <div class="cursor-pointer rounded-md border border-transparent bg-slate-100 px-2.5 py-0.5 text-sm text-slate-600 shadow-sm transition-all dark:bg-slate-900 dark:text-slate-100">
                Chip Inactive
            </div>
        );
    }

    return output;
};

export default ChipFilterComponent;
