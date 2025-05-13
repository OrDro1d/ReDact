import { useState } from "react";

export default function PieChartForm({ initialData, onSubmit }) {
	const [labels, setLabels] = useState(initialData.labels);
	const [dataPoints, setDataPoints] = useState(initialData.datasets[0].data);
	const [backgroundColors, setBackgroundColors] = useState(() => {
		// Задаём значение по умолчанию для каждого сегмента
		return initialData.labels.map(() => "rgba(75,192,192,0.4)");
	});

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

	const handleColorChange = (index, event) => {
		const newColors = [...backgroundColors];
		newColors[index] = event.target.value;
		setBackgroundColors(newColors);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const chartData = {
			name: "pie",
			labels: labels,
			datasets: [
				{
					label: "Pie Chart",
					data: dataPoints,
					backgroundColor: backgroundColors
				}
			]
		};
		onSubmit(chartData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Настройка Pie Chart</h3>
			{labels.map((label, index) => (
				<div key={index}>
					<label>{`Сегмент ${index + 1} – Метка:`}</label>
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
					<label>Цвет:</label>
					<input
						type="text"
						value={backgroundColors[index]}
						onChange={(e) => handleColorChange(index, e)}
					/>
				</div>
			))}
			<button type="submit">Сохранить данные Pie Chart</button>
		</form>
	);
}
