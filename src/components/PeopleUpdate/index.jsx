import React, { Component, PropTypes  } from 'react';
import { Link } from 'react-router-dom';

import { fetchPeople, updatePeople } from '../../actions/index';

class PeopleUpdate extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    
    this.state = {};
    this._id = this.props.match.params.id;
  }

  onCityChange(favoriteCity) {
    this.setState({
      people:{favoriteCity}
    });
  }

  componentWillMount() {
    fetchPeople(this._id)
    .then(res => res.json())
    .then(data => this.setState({people: data}))
    .catch(err => console.log(err));
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { favoriteCity } = this.state.people;

    updatePeople(this._id, favoriteCity)
    .then(() => this.context.router.history.push('/people/' + this._id))
    .catch(err => console.log(err));
  }

  render() {
    const { people } = this.state;

    if (!people) {
      return <div>Loading...</div>
    }

    return (
      <div className="container">
        <h2>Type below to update</h2>
        <form onSubmit={e => this.onFormSubmit(e)}>
          <div className="form-group">
            <label>Favorite City Select: {people.favoriteCity}</label>
            <select 
              className="form-control"
              onChange={e => this.onCityChange(e.target.value)}
            >
              <option value="New York">New York</option>
              <option value="Brookyln">Brooklyn</option>
              <option value="Queen">Queen</option>
              <option value="Bronx">Bronx</option>
              <option value="Staten Island">Staten Island</option>
            </select>
          </div>
          <Link to={`/people/${this._id}`}>Go back</Link>
          <button 
            type="submit" 
            className="btn btn-primary float-right" >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PeopleUpdate;