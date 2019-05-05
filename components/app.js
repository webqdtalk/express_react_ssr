import  React  from 'react';
import Index from './index';
import { render }  from 'react-dom';
//纯前端组件渲染的入口文件，基本不用动

const rootElement = document.getElementById('root');
render(
   <Index />,
    rootElement
);