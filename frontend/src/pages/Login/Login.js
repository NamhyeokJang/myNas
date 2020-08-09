import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { Input, Button } from 'antd'


import styles from './Login.module.css'

@inject('userStore')
@observer
class Login extends Component {
    @observable username = ''
    @observable password = ''

    render() {
        const { userStore } = this.props
        return (
            <>
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <div className={styles.container}>
                    {userStore.isLogin && <Redirect to='/' />}
                    <h1>Login</h1>
                    <Input onChange={this.handleInput} placeholder='Name' name='username' size='large' style={{ marginBottom: '10px' }} />
                    <Input onChange={this.handleInput} placeholder='Password' name='password' size='large' style={{ marginBottom: '10px' }} />
                    <Button onClick={this.handleSubmit} size='large' style={{ width: '100%' }}>Submit</Button>
                </div>
            </>
        );
    }

    @action.bound
    handleInput = (e) => {
        const { name, value } = e.target
        this[name] = value
    }

    handleSubmit = async () => {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/user/login`, { name: this.username, password: this.password })
        if (res.data.result === 'successs') {
            this.props.userStore.succeedLogin(res.data.user[0])

        } else {
            alert("login Failed")
        }
    }
}

export default Login;