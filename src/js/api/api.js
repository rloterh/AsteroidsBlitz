const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'Zl4d7IVkemOTTVn2fR4z';

export const getScores = async () => {
  try {
    const res = await fetch(`${baseUrl}games/${gameId}/scores`);
    const result = await res.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const setScore = async (body) => {
  try {
    const res = await fetch(`${baseUrl}games/${gameId}/scores`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    return error;
  }
};