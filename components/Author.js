import React from 'react'
import {Avatar,Divider} from 'antd'
const Author=()=>{
  return (
    <div className="author_introduce">
      <Avatar size={100}  src="../static/images/avatar.jpg" />
      <h2 className="author_name">小熊猫一二</h2>
      <div className="author_content">
        一二是一只单纯的小熊猫，她有一个对象，叫布布,他们幸福的生活着
      </div>
      <Divider>社交账号</Divider>
      <div className="author_contact">
          <Avatar size={28} icon="github" className="account"/>
          <Avatar size={28} icon="qq"  className="account" />
          <Avatar size={28} icon="wechat"  className="account"/>
          <Avatar size={28} icon="weibo"  className="account"  />
      </div>
    </div>
  )
}
export default Author