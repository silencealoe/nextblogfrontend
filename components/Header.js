import React from 'react'
import {Row,Col,Menu,Icon} from 'antd'
import '../static/components/header.css'

// {
//   xs: <576px响应式栅格。
// sm：≥576px响应式栅格.
// md: ≥768px响应式栅格.
// lg: ≥992px响应式栅格.
// xl: ≥1200px响应式栅格.
// xxl: ≥1600px响应式栅格.
// }
const Header=()=>(
  <div>
      <Row type="flex" justify="center" className="header">
        <Col className="header_title" xs={24} sm={24} md={24} lg={15} xl={14}>
            <span className="header_logo">掘金</span>
            <span className="header_text">一个帮助开发者成长的社区</span>
        </Col>
        <Col  xs={0} sm={0} md={0} lg={8} xl={4}>
            <Menu mode="horizontal" className="header_menu" selectedKeys="home">
              <Menu.Item key="home">
                首页
              </Menu.Item>
              <Menu.Item key="vedio">
                视频
              </Menu.Item>
              <Menu.Item key="life">
                生活
              </Menu.Item>
            </Menu>
        </Col>
      </Row>

  </div>
)
export default Header