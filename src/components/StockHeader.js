import { useNavigate } from 'react-router-dom';

export const StockHeader = () => {
    const navigate = useNavigate()
    return <>
        <div className="border-b h-[50px] flex items-center px-[10px] fixed top-0 bg-[#ffffff] w-full">
            <div className="flex items-center gap-[8px]" onClick={() => navigate('/')}>
                <img className='w-[10px] h-[16px]' src='/images/ic-chevron-left-nav.svg' alt='arrow' />
                <p className="text-[12px] font-bold">뒤로가기</p>
            </div>
        </div>
    </>
}




export const StockListHeader = () => {
    return <>
        <div className="border-b h-[50px] flex items-center px-[10px] fixed top-0 bg-[#ffffff] w-full z-[3]">
            <div className="flex items-center gap-[8px]" >
                <p className="text-[16px] font-bold">Stock Manage</p>
            </div>
        </div>
    </>
}