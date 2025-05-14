import { useState } from "react";

import styles from "./LineChartForm.module.css";

export default function LineChartForm({ initialData, onSubmit }) {
	const [labels, setLabels] = useState(initialData.labels);
	const [dataPoints, setDataPoints] = useState(initialData.datasets[0].data);
	const [datasetLabel, setDatasetLabel] = useState(
		initialData.datasets[0].label
	);
	const [borderColor, setBorderColor] = useState(
		initialData.datasets[0].borderColor
	);
	const [backgroundColor, setBackgroundColor] = useState(
		initialData.datasets[0].backgroundColor
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

	const addMark = () => {
		const newLabels = labels.concat(["Новая метка"]);
		setLabels(newLabels);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const chartData = {
			name: "line",
			labels: labels,
			datasets: [
				{
					label: datasetLabel,
					data: dataPoints,
					borderColor: borderColor,
					backgroundColor: backgroundColor,
					fill: false
				}
			]
		};
		onSubmit(chartData);
	};

	return (
		<div className={styles["container"]}>
			<h2>Линейный график</h2>
			<form className={styles["chart-form"]} onSubmit={handleSubmit}>
				<div className={styles["form-body"]}>
					<div className={styles["form-parameters-block"]}>
						<h3>Настройка линейного графика</h3>
						<div className={styles["parameters-input"]}>
							<label>Название набора данных:</label>
							<input
								type="text"
								value={datasetLabel}
								onChange={(e) => setDatasetLabel(e.target.value)}
							/>
						</div>
						<div className={styles["parameters-input"]}>
							<label>Цвет линии:</label>
							<input
								type="text"
								value={borderColor}
								onChange={(e) => setBorderColor(e.target.value)}
							/>
						</div>
						<div className={styles["parameters-input"]}>
							<label>Цвет заливки:</label>
							<input
								type="text"
								value={backgroundColor}
								onChange={(e) => setBackgroundColor(e.target.value)}
							/>
						</div>
						<div className={styles["form-btns"]}>
							<button
								className={styles["add-mark-btn"]}
								type="button"
								onClick={addMark}
							>
								Добавить метку
							</button>
							<button className={styles["make-chart-btn"]} type="submit">
								Сохранить данные Line Chart
							</button>
						</div>
					</div>
					<div className={styles["form-data-block"]}>
						<h3>Данные диаграммы</h3>
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
					</div>
				</div>
			</form>
		</div>
	);
}
