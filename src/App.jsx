import { useState } from "react";

import Header from "./components/Header";
import Canvas from "./components/Canvas";
import LineChartForm from "./components/LineChartForm";
import BarChartForm from "./components/BarChartForm";
import PieChartForm from "./components/PieChartForm";

import "./App.css";

function App() {
	const defaultData = {
		labels: ["Январь", "Февраль", "Март", "Апрель"],
		datasets: [
			{
				label: "Продажи",
				data: [65, 59, 80, 81],
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)"
			}
		]
	};

	const [chartType, setChartType] = useState("line");
	const [formVisible, setFormVisible] = useState(false);
	const [chartData, setChartData] = useState(null);

	const openChartForm = (chartType) => {
		setFormVisible(true);
		setChartType(chartType);
		renderChartForm(chartType);
	};

	const handleChartFormSubmit = (data) => {
		setChartData(data);
	};

	const renderChartForm = (chartType) => {
		switch (chartType) {
			case "line":
				return (
					<LineChartForm
						initialData={defaultData}
						onSubmit={handleChartFormSubmit}
					/>
				);
			case "pie":
				return (
					<PieChartForm
						initialData={defaultData}
						onSubmit={handleChartFormSubmit}
					/>
				);
			case "bar":
				return (
					<BarChartForm
						initialData={defaultData}
						onSubmit={handleChartFormSubmit}
					/>
				);
		}
	};

	return (
		<>
			<Header onOpenChartForm={openChartForm}></Header>

			{formVisible ? renderChartForm(chartType) : null}

			<Canvas chartData={chartData}></Canvas>
		</>
	);
}

export default App;
