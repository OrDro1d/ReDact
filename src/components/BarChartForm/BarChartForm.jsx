import { useState } from "react";

export default function BarChartForm({ initialData, onSubmit }) {
	const [labels, setLabels] = useState(initialData.labels);
	const [dataPoints, setDataPoints] = useState(initialData.datasets[0].data);
	const [datasetLabel, setDatasetLabel] = useState(
		initialData.datasets[0].label
	);
	const [backgroundColor, setBackgroundColor] = useState(
		initialData.datasets[0].backgroundColor
	);
	const [borderColor, setBorderColor] = useState(
		initialData.datasets[0].borderColor
	);

	const handleLabelChange = (index, event) => {
		const newLabels = [...labels];
		newLabels[index] = event.target.value;
		setLabels(newLabels);
	};

	const handleDataPointChange = (index, event) => {
		const newDataPoints = [...dataPoints];
		newDataPoints[index] = Number(event.target.value);
		setDataPoints(newDataPoints);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const chartData = {
			name: "bar",
			labels: labels,
			datasets: [
				{
					label: datasetLabel,
					data: dataPoints,
					backgroundColor: backgroundColor,
					borderColor: borderColor
				}
			]
		};
		onSubmit(chartData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Настройка Bar Chart</h3>
			<div>
				<label>Название набора данных:</label>
				<input
					type="text"
					value={datasetLabel}
					onChange={(e) => setDatasetLabel(e.target.value)}
				/>
			</div>
			<div>
				<label>Цвет заливки (backgroundColor):</label>
				<input
					type="text"
					value={backgroundColor}
					onChange={(e) => setBackgroundColor(e.target.value)}
				/>
			</div>
			<div>
				<label>Цвет обводки (borderColor):</label>
				<input
					type="text"
					value={borderColor}
					onChange={(e) => setBorderColor(e.target.value)}
				/>
			</div>
			<h4>Данные диаграммы</h4>
			{labels.map((label, index) => (
				<div key={index}>
					<label>{`Метка ${index + 1}:`}</label>
					<input
						type="text"
						value={label}
						onChange={(e) => handleLabelChange(index, e)}
					/>
					<label>Значение:</label>
					<input
						type="number"
						value={dataPoints[index]}
						onChange={(e) => handleDataPointChange(index, e)}
					/>
				</div>
			))}
			<button type="submit">Сохранить данные Bar Chart</button>
		</form>
	);
}
