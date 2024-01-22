"use client";
import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgression = () => {
    const [percentage, setPercentage] = useState(0);
    const targetPercentage = 75; // Target value for the animation

    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && percentage < targetPercentage) {
                    // Adjust the interval timing for a slower animation
                    const interval = setInterval(() => {
                        setPercentage((prevPercentage) => {
                            if (prevPercentage < targetPercentage) {
                                // You can also adjust the increment amount here for finer control
                                return prevPercentage + 5; // Smaller increment for a slower animation
                            } else {
                                clearInterval(interval);
                                return prevPercentage;
                            }
                        });
                    }, 100); // Increased interval duration
                }
            });
        }, { threshold: 0.0 });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [percentage, targetPercentage]);

    return (
        <div ref={containerRef} style={{ width: 150, height: 150 }}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    // Customize the path (progress indicator)
                    pathColor: `#22c55e`, // Adjust the color as needed
                    // Customize the trail (remaining circle)
                    trailColor: 'grey',
                    // Customize the text
                    textColor: 'white',
                    
                    // Customize the background (not all themes support this)
                    backgroundColor: '#3e98c7', // This will only be visible if using a custom theme that supports backgrounds
                })}
            />
        </div>
    );
};

export default CircularProgression;
