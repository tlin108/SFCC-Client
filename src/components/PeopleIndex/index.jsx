import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <li className="list-group-item list-group-item-action flex-column align-items-start" key={people.id}>
          <Link to={"people/" + people.id}>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Name: {people.name}</h5>
              <small>Favorite City: {people.favoriteCity}</small>
            </div>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className="page">People List</h3>
        <ul className="list-group">
          {this.renderPeoples()}
        </ul>
      </div>
    );
  }
}

export default PeopleIndex;