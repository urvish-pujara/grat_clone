import { Grid } from '@mui/material';
import React from 'react';
import AreaGraph from './components/AreaGraph';
import BarGraph from './components/BarGraph';
import data from './Data/data.json';

function Home() {
	const salesTotal = data.sales.reduce((acc, cur) => acc + cur.sales, 0);
	const dev = window.innerWidth;
	console.log(dev);
	const totalGratuity = data.gratuity_and_tips.reduce((acc, cur) => acc + cur.gratuity, 0);
	const totalTips = data.gratuity_and_tips.reduce((acc, cur) => acc + cur.tips, 0);
	const totalGratuityAndTips = totalGratuity + totalTips;
	return (
		<>
			{dev > 800 && (
				<Grid container spacing={3} sx={{
					backgroundColor: '#EDF4FA',
					alignItems: 'center',
					justifyContent: 'center',
					paddingTop: 15,
					paddingBottom: 10
				}}>
					<Grid item xs={2}>
					</Grid>
					<Grid item xs={10}>
						<Grid container spacing={3} sx={{
							backgroundColor: '#EDF4FA',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
							<Grid item xs={5}
								backgroundColor="#fff"
								marginRight={2}
							>
								<BarGraph header={"Total Sales : " + salesTotal + "$"} num_bars='1' data={data.sales} barDataKey={"sales"} />
							</Grid>
							<Grid item xs={5}
								backgroundColor="#fff"
							>
								<BarGraph header="Food and Alcohol Sales" num_bars='2' data={data.food_and_alcohol_sales} barDataKey={["food_sales", "alcohol_sales"]} />
							</Grid>
						</Grid>
						<Grid container spacing={3} sx={{
							backgroundColor: '#EDF4FA',
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: 2
						}}>
							<Grid item xs={5}
								backgroundColor="#fff"
								marginRight={2}
							>
								<AreaGraph header="Total Gratuity and Tips Collected" data={data.gratuity_and_tips} num_area='2' areaDataKey={["gratuity", "tips"]} />
								<Grid container>
									<Grid item xs={3}>
										<p variant="h6">
											${totalGratuityAndTips} <br />
											Total Collected
										</p>
									</Grid>
									<Grid item xs={3}>
										<p variant="h6">
											${totalGratuity} <br />
											Total Gratuity
										</p>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={5}
								backgroundColor="#fff"
							>
								<BarGraph header="Cost of Labour" num_bars='1' data={data.labour_cost} barDataKey={"labour_cost"} />
							</Grid>
						</Grid>
						<Grid container spacing={3} sx={{
							backgroundColor: '#EDF4FA',
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: 3
						}}>
							<Grid item xs={5}
								backgroundColor="#fff"
								marginRight={2}
							>
								<BarGraph header="Cost of Kitchen Labour" num_bars='1' data={data.kitchen_labour_cost} barDataKey={"kitchen_labour_cost"} />
							</Grid>
							<Grid item xs={5}
								backgroundColor="#fff"
							>
								<BarGraph header="Bar Sales" num_bars='1' data={data.bar_sales} barDataKey={"bar_sales"} />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			)}
			{
				dev < 800 && (
					<Grid container spacing={3} sx={{
						backgroundColor: '#EDF4FA',
						alignItems: 'center',
						justifyContent: 'center',
						paddingTop: 15,
						paddingBottom: 10
					}}>
						{/* <Grid item xs={2}>
					</Grid> */}
						<Grid item xs={10}>
							<Grid container spacing={3} sx={{
								backgroundColor: '#EDF4FA',
								alignItems: 'center',
								justifyContent: 'center',
								marginTop: 2
							}}>
								<Grid item xs={10}
									backgroundColor="#fff"
								// marginRight={2}
								>
									<BarGraph header={"Total Sales : " + salesTotal + "$"} num_bars='1' data={data.sales} barDataKey={"sales"} />
								</Grid>
							</Grid>
							<Grid container spacing={3} sx={{
								backgroundColor: '#EDF4FA',
								alignItems: 'center',
								justifyContent: 'center',

								marginTop: 2
							}}>
								<Grid item xs={10}
									backgroundColor="#fff"
								>
									<BarGraph header="Food and Alcohol Sales" num_bars='2' data={data.food_and_alcohol_sales} barDataKey={["food_sales", "alcohol_sales"]} />
								</Grid>
							</Grid>
							<Grid container spacing={3} sx={{
								backgroundColor: '#EDF4FA',
								alignItems: 'center',
								justifyContent: 'center',
								marginTop: 2
							}}>
								<Grid item xs={10}
									backgroundColor="#fff"
								// marginRight={2}
								>
									<AreaGraph header="Total Gratuity and Tips Collected" data={data.gratuity_and_tips} num_area='2' areaDataKey={["gratuity", "tips"]} />
									<Grid container>
										<Grid item xs={3}>
											<p variant="h6">
												${totalGratuityAndTips} <br />
												Total Collected
											</p>
										</Grid>
										<Grid item xs={3}>
											<p variant="h6">
												${totalGratuity} <br />
												Total Gratuity
											</p>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
							<Grid container spacing={3} sx={{
								backgroundColor: '#EDF4FA',
								alignItems: 'center',
								justifyContent: 'center',
								marginTop: 2
							}}>
								<Grid item xs={10}
									backgroundColor="#fff"
								>
									<BarGraph header="Cost of Labour" num_bars='1' data={data.labour_cost} barDataKey={"labour_cost"} />
								</Grid>
							</Grid>
							<Grid container spacing={3} sx={{
								backgroundColor: '#EDF4FA',
								alignItems: 'center',
								justifyContent: 'center',
								marginTop: 2
							}}>
								<Grid item xs={10}
									backgroundColor="#fff"
								// marginRight={2}
								>
									<BarGraph header="Cost of Kitchen Labour" num_bars='1' data={data.kitchen_labour_cost} barDataKey={"kitchen_labour_cost"} />
								</Grid>
							</Grid>

							<Grid container spacing={3} sx={{
								backgroundColor: '#EDF4FA',
								alignItems: 'center',
								justifyContent: 'center',
								marginTop: 2
							}}>
								<Grid item xs={10}
									backgroundColor="#fff"
								>
									<BarGraph header="Bar Sales" num_bars='1' data={data.bar_sales} barDataKey={"bar_sales"} />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				)
			}
		</>
	);
}

export default Home;
