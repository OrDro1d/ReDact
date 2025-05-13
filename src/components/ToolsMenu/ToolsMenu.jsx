import styles from "./ToolsMenu.module.css";

export default function ToolsMenu({ onOpenChartForm }) {
	return (
		<div className={styles["tools-menu"]}>
			<button onClick={() => onOpenChartForm("line")}>Линия</button>
			<button onClick={() => onOpenChartForm("pie")}>Круг</button>
			<button onClick={() => onOpenChartForm("bar")}>Столбы</button>
		</div>
	);
}
