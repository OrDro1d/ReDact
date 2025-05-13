import ToolsMenu from "../ToolsMenu";

import styles from "./Header.module.css";

export default function Header({ onOpenChartForm }) {
	return (
		<header>
			<div className={styles["logo"]}>
				<img title="logo" src="/logo.png"></img>
				<p>ReDact</p>
			</div>
			<ToolsMenu onOpenChartForm={onOpenChartForm}></ToolsMenu>
		</header>
	);
}
