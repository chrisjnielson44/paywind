'use client'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from "next-themes"
import { useEffect, useState } from 'react';

import { ResponsivePie } from '@nivo/pie'

const monochromeColors = [
    'hsl(210, 90%, 70%)', // Very light blue
    'hsl(210, 80%, 75%)', // Light blue
    'hsl(210, 70%, 80%)', // Softer blue
    'hsl(210, 60%, 85%)', // Pale blue
    'hsl(210, 50%, 90%)'  // Very pale blue
];

// Example portfolio data
const data = [
    {
        "id": "Stocks",
        "label": "Stocks",
        "value": 300000, // Example values in dollars
        "color": monochromeColors[0]
    },
    {
        "id": "Bonds",
        "label": "Bonds",
        "value": 150000,
        "color": monochromeColors[1]
    },
    {
        "id": "Real Estate",
        "label": "Real Estate",
        "value": 200000,
        "color": monochromeColors[2]
    },
    {
        "id": "Mutual Funds",
        "label": "Mutual Funds",
        "value": 250000,
        "color": monochromeColors[3]
    },
    {
        "id": "Others",
        "label": "Others",
        "value": 100000,
        "color": monochromeColors[4]
    }
];


// Calculate total value of all items
const netWorth = data.reduce((acc, item) => acc + item.value, 0);

const CenteredMetric = ({ centerX, centerY }: { centerX: number, centerY: number }) => {
    return (
        <g>
        <text
            x={centerX}
            y={centerY - 20} // Adjusted for better positioning
            textAnchor="middle"
            dominantBaseline="central"
            style={{
                fontSize: '20px',
                fontWeight: 'bold',
                fill: 'white',
            }}
        >
            Net Worth
        </text>
        <text
            x={centerX}
            y={centerY + 20} // Positioned below the "Net Worth" text
            textAnchor="middle"
            dominantBaseline="central"
            style={{
                fontSize: '24px',
                fontWeight: 'bold',
                fill: 'white',
            }}
        >
            ${netWorth.toLocaleString()}
        </text>
    </g>
    );
};

export function PieGraph() {
    // Colors for light mode (lighter shades of blue)
    const monochromeColors = [
        'hsl(123, 39%, 70%)', // Lighter green
        'hsl(123, 39%, 60%)', // Light green
        'hsl(123, 39%, 50%)', // Mid green
        'hsl(123, 39%, 40%)', // Dark green
        'hsl(123, 39%, 30%)'  // Darker green
    ];
    // Colors for dark mode (darker shades of blue)
    ;

    return (
        <div className='w-[700px] h-[500px]'>
            <ResponsivePie
                animate={true}
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.8}
                enableArcLabels={false}
                padAngle={0.6}
                cornerRadius={5}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                colors={monochromeColors}

                borderColor={{

                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLabelsSkipAngle={10}
                arcLinkLabelsColor={{
                    from: 'color'
                }} arcLinkLabelsThickness={3}

                arcLinkLabelsTextColor={{
                    from: 'color',
                    modifiers: [['darker', 1.2]]
                }}

                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
                tooltip={({
                    datum: {
                        id,
                        value,
                        color
                    }
                }) => <div style={{
                    padding: 12,
                    color,
                    background: '#222222'
                }}>
                        {/* <p className='font-bold text-sm'>Portfolio</p>
                        <br /> */}
                        <strong>
                            {id}: {value}
                        </strong>
                    </div>} theme={{
                        tooltip: {
                            container: {
                                background: '#333'
                            }
                        }
                    }}
                    layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric]}
            />

        </div>
    );
}