// API key: 6c5b667fc5174566970702ed907d02cc
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

function createSpeech(joke) {
  return VoiceRSS.speech({
    key: '6c5b667fc5174566970702ed907d02cc',
    src: joke,
    hl: 'en-us',
    r: 0,
    c: 'mp3',
    f: '44khz_16bits_stereo',
    ssml: false
  });
}

// Disable-enable button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Get Jokes from API
async function getJokes() {
  const apiUrl = 'http://api.icndb.com/jokes/random';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const joke = data.value.joke;
    createSpeech(joke)
    
  } catch (error) {
    console.log('La has cagado... '+error)
  }
}

button.addEventListener('click', () => {
  getJokes()
  toggleButton()
 
})

audioElement.addEventListener('ended', toggleButton)


