import React,{useState}from 'react';
import Head from 'next/head'  //配置head信息
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Author from '../components/Author'
import Advert from '../components/Advert'
import {Row,Col,List,Breadcrumb} from 'antd'
import axios from 'axios'
import '../static/pages/list.css'

const Lists=(lists)=>{
  const [list,setlist]=useState(lists.data)
    return (
      <div>
      <Head>
        <title>掘金</title>
      </Head>
      <Header/>
     <Row type="flex" justify="center">
       <Col xs={24} sm={24} md={24} lg={23} xl={18}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/list">list</Breadcrumb.Item>
        </Breadcrumb>
        </Col>
     </Row>
      <Row className="list-main" justify="center" type="flex">
        <Col  className="commom-left" xs={24} sm={24} md={24} lg={15} xl={14}>
            <List
              header="最新推荐"
              itemLayout="vertical"
              dataSource={list}
              renderItem={item=>(
                <List.Item>
                  <Link href={{pathname:'/detail',query:{id:item.Id}}}>
                    <a>{item.title}</a>
                  </Link>
                  <p className="list-date">
                    <span>发表于 {item.addtime}</span>
                    <span> 阅读  {item.viewcount}</span>
                  </p>
                  <div className="list-content">{item.introduce}</div>
                </List.Item>
              )}
            />
        </Col>
        <Col className="commom-right" xs={0} sm={0} md={0} lg={8} xl={4}>
          <Author/>
          <Advert/>
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}
Lists.getInitialProps=async ()=>{
  const promise = new Promise((resolve)=>{
    axios.get('http://127.0.0.1:7001/getArtical').then(res=>{
      console.log('ok',res.data) 
      resolve(res.data)
    })

  })
  return await promise
}
export default Lists