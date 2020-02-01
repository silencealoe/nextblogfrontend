import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Author from '../components/Author'
import Advert from '../components/Advert'
import {Row,Col,List,Breadcrumb} from 'antd'
import '../static/pages/list.css'
import 'antd/dist/antd.css'
import axios from 'axios'
import servicePath from '../config/api'
const TypeLists = (datalist) => {
  const [list,setlist]=useState(datalist.data)
  console.log('list', list);
  useEffect(()=>{
    setlist(datalist.data)
  })
  return (
    <div>
      <Head>
        <title>list</title>
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
TypeLists.getInitialProps = async (context) => {
  console.log('content', context)
  const id = context.query.id
  const promise = new Promise((resolve)=>{
    axios.get(servicePath.getListById + id).then(res=>{
      console.log('res', res.data)
      resolve(res.data)
    })
  })
  return await promise
}
export default TypeLists