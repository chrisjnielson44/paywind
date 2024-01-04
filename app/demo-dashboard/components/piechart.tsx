"use client"

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
  
]

const colors = ['green', 'red']; // Modify this line


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

export function PieGraph() {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                   data={data}
                   cx="50%"
                   cy="50%"
                   outerRadius={150}
                   fill="#8884d8"
                   dataKey="Total"
                   label={({ payload }) => ` $${payload.Total}`}

                >
                   {data.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                   ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
 }