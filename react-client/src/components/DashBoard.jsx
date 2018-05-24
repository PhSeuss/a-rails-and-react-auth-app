import React, { Component } from 'react';
import Auth from '../modules/Auth';
import AddMonsterForm from './AddMonsterForm';
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myMonster: null,
      monsterLoaded: false
    };
    this.addMonster = this.addMonster.bind(this);
  }

  componentDidMount() {
    this.getUserMonsters();
  }
  getUserMonsters() {
    fetch('/profile', {
      method: 'GET',
      headers: {
        token: Auth.getToken(),
        Authorization: `Token ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          myMonster: res.user.monsters,
          monsterLoaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  addMonster(e, data) {
    fetch('/monsters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: Auth.getToken(),
        Authorization: `Token ${Auth.getToken()}`
      },
      body: JSON.stringify({
        monster: data
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.getUserMonsters();
      })
      .catch(err => {
        console.log(err);
      });
  }
  renderMonster() {
    const { myMonster } = this.state;
    return (
      <div>
        <AddMonsterForm addMonster={this.addMonster} />
        {myMonster ? (
          myMonster.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        ) : (
          <h2>Create a monster</h2>
        )}
      </div>
    );
  }
  render() {
    return (
      <div className="dash">
        {this.state.monsterLoaded ? this.renderMonster() : <h2>Loading...</h2>}
      </div>
    );
  }
}

export default DashBoard;
