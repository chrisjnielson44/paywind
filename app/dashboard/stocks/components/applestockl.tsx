'use client'

import React, { useEffect, useRef } from 'react';

function TradingViewWidget() {
    const container = useRef<HTMLDivElement>(null);
    const scriptId = "tradingview-widget-script"; // Unique ID for the script element

    useEffect(() => {
        // Clean up any existing script to avoid duplicates
        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
            existingScript.remove();
        }

        // Create a new script element
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbols": [
                [
                  "Apple",
                  "AAPL|1D"
                ]
              ],
              "chartOnly": false,
              "width": 1000,
              "height": 500,
              "locale": "en",
              "colorTheme": "dark",
              "autosize": false,
              "showVolume": false,
              "showMA": false,
              "hideDateRanges": false,
              "hideMarketStatus": false,
              "hideSymbolLogo": false,
              "scalePosition": "right",
              "scaleMode": "Normal",
              "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
              "fontSize": "10",
              "noTimeScale": false,
              "valuesTracking": "1",
              "changeMode": "price-and-percent",
              "chartType": "candlesticks",
              "maLineColor": "#2962FF",
              "maLineWidth": 1,
              "maLength": 9,
              "lineType": 0,
              "dateRanges": [
                "1d|1",
                "1m|30",
                "3m|60",
                "12m|1D",
                "60m|1W",
                "all|1M"
              ],
              "upColor": "#22ab94",
              "downColor": "#f7525f",
              "borderUpColor": "#22ab94",
              "borderDownColor": "#f7525f",
              "wickUpColor": "#22ab94",
              "wickDownColor": "#f7525f"
        });

        // Append the script to the container
        container.current?.appendChild(script);

        // Cleanup function to remove script on unmount
        return () => {
            if (script) {
                script.remove();
            }
        };
    }, []); // Empty dependency array ensures this runs once

    return (
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
}

export default React.memo(TradingViewWidget);
