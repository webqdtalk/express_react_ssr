import React,{Component} from 'react';
import Switchtab from "./switchtab"
import Ssrplugin from "./ssrplugin"
//前端和服务端渲染组件的入口组件,可在此处处理服务端数据
class App extends Component{
	constructor(props){
	 	super(props);
	 	this.state={};
	}
	render() {
	    return (
	      <div >
						<Switchtab data={{}}></Switchtab>
						<Ssrplugin data={{}}></Ssrplugin>
	      </div>
	    );
	}
}

module.exports = App