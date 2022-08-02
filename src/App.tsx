import React from 'react';
import { useState } from 'react';
import { Button} from 'antd';
import { LoginOutlined , LogoutOutlined} from '@ant-design/icons';
import './App.scss';

function App() {

  const [swap, setSwap] = useState(false)

  return (
    <div className='container'>
      <header><div>zxc</div>
      <ul>
        <li>zxc</li>
      <li>zxc</li>
      <li>zxc</li>
      <li>zxc</li>
      <li>zxc</li>
      </ul>
      <Button type="primary" onClick={()=> setSwap(!swap)}>zxc {swap === true ? <LoginOutlined/> : <LogoutOutlined/>}</Button>
      
      </header>
      <div className='wrapper'>
        <aside>zxc</aside>
        <main>
        <Button type="dashed" danger={true}  size="small">zxc danger</Button>
        <Button type="dashed" disabled={true} >zxc disabled</Button>
        <Button type="dashed" ghost={true} >zxc ghost</Button>
        <Button type="dashed" href="https://vk.com/birmiiiyo" target="_blank">zxc ghost</Button>
        <Button type="dashed" loading={true} >zxc ghost</Button>
        
        <Button type="dashed" shape='round' size="large">zxc ghost</Button>
        </main>
      </div>
    </div>
  );
}

export default App;
