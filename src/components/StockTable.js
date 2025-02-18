import { List } from "antd";
import StockButton from "./StockButton";
import "../styles/Table.scss";
import { useStockStore } from '../stores/useStock'
const StockTable = () => {
	const { getStock } = useStockStore()
	return (
		<>
			<List>
				{getStock.map(({ title, id, amount }) => {
					return (
						<>
							<List.Item key={title}>
								<p className="stock_table_title">{title}</p>
								<StockButton stockInfo={{ title, amount }} />
							</List.Item>
						</>
					);
				})}
			</List>
		</>
	);
};

export default StockTable;
