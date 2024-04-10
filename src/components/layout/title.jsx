'use client'
import React from 'react';
export function Title({ children }) {
    return (
        <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">{children}</h1>
        </div>
    )
}