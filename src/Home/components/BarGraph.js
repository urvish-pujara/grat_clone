import React from 'react'
import { Typography } from '@mui/material'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts'
import { Grid } from '@mui/material';

const BarGraph = (props) => {
	return (
		<>
			<Typography variant="h6">
				{props.header}
			</Typography>
			<ResponsiveContainer width="95%" height={200}>
				<BarChart
					data={props.data}
					margin={{
						top: 25,
						bottom: 5,
					}}
					barSize={5}
				>
					<XAxis
						dataKey="name"
						scale="auto"
						padding={{ left: 30, right: 30 }}
					/>
					<YAxis type="number" scale="linear" domain={[0, (dataMax) => Math.round(dataMax * 1.2)]} tickFormatter={(value) => `${value}$`} />
					<Tooltip content={{
						formatter: (value, name, props) => {
							return [`${value}$`, name]
						}
					}} sx={{ zIndex: 100 }} />
					<CartesianGrid strokeDasharray="3 3" />
					{props.num_bars == '1' && (
						<Bar
							dataKey={props.barDataKey}
							fill="#6E9AF8"
							background={{ fill: '#eee' }}
						/>)}
					{props.num_bars == '2' && (
						<>
							<Bar
								dataKey={props.barDataKey[0]}
								fill="#6E9AF8"
								background={{ fill: '#eee' }}
							/>
							<Bar
								dataKey={props.barDataKey[1]}
								fill="#F86E6E"
								background={{ fill: '#eee' }}
							/>
							<Legend />
						</>
					)}
				</BarChart>
			</ResponsiveContainer>
		</>
	)
}

export default BarGraph