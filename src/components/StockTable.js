import { List } from 'antd';
import stockData from '../jsons/stockData.json'
import StockButton from './StockButton'
import '../styles/Table.scss'
const StockTable = () => {

    console.log(stockData);

    return <>
        <List>
            {
                stockData.map(({ title }) => {
                    return <>
                        <List.Item>
                            <p className='stock_table_title'>
                                {title}
                            </p>
                            <StockButton />
                        </List.Item >
                    </>
                })
            }


        </List >
    </>
}




export default StockTable 