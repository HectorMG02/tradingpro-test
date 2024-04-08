import React from 'react';
import BookCardSkeleton from './BookCardSkeleton';
import PictureBookCardSkeleton from './PictureBookCardSkeleton';
import GenreSelectorSkeleton from './GenreSelectorSkeleton';

const DashboardSkeleton = () => {
    return (
        <div>
            <div className="bg-main-color-800">
                <div>
                    <br />
                </div>
                <div className="h-2 mx-5 px-5 pt-8 bg-main-color-500 rounded w-36"></div>
                <div className="overflow-x-auto flex space-x-4 py-5 px-5 bg-main-color-800">
                    {new Array(6).fill(0).map((_, index) => (
                        <PictureBookCardSkeleton key={index} />
                    ))}
                </div>
            </div>

            <div className="mt-10 bg-main-color-800 p-5">
                <div className="h-2 mx-0 mb-5 px-5 pt-8 bg-main-color-500 rounded w-36"></div>
                <GenreSelectorSkeleton />
                <div className="md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-3 gap-4">
                    {new Array(9).fill(0).map((_, index) => (
                        <div key={index}>
                            <div className="hidden md:block">
                                <BookCardSkeleton />
                            </div>
                            <div className="md:hidden justify-center items-center flex flex-col w-full h-full">
                                <PictureBookCardSkeleton key={index} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardSkeleton;
