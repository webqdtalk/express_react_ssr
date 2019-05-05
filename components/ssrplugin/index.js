import React,{Component} from 'react';
try{
  require('./index.scss');
}catch(e){}
class Ssrplugin extends React.Component {
  constructor(props) {
    super(props);

      // 设置 initial state
      this.state = {
        text:"这里是组件二，可在查看源文件中找到我，便于seo"
      };
  }
  render() {
    return (
      <div className="Ssrplugin" onClick={this.handleChange}>
        {this.state.text}
      </div>
    );
  }
}
module.exports = Ssrplugin;
