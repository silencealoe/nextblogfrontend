import React, {useState,useEffect}from 'react'
import {Row,Col,Menu,Icon} from 'antd'
// import Link from 'next/link'
import '../static/components/header.css'
import servicePath from '../config/api'
import axios from 'axios'
import Router from 'next/router'

// {
//   xs: <576px响应式栅格。
// sm：≥576px响应式栅格.
// md: ≥768px响应式栅格.
// lg: ≥992px响应式栅格.
// xl: ≥1200px响应式栅格.
// xxl: ≥1600px响应式栅格.
// }
const Header=() => {
  const [navArray,setNavArray] = useState([])
  const [typeShow, setTypeShow] = useState(false)
  const [current, setCurrent] = useState('home')
  useEffect(()=>{
    const getTypeList = async () => {
      const result = await axios.get(servicePath.getType).then(res=>{
        console.log('type', res.data)
        setNavArray(res.data.data)
        setTypeShow(true)
        return res.data.data
      })
      console.log('result', result)
      setNavArray(result)
    }
    getTypeList()
  },[]);
  const handleCurrent = (e) => {
        console.log('eee', e);
        // setCurrent(e.key)
        if(e.key === '0') {
          Router.push('/index')
        } else {
          Router.push('/list?id='+e.key)
        }
  }

  return (
    <div>
    <Row type="flex" justify="center" className="header">
      <Col className="header_title" xs={24} sm={24} md={24} lg={15} xl={14}>
          <a href="/index"><span className="header_logo">掘金</span></a>
          <span className="header_text">一个帮助开发者成长的社区</span>
      </Col>
      <Col  xs={0} sm={0} md={0} lg={8} xl={8}  className="header_menu">
        {
          typeShow&&
         <Menu mode="horizontal" selectedKeys={current} onClick={handleCurrent}>
           <Menu.Item key="0">
                 首页
             </Menu.Item>
             {
               navArray.map((item) => {
                 return (
                   <Menu.Item key={item.Id}>
                     {item.typeName}
                   </Menu.Item>
                 )
               })
             }
         
           {/* <Menu.Item key="vedio">
             视频
           </Menu.Item>
           <Menu.Item key="life">
             生活
           </Menu.Item> */}
         </Menu>
        }
         
      </Col>
    </Row>

</div>

  )
}
  
 
export default Header