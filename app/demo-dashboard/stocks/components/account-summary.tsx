"use client"
import { useTheme } from "next-themes"


import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// Function to generate less volatile data
const generateData = () => {
    let data = [];
    let previousDayTotal = Math.floor(Math.random() * 5000) + 1000; // Initial value

    for (let i = 1; i <= 7; i++) {
        let randomChange = Math.floor(Math.random() * 2000) - 1000; // Change within -1000 to +1000
        let newTotal = previousDayTotal + randomChange;

        // Ensure newTotal stays within a reasonable range
        if (newTotal < 1000) newTotal = 1000;
        if (newTotal > 6000) newTotal = 6000;

        data.push({ name: i, Total: newTotal });
        previousDayTotal = newTotal; // Update previousDayTotal for the next iteration
    }

    return data;
};


const data = generateData();

export function AccountSummary() {
    const theme = useTheme().theme; // Extract the theme value from the useTheme hook
    const isDarkMode = theme === 'dark'; // assuming theme can be 'dark' or 'light'
    const tooltipStyle = {
        color: isDarkMode ? 'white' : 'black',
        backgroundColor: isDarkMode ? '#5A5A5A' : 'white',
    };

    const customTickFormatter = (value: number) => {
        if ( value === 15 || value === 30) {
            return `${value}`;
        }
        return '';
    };
    
    return (
        <ResponsiveContainer width="100%" height={175}>
            <LineChart data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" stroke=""/> */}
                {/* <XAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={true}

                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={true}
                    tickFormatter={(value) => `$${value}`}
                /> */}
                <Tooltip
                content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground" style={{ color: tooltipStyle.color }}>
                                Day
                              </span>
                              <span className="font-bold" style={{ color: tooltipStyle.color }}>
                                {payload[0].payload.name}
                              </span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground" style={{ color: tooltipStyle.color }}>
                                Total
                              </span>
                              <span className="font-bold text-white" style={{ color: tooltipStyle.color }}>
                              {`$${payload[0].value}`}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
              />
                <Line
                    type="monotone"
                    dataKey="Total"
                    stroke="currentColor"
                    dot={true}
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
