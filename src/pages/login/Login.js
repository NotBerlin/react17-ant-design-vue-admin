import React from 'react'
import './login.css'
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

class login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'login'
        }
    }

    login = () => {
        const { history } = this.props
        history.push('/home')
    }

    render() {
        return <div className="login" id="login">
            <div className="login-frame">
                <div className="title">登录</div>
                <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={this.login}>登录
                </Button>
            </div>
        </div>
    }
}

export default login;