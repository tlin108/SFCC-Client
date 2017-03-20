import React, { Component, PropTypes  } from 'react';
import { Link } from 'react-router-dom';

class PeopleShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    
    this.state = {
      people:{
        name: "",
        favoriteCity: ""
      }
    };
  }

  onCityChange(favoriteCity) {
    this.setState({
      people:{favoriteCity}
    });
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
    fetch('https://mysterious-island-57570.herokuapp.com/api/people/' + this.props.match.params.id, {
      method: 'delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(()=> this.context.router.history.push('/people'))
    .catch(err => console.log(err));
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { favoriteCity } = this.state.people;
    const _id = this.props.match.params.id;
    fetch('https://mysterious-island-57570.herokuapp.com/api/people', {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: _id,
        favoriteCity: favoriteCity,
      })
    })
    .then(() => this.context.router.history.push('/people/'))
    .catch(err => console.log(err));
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

        <hr />

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

export default PeopleShow;