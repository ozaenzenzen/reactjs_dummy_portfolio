import React from "react";

const ProjectItemComponentV2 = ({name, image, desc}) => {
    return (
        <div className="h-96 w-64 overflow-hidden rounded-lg bg-white shadow-md">
            {/* Image with fixed height */}
            <div
                className="h-32 bg-cover bg-center"
                style={{ backgroundImage: "url(/path/to/image.jpg)" }}
            ></div>

            {/* Title with flexible height */}
            <h3 className="flex-1 p-4 text-xl font-semibold">This is the title of the card.</h3>

            {/* Description with flexible height, overflow hidden */}
            <p className="max-h-28 flex-1 overflow-hidden p-4 text-sm text-gray-600 line-clamp-3">
                This is the description t
            </p>

            {/* Button with fixed height */}
            <div className="flex h-12 cursor-pointer items-center justify-center bg-blue-500 text-white">Button</div>
        </div>
    );
};

export default ProjectItemComponentV2;
