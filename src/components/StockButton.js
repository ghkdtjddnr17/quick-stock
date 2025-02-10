import { useState } from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const StockButton = () => {
    const [amount, setAmount] = useState('')

    const handleButton = (type) => {
        if (type === 'plus') {
            setAmount(String(Number(amount) + 1))
        } else {
            setAmount(String(Number(amount) - 1))
        }
    }
    const handleInput = (e) => {
        const { value } = e.target

        setAmount(String(Number(value)))
    }
    return <>
        <div className='stock_table_item_button_section'>
            <MinusOutlined onClick={() => handleButton('minus')} />
            <input className='stock_input' type='text' value={amount} onChange={handleInput} placeholder="0" />
            <PlusOutlined onClick={() => handleButton('plus')} />
        </div>

    </>
}

export default StockButton