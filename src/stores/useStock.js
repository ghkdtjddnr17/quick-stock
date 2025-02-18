
import { create } from 'zustand'
import stockData from "../jsons/stockData.json";




export const useStockStore = create((set, get) => ({
    getStock: [...stockData],
    setStock: (selectStock) => {
        const { getStock } = get()

        const selectIndex = getStock.findIndex((stockItem) => {
            return stockItem.title === selectStock.title

        })
        getStock[selectIndex] = { ...getStock[selectIndex], amount: selectStock.amount }
        set({ getStock: [...getStock] })
    },
    setSaveStockData: () => {
        const stockDataSave = localStorage.getItem('stockData');

        if (JSON.parse(stockDataSave)) {
            set({ getStock: JSON.parse(stockDataSave) })
        }
    }
}))