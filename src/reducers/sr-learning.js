const initialState = {
    currQ: null,
    currA: null,
    currQId: '',
    currCorr: 0,
    currAtt: 0,
    currStatus: 'question'    // question, answerCorr, answerIncorr
};

export default function reducer(state = initialState, action) {
  if (action.type === 'POST_QUESTION') {
    return Object.assign({}, state, {
      currQ: action.question.uQuestion,
      currA: action.question.uAnswer,
      currStatus: 'question'
    })
  }
  
  else if (action.type === 'PROCESS_ANSWER') {
    let newStatus = '';
    let newCorr = state.currCorr;
    let newAtt = state.currAtt + 1;
    if(action.answer.toLowerCase() === state.currA.toLowerCase()) {
      newStatus = 'answerCorr';
      newCorr++;
    }
    else {
      newStatus = 'answerIncorr';
    }
    return Object.assign({}, state, {
      currCorr: newCorr,
      currAtt: newAtt,
      currStatus: newStatus
    })
  }

  else if (action.type === 'PROCESS_QUIT') {
    return Object.assign({}, state, {
      currQ: null,
      currA: null,
      currCorr: 0,
      currAtt: 0,
      currStatus: 'question'
    })
  }
    
    // default
    return state;
};
