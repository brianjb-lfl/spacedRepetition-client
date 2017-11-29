import {API_BASE_URL} from '../config';

export const postQuestion = question => ({
  type: 'POST_QUESTION',
  question
})

export const processAnswer = answer => ({
  type: 'PROCESS_ANSWER',
  answer
})

export const processQuit = () => ({
  type: 'PROCESS_QUIT'
})

export const fetchQuestion = userId => dispatch => {
  return fetch(`${API_BASE_URL}/users/userquestion/${userId}`)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then( question => {
      dispatch(postQuestion(question))
    })
}

