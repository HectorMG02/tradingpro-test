'use client';

import React from 'react';

const GenreSelectorSkeleton = () => {
    return (
        <div className="animate-pulse">
            <div
                className="mb-4 p-2
                bg-gray-300
                rounded-lg
                shadow-md
                cursor-pointer
                h-[38px]
                w-32
            "
            />
            <div className="grid grid-cols-3 gap-4 mb-4 bg-gray-300 rounded-lg h-1 w-32" />
        </div>
    );
};

export default GenreSelectorSkeleton;
