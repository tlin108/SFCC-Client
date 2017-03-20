import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PeopleShow extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  componentWillMount() {
    fetch('https://mysterious-island-57570.herokuapp.com/api/people/' + this.props.match.params.id, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => this.setState({people: data}))
    .catch(err => console.log(err));
  }

  onDeleteClick() {
    console.log('clicked');
  }

  render() {
    const { people } = this.state;

    if (!people) {
      return <div>Loading...</div>
    }

    return (
      <div className="container">
        <Link to="/people">Back to People List</Link>
        <button 
          className="btn btn-danger float-right"
          onClick={e => this.onDeleteClick()}
        >
          Delete Post
        </button>
        <h3>{people.name}</h3>
        <h6>Favorite City: {people.favoriteCity}</h6>
      </div>
    );
  }
}

export default PeopleShow;