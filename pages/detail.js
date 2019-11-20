import React from 'react'
import Head from 'next/head'
import {withRouter} from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Author from '../components/Author'
import Advert from '../components/Advert'
import {Row,Col,Icon,Breadcrumb,Affix} from 'antd'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import '../static/pages/detail.css'

const Details=({router})=>{
  console.log(router.query.id)
  let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '>>>> <div>123</div>'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
  return(
    <div>
      <Head>
        <title>博客详情页</title>
      </Head>
      <Header/>
      <div className="detail">
      <Row type="flex" justify="center">
       <Col xs={24} sm={24} md={24} lg={23} xl={18}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/detail">detail</Breadcrumb.Item>
        </Breadcrumb>
        </Col>
     </Row>
      <Row className="list-main" justify="center" type="flex">
        <Col  className="commom-left" xs={24} sm={24} md={24} lg={15} xl={14}>
          <div className="detail-title"> React实战视频教程</div>
          <div className="list-icon center">
            <span><Icon type="calendar" /> 2019-06-28   </span>
            <span><Icon type="folder" /> 视频教程   </span>
            <span><Icon type="fire" /> 5498人</span>
          </div>
          <div className="detail-content">
            <ReactMarkdown source={markdown} escapeHtml={false}/>

          </div>
        </Col>
        <Col className="commom-right" xs={0} sm={0} md={0} lg={8} xl={4}>
          <Author/>
       
          <Advert/>
          <Affix offsetTop={50}>
          <div className="detail-nav">
            <h2 className="detail-nav-title">
            <Icon type="book"/>
              文章目录
            </h2>
            <MarkNav
              className="nav-list"
              source={markdown}
              ordered={false}
            />
          </div>
          </Affix>
        </Col>
      </Row>
        
       
      </div>
      <Footer/>

    </div>
  )
}
export default withRouter(Details)