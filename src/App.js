import React from 'react';
import './index.scss';
import CardList from './CardList';
import Form from './Form';


const testData = [
  // { name: "Sebastian Markbåge",
  //  avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
  //  company: "Facebook" },
];

export default class App extends React.Component {

  state = {
    profiles: testData
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
    // console.log(this.state.profiles)
  }

  render() {
    return (
      <div>
        <header className="header">{this.props.title}</header>
        <Form onSubmit={this.addNewProfile} />
        <CardList data={this.state.profiles} />
      </div>
    )
  }
}