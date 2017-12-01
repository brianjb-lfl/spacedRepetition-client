import {
  postStats,
  postQuestion,
  processAnswer,
  processQuit,
} from './sr-learning';

describe('postStats', () => {
  it('Should return the action', () => {
    const stats = {hCorr: 0, hAtt: 0};
    const action = postStats(stats);
    expect(action.type).toEqual('POST_STATS');
    expect(action.stats).toEqual(stats);
  });
});

describe('postQuestion', () => {
  it('Should return the action', () => {
    const question = {
      qhistCorr: 0,
      qhistAtt: 0,
      uQuestion: 'question',
      uAnswer: 'answer'
    };
    const action = postQuestion(question);
    expect(action.type).toEqual('POST_QUESTION');
    expect(action.question).toEqual(question);
  });
});

describe('processAnswer', () => {
  it('Should return the action', () => {
    const ansCorr = true;
    const action = processAnswer(ansCorr);
    expect(action.type).toEqual('PROCESS_ANSWER');
    expect(action.ansCorr).toEqual(ansCorr);
  });
});

describe('processQuit', () => {
  it('Should return the action', () => {
    const action = processQuit();
    expect(action.type).toEqual('PROCESS_QUIT');
  });
});