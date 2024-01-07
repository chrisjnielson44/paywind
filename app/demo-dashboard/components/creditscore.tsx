'use client'
import React from 'react';
import GaugeChart from 'react-gauge-chart';


const chartStyle = {
    height: 200,
    width: 400,
}

interface CreditScoreGaugeProps {
    score: number;
    maxScore: number;
}

const CreditScoreGauge: React.FC<CreditScoreGaugeProps> = ({ score, maxScore }) => {
    const percentage = score / maxScore;

    return (
        <div className="relative flex flex-col items-center">
            <GaugeChart
                id="gauge-chart5"
                style={chartStyle}
                nrOfLevels={420}
                arcsLength={[0.3, 0.5, 0.2]}
                colors={['#EA4228', '#F5CD19', '#5BE12C']}
                percent={0.75}
                formatTextValue={value => ''}
                animate={true}
                animateDuration={3000}
            />
        </div>
    );
};

export default CreditScoreGauge;
