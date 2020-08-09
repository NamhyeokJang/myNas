import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { Button } from 'antd'
import { ThunderboltTwoTone } from '@ant-design/icons'
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

import styles from './Wol.module.css'
@inject('userStore')
@observer
class Wol extends Component {
    @observable isOn

    async componentDidMount() {
        await axios.get(`${process.env.REACT_APP_API}/utils/wol/ping`)
            .then(res => this.isOn = res.data.alive)
    }

    render() {
        const { userStore } = this.props
        return (
            <>
                <Helmet>
                    <title>Wol</title>
                </Helmet>
                <div className={styles.container}>
                    {!userStore.userInfo.isHost && <Redirect to='/' />}
                    <div className={styles.wol_status}>
                        <h1>
                            <ThunderboltTwoTone twoToneColor='#F4FA58' style={{ fontSize: '40px' }} />
                        Is My desk on?
                    </h1>
                        {this.isOn ? <h1>On</h1> : <h1>Off</h1>}
                        <Button onClick={this.sendWol} size='large' style={{ width: '220px' }}>PC 켜기</Button>
                    </div>
                </div>
            </>
        );
    }

    sendWol = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API}/utils/wol`)
            .then(res => res.data)

        if (res.success) alert(res.msg)
        else alert(res.msg)
    }
}

export default Wol;
