const initialState = {
    currQ: null,
    currA: null,
    qhistCorr: 0,
    qhistAtt: 0,
    currCorr: 0,
    currAtt: 0,
    lifeCorr: 0,
    liftAtt: 0,
    currStatus: 'question'    // question, answerCorr, answerIncorr
};

export default function reducer(state = initialState, action) {
  if (action.type === 'POST_STATS') {
    console.log('post stats ', state.currCorr, state.currAtt);
    return Object.assign({}, state, {
      lifeCorr: action.stats.hCorr,
      lifeAtt: action.stats.hAtt
    })
  }

  else if (action.type === 'POST_QUESTION') {
    console.log('post q ', state.currCorr, state.currAtt);
    return Object.assign({}, state, {
      qhistCorr: action.question.qhistCorr,
      qhistAtt: action.question.qhistAtt,
      currQ: action.question.uQuestion,
      currA: action.question.uAnswer,
      currStatus: 'question',
    })
  }
  
  else if (action.type === 'PROCESS_ANSWER') {
    console.log('pre process a ', state.currCorr, state.currAtt);
    let newStatus = '';
    let newCorr = state.currCorr;
    let newhCorr = state.lifeCorr;
    let newqCorr = state.qhistCorr;
    const newAtt = state.currAtt + 1;
    const newhAtt = state.lifeAtt + 1;
    const newqAtt = state.qhistAtt + 1;
    if(action.ansCorr) {
      newStatus = 'answerCorr';
      newCorr++;
      newhCorr++;
      newqCorr++;
    }
    else {
      newStatus = 'answerIncorr';
    }
    return Object.assign({}, state, {
      currCorr: newCorr,
      currAtt: newAtt,
      lifeCorr: newhCorr,
      lifeAtt: newhAtt,
      qhistCorr: newqCorr,
      qhistAtt: newqAtt,
      currStatus: newStatus
    })
  }

  else if (action.type === 'PROCESS_QUIT') {
    return Object.assign({}, state, {
      currQ: null,
      currA: null,
      currCorr: 0,
      currAtt: 0,
      lifeCorr: 0,
      lifeAtt: 0,
      qhistCorr: 0,
      qhistAtt: 0,
      currStatus: 'question'
    })
  }
    
    // default
    return state;
};
