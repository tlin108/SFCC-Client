import React, { Component } from 'react';
import { Link } from 'react-router';

const peoples = [{
  "name": "Nancy",
  "favoriteCity": "Arruda dos Vinhos",
  "id": 7
}, {
  "name": "Timothy",
  "favoriteCity": "Mutoko",
  "id": 3
}, {
  "name": "Dennis",
  "favoriteCity": "Trelleborg",
  "id": 5
}, {
  "name": "Anthony",
  "favoriteCity": "Schaumburg",
  "id": 1
}, {
  "name": "Amanda",
  "favoriteCity": "Melgar",
  "id": 6
}];

class PeopleIndex extends Component {
  renderPeoples() {
    return peoples.map((people) => {
      return (
        <li className="list-group-item" key={people.id}>
          <Link to={"people/" + people.id} className="posts-list">
            <span className="float-right">{people.favoriteCity}</span>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>People List</h3>
        <ul className="list-group">
          {this.renderPeoples()}
        </ul>
      </div>
    );
  }
}

export default PeopleIndex;