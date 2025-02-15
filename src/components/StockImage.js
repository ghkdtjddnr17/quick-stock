import '../styles/Image.scss'
import { useRef } from 'react'
import html2canvas from 'html2canvas';


const table_1_data = [
    '팡도르',
    '타르트피',
    '브리오슈타르트',
    '무화과타르트',
    '호두 타르트',
    '마늘빵',
    '사각파이생지',
    '구운타르트피',
    '크로와상',
    '몽블랑',
    '초코무스',
    '얼그레이',
    '레드벨벳',
    '당근케이크',
    '레몬허니케이크',
    '코코아허니케이크',
    '월넛허니케이크',
    '시나몬허니케이크',
    '허니케이크케이스',
    '쇼콜라롤케익',
    '우유롤케익',
    '티라미슈',
    '레인보우케익',
    '깔루아마끼야토',
    '블랙포레스트케익',
    '바나나플람생크림케익',
    '쿠키앤크림케익',
    '플레인 베이글',
    '큐브식빵 ',
]



const StockImage = () => {
    const captureRef = useRef(null);

    const handleCapture = () => {
        if (captureRef.current) {
            html2canvas(captureRef.current).then((canvas) => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'captured-image.png';
                link.click();
            });
        }
    };
    return <>
        <section className='stock_image' ref={captureRef}>
            <table className='table_1'>
                <thead>
                    <tr>
                        <th className='item'>품목</th>
                        <th className='amount'>수량</th>
                        <th className='item'>품목</th>
                        <th className='amount'>수량</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        table_1_data.map((res, i) => {
                            return <tr>
                                <td>{i < 15 && table_1_data[i]}</td>
                                <td>1개</td>
                                <td>{table_1_data[i + 15]}</td>
                                <td>1개</td>
                            </tr>
                        })
                    }

                </tbody>
            </table>

        </section>
        <button onClick={handleCapture}>test</button>
    </>
}




export default StockImage