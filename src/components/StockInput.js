import { Button, Input, Select, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;
export default function StockInput() {
    return <>
        <Space.Compact size="large" style={{ width: '100%', marginTop:'30px' }}>
            <Search placeholder="input search text" enterButton />
        </Space.Compact>
    </>
}