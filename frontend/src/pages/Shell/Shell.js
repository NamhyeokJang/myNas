import React, { Component } from 'react';
import axios from 'axios'
import { Input } from 'antd'

class Shell extends Component {
    state = {
        input: '',
        shell: ''
    }
    render() {
        return (
            <div>
                <Input type='text' placeholder='Shell' value={this.state.input}
                    onChange={(e) => this.setState({ input: e.target.value })}
                    onPressEnter={this.handleEnter} />
                {this.state.shell.split('\n').map((line, index) => <p key={index}>{line}</p>)}
            </div>
        );
    }

    handleEnter = async () => {
        if (this.state.input === 'clear') {
            this.setState({
                shell: '',
                input: ''
            })
            return
        }
        await axios.post(`${process.env.REACT_APP_API}/shell`, { script: this.state.input })
            .then(res => this.setState({ shell: res.data.stdout, input: '' }))

    }
}

export default Shell;