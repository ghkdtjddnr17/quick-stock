import { useEffect } from 'react'
import { useStockStore } from '../stores/useStock'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const StockMenu = () => {
    const { getStock } = useStockStore()
    const navigate = useNavigate()


    useEffect(() => {
        const saveTimestamp = localStorage.getItem('saveDate')
        const saveDate = new Date(saveTimestamp)
        const currentDate = new Date()

        saveDate.setHours(0, 0, 0, 0)
        currentDate.setHours(0, 0, 0, 0)

        if (currentDate.getTime() > saveDate.getTime()) {
            return localStorage.removeItem('saveDate')
        }
    }, [])
    const handleSave = () => {
        localStorage.setItem('stockData', JSON.stringify(getStock))
        localStorage.setItem('saveDate', Date.now())


        toast.success('저장 성공', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: true

        })

    }

    return <>
        <section className="w-full fixed bottom-[0px]  bg-[#ffffff]">
            <div className=" flex items-center justify-between border-t border-gray-200 px-2 py-2 sm:px-6 rounded-t-lg">
                <div className="flex w-full justify-around">
                    <button className="flex flex-col items-center" onClick={handleSave}>
                        <img className='w-[30px]' src='/images/ic_save.svg' alt="save" />
                        <p className="text-[12px] font-bold text-[#14cc61]">저장</p>
                    </button>
                    <button className="flex flex-col items-center">
                        <img className='w-[30px]' src='/images/ic_preview.svg' alt="preview" onClick={() => navigate('/stockResult')} />
                        <p className="text-[12px] font-bold text-[#14cc61]">미리보기</p>
                    </button>
                </div>
            </div>
            <ToastContainer />
        </section>
    </>
}

export default StockMenu