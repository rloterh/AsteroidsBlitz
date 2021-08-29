import { getScores, setScore } from '../js/api/api';

require('jest-fetch-mock').enableMocks();

const response = {
  result: [
    {
      user: 'Ted',
      score: 140,
    },
    {
      user: 'Fred',
      score: 740,
    },
    {
      user: 'Seth',
      score: 480,
    },
  ],
};

describe('Getscores ', () => {
  it('Returns an array of objects', () => {
    fetch.mockResponse(response);
    async () => {
      const result = await getScores();
      return expect(result).toEqual(response.result);
    };
  });
});

describe('setScore', () => {
  it('Sends user data to the server', () => {
    fetch.mockResponse();
    async () => {
      const player = {
        user: 'Ken',
        score: 920,
      };
      const response = await setScore(player.user, player.score);
      return expect(response.result).toEqual('Leaderboard score updated successfully');
    };
  });
});
