import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';


class PeopleNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor() {
    super();

    this.state = {
      name: "",
      favoriteCity: "New York"
    } 
  }

  onNameChange(name) {
    this.setState({name});
  }

  onCityChange(favoriteCity) {
    this.setState({favoriteCity});
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { name, favoriteCity } = this.state;
    fetch('https://mysterious-island-57570.herokuapp.com/api/people', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        favoriteCity: favoriteCity,
      })
    })
    .then(res => res.json())
    .then(data => this.context.router.history.push('/people/'+data._id))
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="container">
        <form onSubmit={e => this.onFormSubmit(e)}>
          <div className="form-group">
            <label>Name: </label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter name" 
              onChange={e => this.onNameChange(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Favorite City Select: </label>
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
          <Link to="/people">Back to People List</Link>
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

export default PeopleNew;