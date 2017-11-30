import {API_BASE_URL} from '../config';

export const postStats = stats => ({
  type: 'POST_STATS',
  stats
})

export const postQuestion = question => ({
  type: 'POST_QUESTION',
  question
})

export const processAnswer = ansCorr => ({
  type: 'PROCESS_ANSWER',
  ansCorr
})

export const processQuit = () => ({
  type: 'PROCESS_QUIT'
})

export const fetchStats = userId => dispatch => {
  return fetch(`${API_BASE_URL}/users/userstats/${userId}`)
    .then(res => {
      return res.json();
    })
    .then( stats => {
      console.log(stats);
      return dispatch(postStats(stats))
    })
}

export const fetchQuestion = userId => dispatch => {
  return fetch(`${API_BASE_URL}/users/userquestion/${userId}`)
    .then(res => {
      return res.json();
    })
    .then( question => {
      console.log(question);
      dispatch(postQuestion(question))
    })
}

export const sendQResult = (userId, ansCorr) => dispatch => {
  return fetch(`${API_BASE_URL}/users/userquestion/${userId}`, {
    method: 'PUT',
    body: JSON.stringify({
      qCorrect: ansCorr 
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText)
    }
    return
    //return res.json();
  })
}

