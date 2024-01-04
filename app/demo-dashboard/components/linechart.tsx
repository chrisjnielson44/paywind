"use client"

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    {
        name: "Jan",
        Total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Feb",
        Total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Mar",
        Total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Apr",
        Total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "May",
        Total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun",
        Total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jul",
        Total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Aug",
        Total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Sep",
        Total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Oct",
        Total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Nov",
        Total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Dec",
        Total: Math.floor(Math.random() * 5000) + 1000,
    },
]

const data01 = [
    {
        "name": "Group A",
        "value": 400
    },
    {
        "name": "Group B",
        "value": 300
    },
    {
        "name": "Group C",
        "value": 300
    },
    {
        "name": "Group D",
        "value": 200
    },
    {
        "name": "Group E",
        "value": 278
    },
    {
        "name": "Group F",
        "value": 189
    }
];

export function LineGraph() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                   dataKey="name"
                   stroke="#888888"
                   fontSize={12}
                   tickLine={false}
                   axisLine={false}
                />
                <YAxis
                   stroke="#888888"
                   fontSize={12}
                   tickLine={false}
                   axisLine={false}
                   tickFormatter={(value) => `$${value}`}
                />
                  <Tooltip labelClassName="darkLtex"/>

                <Line
                   type="monotone"
                   dataKey="Total"
                   stroke="currentColor"
                   dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
 }