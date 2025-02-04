import React, { useState } from "react";

const FilterChip = ({ options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        if (selectedOption === option) {
            setSelectedOption(null);
            onChange(null); // Notify parent that no option is selected
        } else {
            setSelectedOption(option);
            onChange(option); // Notify parent of the new selection
        }
    };

    return (
        <div className="flex flex-wrap gap-2">
            {options.map((option) => (
                <button
                    key={option}
                    // className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    //   selectedOption === option
                    //     ? 'bg-blue-500 text-white'
                    //     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    // }`}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        selectedOption === option
                            ? "active-chip"
                            : "inactive-chip"
                    }`}
                    onClick={() => handleOptionClick(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default FilterChip;
