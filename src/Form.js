import React from 'react';
import './index.scss';

const axios = require('axios');

export default class Form extends React.Component {

    state = {
        userName: ''
    }
    // userNameInput = React.createRef();
    handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(this.userNameInput)
        // GET /repos/:owner/:repo/commits
        const userdetail = await axios.get(`https://api.github.com/users/${this.state.userName}`)
        // const repos = await axios.get(`https://api.github.com/users/${this.state.userName}/repos`)
        // const commits = await axios.get(`https://api.github.com/users/${this.state.userName}/zeeshan1`)


        console.log(userdetail);
        this.props.onSubmit(userdetail.data)
        this.setState({
            userName : ''
        })
        // console.log('2' + userdetail.data )

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    placeholder="Github username"
                    onChange={event => this.setState({ userName: event.target.value })}
                    // ref={this.userNameInput}
                    value={this.state.userName}
                    required />
                <button>Add card</button>
            </form>
        )
    }
}
