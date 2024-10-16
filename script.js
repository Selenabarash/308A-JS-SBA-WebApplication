import { getBreeds, getRandomCatImage } from './api.js';

const breedSelect = document.getElementById('breedSelect');
const breedInfo = document.getElementById('breedInfo');
const catImage = document.getElementById('catImage');
const randomImageBtn = document.getElementById('randomImageBtn');

//  breed dropdown
async function populateBreeds() {
  try {
    const breeds = await getBreeds();
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  } catch (error) {
    console.error(error);
    breedInfo.textContent = 'Failed to load breeds.';
  }
}

// showew selected breed information
breedSelect.addEventListener('change', async () => {
  const breedId = breedSelect.value;
  if (!breedId) return;

  const breeds = await getBreeds();
  const selectedBreed = breeds.find(b => b.id === breedId);

  breedInfo.innerHTML = `
    <h2>${selectedBreed.name}</h2>
    <p>${selectedBreed.description}</p>
    <p><strong>Origin:</strong> ${selectedBreed.origin}</p>
    <p><strong>Temperament:</strong> ${selectedBreed.temperament}</p>
  `;
});

// Fetch and display a random cat image
randomImageBtn.addEventListener('click', async () => {
  try {
    const imageUrl = await getRandomCatImage();
    catImage.src = imageUrl;
  } catch (error) {
    console.error(error);
    catImage.alt = 'Failed to load image.';
  }
});

// Initialize the app
populateBreeds();
