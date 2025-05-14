import { useState } from "react";

import styles from "./BarChartForm.module.css";

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

	const addBar = () => {
		const newLabels = labels.concat(["Новый сегмент"]);
		setLabels(newLabels);
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
		<div className={styles["container"]}>
			<h2>Столбчатая диаграмма</h2>
			<form onSubmit={handleSubmit}>
				<div className={styles["form-body"]}>
					<div className={styles["form-parameters"]}>
						<h3>Настройка Столбчатой диаграммы</h3>
						<div className={styles["parameters-input"]}>
							<label>Название набора данных:</label>
							<input
								placeholder="Задайте название набор данных"
								type="text"
								value={datasetLabel}
								onChange={(e) => setDatasetLabel(e.target.value)}
								required
							/>
						</div>
						<div className={styles["parameters-input"]}>
							<label>Цвет заливки:</label>
							<input
								placeholder="Задайте цвет заливки"
								type="text"
								value={backgroundColor}
								onChange={(e) => setBackgroundColor(e.target.value)}
								required
							/>
						</div>
						<div className={styles["parameters-input"]}>
							<label>Цвет обводки:</label>
							<input
								placeholder="Задайте цвет обводки"
								type="text"
								value={borderColor}
								onChange={(e) => setBorderColor(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className={styles["form-data"]}>
						<h3>Данные диаграммы</h3>
						{labels.map((label, index) => (
							<div key={index}>
								<label>{`Метка ${index + 1}:`}</label>
								<input
									placeholder="Задайте имя столба"
									type="text"
									value={label}
									onChange={(e) => handleLabelChange(index, e)}
									required
								/>
								<label>Значение:</label>
								<input
									placeholder="Задайте значение на столбе"
									type="number"
									value={dataPoints[index]}
									onChange={(e) => handleDataPointChange(index, e)}
									required
								/>
							</div>
						))}
					</div>
				</div>
				<div className={styles["form-btns"]}>
					<button
						className={styles["add-mark-btn"]}
						type="button"
						onClick={addBar}
					>
						Добавить новый столб
					</button>
					<button className={styles["make-chart-btn"]} type="submit">
						Создать диаграмму
					</button>
				</div>
			</form>
		</div>
	);
}
