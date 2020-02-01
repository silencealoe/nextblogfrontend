import React from 'react'
import Head from 'next/head'
import {withRouter} from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Author from '../components/Author'
import Advert from '../components/Advert'
import {Row,Col,Icon,Breadcrumb,Affix} from 'antd'
import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import 'markdown-navbar/dist/navbar.css'
import '../static/pages/detail.css'
import Tocify from '../components/tocify.tsx'
import axios from 'axios'
import servicePath from '../config/api'

const Details=(props)=>{
  // console.log(router.query.id)
  console.log(props)
  const renderer = new marked.Renderer()
  const tocify = new Tocify()
  renderer.heading = function(text, level, raw) {
      const anchor = tocify.add(text, level);
      return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };
  marked.setOptions({
    //这个是必须填写的，你可以通过自定义的Renderer渲染出自定义的格式
    renderer: renderer,
    //启动类似Github样式的Markdown,填写true或者false
    gfm:true,
    // 只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
    pedantic:false,
    // 原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
    sanitize:false,
    // 支持Github形式的表格，必须打开gfm选项
    tables:true,
    // 支持Github换行符，必须打开gfm选项，填写true或者false
    breaks:false,
    // 优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
    smartLists:true,
    smartypants:false,
    // 高亮显示规则 ，这里我们将使用highlight.js来完成
    highlight:function(code){
      return highlight.highlightAuto(code).value
    }
  })
  let html = marked(props.data["0"].content)
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
          <Breadcrumb.Item href="/list">list</Breadcrumb.Item>
          <Breadcrumb.Item href="/detail">detail</Breadcrumb.Item>
        </Breadcrumb>
        </Col>
     </Row>
      <Row className="list-main" justify="center" type="flex">
        <Col  className="commom-left" xs={24} sm={24} md={24} lg={15} xl={14}>
          <div className="detail-title"> {props.data["0"].title}</div>
          <div className="list-icon center">
            <span><Icon type="calendar" />{props.data["0"].add_time.slice(0,10)} </span>
            <span><Icon type="folder" />{props.data["0"].typeName} </span>
            <span><Icon type="fire" /> {props.data["0"].viewcount}人</span>
          </div>
          <div className="detail-content" dangerouslySetInnerHTML={{__html:html}}>
            {/* <ReactMarkdown source={props.data["0"].content} escapeHtml={false}/> */}
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
            <div className="nav-list">
              {tocify && tocify.render()}
            </div>
          </div>
          </Affix>
        </Col>
      </Row>
      </div>
      <Footer/>
    </div>
  )
}
Details.getInitialProps=async (context)=>{
  console.log(context.query)
  const promise = new Promise((resolve)=>{
    axios.get(servicePath.getArticalById + context.query.id).then(res=>{
      // console.log(res.data)
      resolve(res.data)
    })
  })
  return await promise
  
}
export default withRouter(Details)