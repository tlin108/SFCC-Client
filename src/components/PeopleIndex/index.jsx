import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchPeopleList } from '../../actions/index';

class PeopleIndex extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      peoples: []
    };
  }

  componentDidMount() {
    fetchPeopleList()
    .then(res => res.json())
    .then(data => this.setState({peoples: data}))
    .catch(err => console.log(err));
  }

  renderPeoples() {
    return this.state.peoples.map((people) => {
      return (
        <li className="list-group-item" key={people._id}>
          <Link to={"people/" + people._id}>
            <h5 >Name: {people.name}</h5>
            <small>Favorite City: {people.favoriteCity}</small>
          </Link>
        </li>
      );
    });
  }

  render() {
    const { peoples } = this.state;

    if (peoples.length === 0) {
      return <div>Loading...</div>
    }

    return (
      <div className="container">
        <h3 className="page">People List</h3>
        <Link to="/people/new/" className="btn btn-primary">
          Add a Person
        </Link>
        < hr />
        <ul className="list-group">
          {this.renderPeoples()}
        </ul>
      </div>
    );
  }
}

export default PeopleIndex;