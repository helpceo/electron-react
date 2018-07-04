// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import { Button, Switch } from 'antd';
import http from '../plugins/axios';

const {ipcRenderer} = window.require('electron')

type Props = {};

export default class Home extends Component<Props> {
  props: Props;
  constructor() {
    super();
    this.state = {
      value: "不好看",
      age: 10
    };
  }
  componentDidMount(){
    let ros = new ROSLIB.Ros({
      url : 'ws://localhost:9090'
    });
    ros.on('connection', function() {
      console.log('Connected to websocket server.');
    });
    
    ros.on('error', function(error) {
      console.log('Error connecting to websocket server: ', error);
    });
    
    ros.on('close', function() {
      console.log('Connection to websocket server closed.');
    });
    http.post('/auth/login',{
      phone: "15638900080",
      password: "123456789a",
      type: "phone"
    }).then(res => {
      // console.log(res.data,'1111')
    })
  }
  handleClick = function() {
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg)
        this.setState({
          value:arg
        })
        
    })
    ipcRenderer.send('asynchronous-message', 'true')
  }
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Button type="primary" onClick={this.handleClick.bind(this)}>点击</Button>
          <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
          <Link to="/counter">{this.state.value}</Link>
          <p>这是热更新</p>
        </div>
      </div>
    );
  }
}
