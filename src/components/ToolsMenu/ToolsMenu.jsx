import styles from "./ToolsMenu.module.css";

export default function ToolsMenu({ onOpenChartForm }) {
	return (
		<div className={styles["tools-menu"]}>
			<button onClick={() => onOpenChartForm("line")}>Линейная</button>
			<button onClick={() => onOpenChartForm("pie")}>Круговая</button>
			<button onClick={() => onOpenChartForm("bar")}>Столбчатая</button>
		</div>
	);
}
