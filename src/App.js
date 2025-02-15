import logo from "./logo.svg";
import "./App.scss";
import { Divider, List, Typography } from "antd";
import { useCallback, useEffect, useState } from "react";
import StockTable from "./components/StockTable";
import StockInput from "./components/StockInput";
import StockImage from "./components/StockImage";
export const data = [
	"팡도르",
	"타르트피",
	"브리오슈타르트",
	"무화과타르트",
	"호두 타르트",
	"마늘빵",
	"사각파이생지",
	"구운타르트피",
	"크로와상",
	"몽블랑",
	"초코무스",
	"얼그레이",
	"레드벨벳",
	"당근케이크",
	"레몬허니케이크",
	"코코아허니케이크",
	"월넛허니케이크",
	"시나몬허니케이크",
	"허니케이크케이스",
	"쇼콜라롤케익",
	"우유롤케익",
	"티라미슈",
	"레인보우케익",
	"깔루아마끼야토",
	"블랙포레스트케익",
	"바나나플람생크림케익",
	"쿠키앤크림케익",
	"플레인 베이글",
	"큐브식빵 ",
	"통팥앙금",
	"동물성생크림",
	"에멘탈슈레드",
	"화인휘프",
	"트리플섹",
	"롤치즈",
	"생폴럼",
	"얼그레이",
	"난황",
	"바닐라빈",
	"난백",
	"바질페스토",
	"미로와",
	"꿀",
	"나파쥬",
	"쿡살라미",
	"에스피",
	"우유앙금 3kg",
	"딸기리플잼",
	"블루베리리플잼",
	"베이컨탑핑",
	"파에테포요틴",
	"냉동마늘",
	"건조무화과",
	"땅콩버터",
	"케첩",
	"비닐짤주머니",
	"레몬주스",
	"샤워크림",
	"사각모짜렐라슬라이스",
	"호박씨",
	"해바라기씨",
	"건포도",
	"검정깨",
	"올리브",
	"마스카포네",
	"커피 액기스",
	"K블레소레이유(4)",
	"설탕",
	"박력분",
	"통밀강력분",
	"프리믹스",
	"크리미비트",
	"파마산치즈",
	"녹차믹스파우더 <말차>",
	"클로렐라가루",
	"요긴요거니타",
	"베이킹소다",
	"파인소프트T",
	"갈색설탕 1kg",
	"시나몬가루",
	"데코스노우",
	"컴파운드버터",
	"흑설탕 1kg",
	"더치마르켄버터",
	"물엿",
	"에스키모 ",
	"냉동이스트 ",
	"아몬드분말",
	"밤다이스",
	"아몬드슬라이스",
	"슈가파우더",
	"호두분태",
	"건크랜베리",
	"베이킹파우더",
	"밀크소프트믹스",
	"연유",
	"다크코팅초코",
	"마요네즈",
	"파슬리",
	"탈지분유",
	"크림치즈",
	"레비또마드레",
	"옥수수가루",
	"분당",
	"황치즈분말",
	"코코아파우더",
	"다크칼라바우트",
	"화이트칼라바우트",
	"펄솔트",
	"볶은 소금",
	"다크초코칩",
	"하셀슈거",
];

