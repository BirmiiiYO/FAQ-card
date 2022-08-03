import React from 'react'
import { Button} from 'antd';


export default function Test() {
  return (
    <div>
    <Button type="dashed" danger={true}  size="small">zxc danger</Button>
    <Button type="dashed" disabled={true} >zxc disabled</Button>
    <Button type="dashed" ghost={true} >zxc ghost</Button>
    <Button type="dashed" href="https://vk.com/birmiiiyo" target="_blank">zxc ghost</Button>
    <Button type="dashed" loading={true} >zxc ghost</Button>
    <Button type="dashed" 
    style={{margin:"10px"}}
    shape='round' size="large">zxc ghost</Button>
    </div>
  )
}
