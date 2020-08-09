import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react';
import styles from './Header.module.css'
import logo from '../../assets/logo.png'

@inject('userStore')
@observer
class Header extends Component {


    render() {
        const { userStore } = this.props
        if (userStore.isLogin) {
            return (
                <div className={styles.container}>
                    <div className={styles.menu}>
                        <Link to='/'>
                            <img className={styles.logo} src={logo} alt='logo' />
                        </Link>
                    </div>
                    <div className={styles.menu}>
                        <Link to='/blog'>Blog</Link>
                    </div>
                    {userStore.userInfo.isHost ? <div className={styles.menu}>
                        <Link to='/wol'>Wol</Link>
                    </div>
                        :
                        ''}
                    {userStore.userInfo.isHost ? <div className={styles.menu}>
                        <Link to='/shell'>Shell</Link>
                    </div>
                        :
                        ''}
                    <div className={styles.menu} onClick={this.handleLogout}>Logout</div>
                </div >
            )
        } else {
            return (
                <div className={styles.container}>
                    <img className={styles.logo} src={logo} alt='logo' onClick={this.handleNotLogin} />
                    <div className={styles.menu}>
                        <Link to='/blog'>Blog</Link>
                    </div>
                    <div className={styles.menu}>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            )
        }
    }

    handleNotLogin = () => {
        alert('로그인을 해주세요')
    }

    handleLogout = () => {
        this.props.userStore.succeedLogout()
    }
}

export default Header;
