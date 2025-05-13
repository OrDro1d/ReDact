import { Line, Pie, Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	Title,
	Tooltip,
	Legend
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	Title,
	Tooltip,
	Legend
);

import styles from "./Canvas.module.css";

export default function Canvas({ chartData }) {
	const options = {
		responsive: true,
		plugins: {
			legend: { position: "top" },
			title: { display: true, text: "График продаж" }
		}
	};

	const renderChart = (chartData) => {
		switch (chartData.name) {
			case "line":
				return <Line data={chartData} options={options} />;
			case "pie":
				return <Pie data={chartData} options={options} />;
			case "bar":
				return <Bar data={chartData} options={options} />;
		}
	};

	return (
		<div className={styles["canvas"]}>
			{chartData ? (
				renderChart(chartData)
			) : (
				<p>График не создан, заполните данные.</p>
			)}
		</div>
	);
}
