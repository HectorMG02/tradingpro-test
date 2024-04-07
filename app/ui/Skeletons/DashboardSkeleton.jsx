'use client';

import React from 'react';
import BookCardSkeleton from './BookCardSkeleton';
import MobileBookCardSkeleton from './MobileBookCardSkeleton';
import SavedBookCardSkeleton from './SavedBookCardSkeleton';
import GenreSelectorSkeleton from './GenreSelectorSkeleton';

const DashboardSkeleton = () => {
    return (
        <div>
            <div className="bg-gray-500">
                <div>
                    <br />
                </div>
                <div className="h-2 mx-5 px-5 pt-8 bg-gray-300 rounded w-36"></div>
                <div className="overflow-x-auto flex space-x-4 py-5 px-5 bg-gray-500">
                    {new Array(6).fill(0).map((_, index) => (
                        <SavedBookCardSkeleton key={index} />
                    ))}
                </div>
            </div>

            <div className="mt-10 bg-gray-500 p-5">
                <div className="h-2 mx-0 mb-5 px-5 pt-8 bg-gray-300 rounded w-36"></div>
                <GenreSelectorSkeleton />
                <div className="md:grid md:grid-cols-3 gap-4">
                    {new Array(9).fill(0).map((_, index) => (
                        <div key={index}>
                            <div className="hidden md:block">
                                <BookCardSkeleton />
                            </div>
                            <div className="md:hidden">
                                <MobileBookCardSkeleton key={index} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardSkeleton;
