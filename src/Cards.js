
import React from 'react'
import './index.scss'

export default class Card extends React.Component {
    render() {
        const profile = this.props;
        console.log(profile)
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} alt="img" />
                <div className="info">
                    <div className="name">{profile.name ? profile.name : "Name is not provided"}</div>
                    <div className="company">{profile.company  ? profile.company: "Company Name"}  </div>
                </div>
            </div>
        );
    }
}

