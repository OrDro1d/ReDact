import { useState } from "react";

import styles from "./PieChartForm.module.css";

export default function PieChartForm({ initialData, onSubmit }) {
	const [labels, setLabels] = useState(initialData.labels);
	const [dataPoints, setDataPoints] = useState(initialData.datasets[0].data);
	const [backgroundColors, setBackgroundColors] = useState(() => {
		return initialData.labels.map(() => "#4bb");
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

	const addDataPoint = () => {
		const newLabels = labels.concat(["Новый сегмент"]);
		setLabels(newLabels);
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
		<div className={styles["container"]}>
			<h2>Круговая диаграмма</h2>
			<form onSubmit={handleSubmit}>
				<div className={styles["form-body"]}>
					<h3>Настройка Круговой диаграммы</h3>
					{labels.map((label, index) => (
						<div key={index}>
							<label>{`Сегмент ${index + 1} – Метка:`}</label>
							<input
								placeholder="Введите имя сегмента"
								type="text"
								value={label}
								onChange={(e) => handleLabelChange(index, e)}
								required
							/>
							<label>Значение:</label>
							<input
								placeholder="Введите значение сегмента"
								type="number"
								value={dataPoints[index]}
								onChange={(e) => handleDataPointChange(index, e)}
								required
							/>
							<label>Цвет:</label>
							<input
								placeholder="Задайте цвет сегмента"
								type="text"
								value={backgroundColors[index]}
								onChange={(e) => handleColorChange(index, e)}
								required
							/>
						</div>
					))}
				</div>
				<div className={styles["form-btns"]}>
					<button type="submit">Создать график</button>
					<button type="button" onClick={addDataPoint}>
						Добавить новый сегмент
					</button>
				</div>
			</form>
		</div>
	);
}
