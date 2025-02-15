import { List } from "antd";
import stockData from "../jsons/stockData.json";
import StockButton from "./StockButton";
import "../styles/Table.scss";
import { useState } from "react";
const StockTable = () => {
	console.log(stockData);

	const [test, setTest] = useState([]);

	return (
		<>
			<List>
				{stockData.map(({ title, id }) => {
					return (
						<>
							<List.Item>
								<p className="stock_table_title">{title}</p>
								<StockButton stockId={id} setTest={setTest} test={test} />
							</List.Item>
						</>
					);
				})}
			</List>

			<button
				onClick={() => {
					console.log({ test });
				}}
			>
				저장
			</button>
		</>
	);
};

export default StockTable;
