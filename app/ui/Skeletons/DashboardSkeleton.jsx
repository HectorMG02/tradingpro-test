import React from 'react';
import BookCardSkeleton from './BookCardSkeleton';
import SavedBookCardSkeleton from './SavedBookCardSkeleton';

const DashboardSkeleton = () => {
    return (
        <div>
            <div className="bg-gray-500">
                <div>
                    <br />
                </div>
                <div className="h-2 mx-5 px-5 pt-8 bg-gray-300 rounded w-36"></div>
                <div className="flex overflow-x-auto overflow-y-hidden bg-scroll bg-gray-500 pb-14 gap-2 justify-center items-center">
                    {new Array(6).fill(0).map((_, index) => (
                        <SavedBookCardSkeleton key={index} />
                    ))}
                </div>
            </div>

            <div className="mt-10 bg-gray-500 p-5">
                <div className="h-2 mx-0 mb-5 px-5 pt-8 bg-gray-300 rounded w-36"></div>
                <div className="grid grid-cols-3 gap-4">
                    {new Array(9).fill(0).map((_, index) => (
                        <BookCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardSkeleton;