function App() {
	const [list, setList] = useState([]);

	const [selectedItem, setSelectedItem] = useState([
		"맘모스",
		"브리오슈타르트",
		"플레인 베이글",
		"크로와상",
		"바질페스토",
		"사각모짜렐라슬라이스",
		"몽블랑",
		"큐브식빵 ",
		"사각파이생지",
		"타르트피",
		"팡도르",
		"냉동마늘",
		"베이컨탑핑",
		"마늘빵",
		"호두 타르트",
		"무화과타르트",
		"파에테포요틴",
		"밀크소프트믹스",
		"요긴요거니타",
		"데코스노우",
		"연유",
		"미로와",
		"나파쥬",
		"다크코팅초코",
		"올리브",
		"아몬드슬라이스",
		"호두분태",
		"건크랜베리",
		"호박씨",
		"해바라기씨",
		"건포도",
		"땅콩버터",
		"에스피",
		"옥수수가루",
		"볶은 소금",
		"슈가파우더",
		"갈색설탕 1kg",
		"흑설탕 1kg",
		"분당",
		"베이킹소다",
		"베이킹파우더",
		"녹차믹스파우더 <말차>",
		"파마산치즈",
		"황치즈분말",
		"레비또마드레",
		"얼그레이",
		"검정깨",
		"커피 액기스",
		"레몬주스",
		"바닐라빈",
		"크림치즈",
		"컴파운드버터",
		"물엿",
		"구운타르트피",
		"난황",
		"냉동이스트 ",
		"탈지분유",
		"아몬드분말",
		"파슬리",
		"꿀",
		"펄솔트",
		"시나몬가루",
		"통팥앙금",
		"하셀슈거",
		"마요네즈",
		"케첩",
		"비닐짤주머니",
		"더치마르켄버터",
		"에스키모",
		"다크초코칩",
		"코코아파우더",
		"K블레소레이유(4)",
		"설탕",
		"박력분",
		"통밀강력분",
		"파인소프트T",
		"밤다이스",
		"프리믹스",
		"크리미비트",
		"쿡살라미",
		"마스카포네",
		"난백",
		"샤워크림",
		"화인휘프",
		"롤치즈",
		"에멘탈슈레드",
		"우유앙금 3kg",
		"건조무화과",
		"딸기리플잼",
		"블루베리리플잼",
		"다크칼라바우트",
		"화이트칼라바우트",
		"트리플섹",
		"생폴럼",
		"초코무스",
		"레드벨벳",
		"당근케이크",
		"레몬허니케이크",
		"코코아허니케이크",
		"월넛허니케이크",
		"시나몬허니케이크",
		"허니케이크케이스",
		"쇼콜라롤케익",
		"우유롤케익",
		"티라미슈",
		"레인보우케익",
		"깔루아마끼야토",
		"블랙포레스트케익",
		"바나나플람생크림케익",
		"쿠키앤크림케익",
	]);

	const [deleteItem, setDeleteItem] = useState([]);

	const handleSelectedList = useCallback(
		(item) => {
			const defalutList = new Set(list);
			defalutList.delete(item);

			const newList = [...defalutList];
			setList([...newList]);

			selectedItem.push(item);
			const uniqueArr = [...new Set(selectedItem)];
			setSelectedItem([...uniqueArr]);
		},
		[selectedItem, list],
	);

	const handleDeleteList = useCallback(
		(deleteItem) => {
			const setData = new Set(selectedItem);
			setData.delete(deleteItem);
			const newArray = [...setData];
			setSelectedItem([...newArray]);

			list.push(deleteItem);
			const uniqueArr = [...new Set(list)];
			setList([...uniqueArr]);
		},
		[selectedItem, list],
	);
	const test = localStorage.getItem("list");

	console.log(JSON.parse(test));

	console.log("list", { list });

	return (
		<div className="App">
			{/* <StockInput /> */}
			<StockTable />
			<StockImage />
			{/* <div style={{ width: '100vw', display: 'flex' }}>
        <List
          size="large"
          header={<div>기존내역</div>}
          bordered
          dataSource={list}
          renderItem={(item) => <List.Item onClick={() => handleSelectedList(item)}><div>{item}</div></List.Item>}
          style={{ width: '100%', marginRight: '20px', borderRadius: '0px', height: '100%' }}
        />


        <List
          size="large"
          header={<div>새로운 리스트</div>}
          bordered
          dataSource={selectedItem}
          renderItem={(item) => <List.Item onClick={() => handleDeleteList(item)}><div>{item}</div></List.Item>}
          style={{ width: '100%', borderRadius: '0px' }}
        />
      </div> */}
		</div>
	);
}

export default App;
