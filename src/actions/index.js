const ROOT_URL = 'https://mysterious-island-57570.herokuapp.com/api/people';
const HEADER = { Accept: 'application/json',
                'Content-Type': 'application/json'};

export function fetchPeopleList() {
  return fetch(ROOT_URL, {
            method: 'get',
            headers: HEADER
          });
}

export function createPeople(name, favoriteCity) {
  return fetch(ROOT_URL, {
        method: 'post',
        headers: HEADER,
        body: JSON.stringify({
          name: name,
          favoriteCity: favoriteCity,
        })
      });
}

export function fetchPeople(id) {
  const URL = ROOT_URL + "/" + id;
  return fetch(URL, {
            method: 'get',
            headers: HEADER
          });
}

export function deletePeople(id) {
  const URL = ROOT_URL + "/" + id;
  return fetch(URL, {
            method: 'delete',
            headers: HEADER
          });
}

export function updatePeople(id, favoriteCity) {
  return fetch(ROOT_URL, {
            method: 'put',
            headers: HEADER,
            body: JSON.stringify({
              _id: id,
              favoriteCity: favoriteCity,
            })
          });
}