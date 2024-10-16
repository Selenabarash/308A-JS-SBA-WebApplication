//web
const BASE_URL = 'https://api.thecatapi.com/v1';

// Fetch all breeds from the Cat API
export async function getBreeds() {
  const response = await fetch(`${BASE_URL}/breeds`);
  if (!response.ok) {
    throw new Error('Failed to fetch cat breeds');
  }
  return response.json();
}

// fetching a random cat image
export async function getRandomCatImage() {
  const response = await fetch(`${BASE_URL}/images/search`);
  const data = await response.json();
  return data[0].url;
}
