import React, { Component, PropTypes  } from 'react';
import { Link } from 'react-router-dom';

import { fetchPeople, deletePeople } from '../../actions/index';

class PeopleShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    
    this.state = {};
    this._id = this.props.match.params.id;
  }

  componentWillMount() {
    fetchPeople(this._id)
    .then(res => res.json())
    .then(data => this.setState({people: data}))
    .catch(err => console.log(err));
  }

  onDeleteClick() {
    if (confirm("Are you sure you want to delete this people?") === true) {
      deletePeople(this._id)
      .then(()=> this.context.router.history.push('/people'))
      .catch(err => console.log(err));
    }
  }

  render() {
    const { people } = this.state;

    if (!people) {
      return <div>Loading...</div>
    }

    return (
      <div className="container">
        <Link to="/people">Back to People List</Link>
        <Link to={`/people/${this._id}/update`} className="btn btn-info float-right">
          Update
        </Link>
        <button 
          className="btn btn-danger float-right"
          onClick={e => this.onDeleteClick()}
        >
          Delete People
        </button>
        <h3>Name: {people.name}</h3>
        <h6>Favorite City: {people.favoriteCity}</h6>
      </div>
    );
  }
}

export default PeopleShow;