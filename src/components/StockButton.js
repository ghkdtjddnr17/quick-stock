import { useEffect, useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useStockStore } from '../stores/useStock'

const StockButton = ({ stockInfo }) => {
	const [amount, setAmount] = useState("");

	const { setStock } = useStockStore()

	const handleButton = (type) => {
		const { title, amount } = stockInfo

		let plusAmount = Number(amount) + 1
		let minusAmout = Number(amount) - 1


		if (type === "plus") {
			setAmount(String(Number(amount) + 1));
		} else {
			setAmount(String(Number(amount) - 1));
		}

		setStock({ title, amount: type === 'plus' ? plusAmount : minusAmout })
	};


	const handleInput = (e) => {
		const { value } = e.target;

		setAmount(String(Number(value)));
	};

	return (
		<>
			<div className="stock_table_item_button_section">
				<MinusOutlined onClick={() => handleButton("minus")} />
				<input className="stock_input" type="text" value={stockInfo.amount} onChange={handleInput} placeholder="0" />
				<PlusOutlined onClick={() => handleButton("plus")} />
			</div>
		</>
	);
};

export default StockButton;
