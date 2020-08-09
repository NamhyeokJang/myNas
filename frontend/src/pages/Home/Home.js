import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { observer, inject } from 'mobx-react'

import styles from './Home.module.css'

@inject('userStore')
@observer
class Home extends Component {
    render() {
        const { userStore } = this.props
        return (
            <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <div className={styles.container}>
                    {!userStore.isLogin && <Redirect to='/login' />}
                    <h1>Home</h1>
                    <h3>Welcome <span className={styles.username}>{userStore.userInfo.name}</span></h3>
                    <p>{userStore.userInfo.isHost ? `You're Host` : ''}</p>
                </div>
            </>
        );
    }

}

export default Home;