import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AreaGraph = (props) => {
    return (
        <>
            <Typography variant="h6">
                {props.header}
            </Typography>
            <ResponsiveContainer width="95%" height={200}>
                <AreaChart
                    // width={600}
                    // height={175}
                    data={props.data}
                    margin={{
                        top: 25,
                        bottom: 5,
                    }}

                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis
                        type="number"
                        scale="linear"
                        domain={[0,
                            (dataMax) => Math.round(dataMax * 1.2)
                        ]}
                    />
                    <Tooltip content={{
                        formatter: (value, name, props) => {
                            return [`${value}$`, name]
                        }
                    }} sx={{ zIndex: 100 }} />
                    <Legend />
                    {props.num_area == '1' && (
                        <Area type="monotone" dataKey={props.areaDataKey} stroke="#8884d8" fill="#8884d845" dot={{ strokeWidth: 2 }} />
                        )}
                    {props.num_area == '2' && (
                        <>
                            <Area type="monotone" dataKey={props.areaDataKey[0]} stroke="#8884d8" fill="#8884d845" dot={{ strokeWidth: 2 }} />
                            <Area type="monotone" dataKey={props.areaDataKey[1]} stroke="#82ca9d" fill="#82ca9d45" dot={{ strokeWidth: 2 }} />

                        </>
                    )}
                </AreaChart>
            </ResponsiveContainer>

        </>
    )
}

export default AreaGraph;