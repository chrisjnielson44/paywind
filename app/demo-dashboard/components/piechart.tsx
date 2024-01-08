'use client'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from "next-themes"
import { useEffect, useState } from 'react';


// Example portfolio data
const data = [
    {
        name: "Stocks",
        value: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Funds",
        value: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Commodities",
        value: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Crypto",
        value: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Bonds",
        value: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Real Estate",
        value: Math.floor(Math.random() * 5000) + 1000,
    }
];


// Calculate total value of all items
const total = data.reduce((acc, item) => acc + item.value, 0);

export function PieGraph() {
// Colors for light mode (lighter shades of blue)
const colors = ['#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5'];

// Colors for dark mode (darker shades of blue)
;

    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${(value / total * 100).toFixed(2)}%`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                {/* <Tooltip formatter={(value) => `${(Number(value) / total * 100).toFixed(2)}%`} /> */}
            </PieChart>
        </ResponsiveContainer>
    );
}