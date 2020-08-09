import React from 'react';
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

import styles from './Blog.module.css'

class Blog extends React.Component {
    state = {
        md: ''
    }

    componentDidMount = async () => {
        await axios.get(`${process.env.REACT_APP_API}/contents/image`)
            .then(res => this.setState({
                md: res.data
            }))
    }

    render() {
        return (
            <div>
                <ReactMarkdown source={this.state.md} />
            </div>
        );
    }
}

export default Blog;