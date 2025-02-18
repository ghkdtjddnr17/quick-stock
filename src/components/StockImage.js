import "../styles/Image.scss";
import { useCallback, useRef } from "react";
import html2canvas from "html2canvas";
import stockOriginalData from '../jsons/stockOriginalData.json'
import { useStockStore } from '../stores/useStock'

const StockImage = () => {
    const captureRef = useRef(null);

    const { getStock } = useStockStore()

    // useEffect(() => {
    //     setSaveStockData()
    // }, [])

    const stockItemAmount = useCallback((stockId) => {
        const data = getStock.find(({ title }) => {
            return title === stockId
        })

        return data?.amount > 0 ? data?.amount : ''
    }, [getStock])
    return (
        <>
            <section className="stock_image" ref={captureRef}>
                <table className="table_1">
                    <thead>
                        <tr>
                            <th className="item">품목</th>
                            <th className="amount">수량</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stockOriginalData.map((res, i) => {
                            return (
                                <tr className="text-center font-bold">
                                    <td className={`${stockItemAmount(res.title) > 0 && 'text-[#ef0000]'}`}>{res.title}</td>
                                    <td className={`${stockItemAmount(res.title) > 0 && 'text-[#ef0000]'}`}>{stockItemAmount(res.title)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default StockImage;
