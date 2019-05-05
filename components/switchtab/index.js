import React,{Component} from 'react';
import axios from 'axios';
try{
    require('./index.scss')  //因服务端渲染不需要scss文件，但webpack仍会处理scss文件，打包scss会出错，此处需要作为容错处理
}catch(e){
    console.log(e.message);
}

class Switch_tab extends React.Component {
  constructor(props) {
    super(props);

      // 设置 initial state
      this.state = {
        text:"暂无内容,因为我是首屏数据",
        nowSelect:"0"
      };
  }
  componentDidMount(){
    this.handleChange("0");
  }
  handleChange(activeId){
    var me=this,
    url="/api/getLeftContent";
    activeId=="1"?url="/api/getRightContent":null;
    axios.get(url)
    .then(function (response) {
      console.log(response);
      me.setState({text:response.data,nowSelect:activeId});
    });
  }
  render() {
      var me=this;
    return (
      <div className="Switch_tab">
        这里是组件一，简单实现ajax请求tab数据
        <div className="tab-head">
            <a href="javascript:;" className={this.state.nowSelect=="0"?"tab-item active":"tab-item"} onClick={this.handleChange.bind(this,"0")}>{this.props.leftBtnText||"左边tab"}</a>
            <a href="javascript:;" className={this.state.nowSelect=="1"?"tab-item active":"tab-item"} onClick={this.handleChange.bind(this,"1")}>{this.props.rightBtnText||"右边tab"}</a>
        </div>
        <div className="content">{this.state.text}</div>
      </div>
    );
  }
}
module.exports = Switch_tab;