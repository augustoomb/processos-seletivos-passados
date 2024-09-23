/* eslint-disable no-unused-vars */
import axios from 'axios';

const reqApiSports = async (endpoint, token) => {
  try {
    const response = await axios({
      method: 'GET',
      mode: 'no-cors',
      url: endpoint,
      headers: {
        'x-rapidapi-key': token,
        'x-rapidapi-host': 'v3.football.api-sports.io',
      },
    });
    return (response);
  } catch (error) {
    return ({ error });
  }
};

const reqApiSportsMock = async (endpoint, _token) => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoint,
    });
    return (response);
  } catch (error) {
    return ({ error });
  }
};

export { reqApiSports, reqApiSportsMock };
