import React, { Component } from 'react';
import Card from './Cards.js'

export default class CardList extends Component {

    render() {
        return (
            <div className='CardList'>
                {this.props.data.map(profile => <Card key={profile.node_id} {...profile} />)}
            </div>
        )
    }
}