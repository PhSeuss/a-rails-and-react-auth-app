import React, { Component } from "react";

class MonsterList extends Component {
  constructor() {
    super();
    this.state = {
      monsterList: null,
      monsterListLoaded: false
    };
  }

  componentDidMount() {
    fetch("/monsters")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          monsterList: res.monster,
          monsterListLoaded: true
        });
      });
  }

  renderMonster() {
    return this.state.monsterList.map(monster => (
      <div className="monster" key={monster.id}>
        <h2>{monster.name}</h2>
        <p>{monster.description}</p>
      </div>
    ));
  }
  render() {
    return (
      <div className="monster-list">
        {this.state.monsterListLoaded ? (
          this.renderMonster()
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default MonsterList;
