fetch("https://catfact.ninja/fact")
  .then(res => res.json())
  .then(data => document.getElementById("fact").innerText = data.fact);
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playNote(frequency) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    gainNode.gain.setValueAtTime(1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
    oscillator.stop(audioContext.currentTime + 0.5);
}

const pianoKeys = document.querySelectorAll('.key');

pianoKeys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        const frequency = getFrequency(note);
        playNote(frequency);
    });
});

function getFrequency(note) {
    const frequencies = {
        'C3': 130.81,
        'C#3': 138.59,
        'D3': 146.83,
        'D#3': 155.56,
        'E3': 164.81,
        'F3': 174.61,
        'F#3': 185.00,
        'G3': 196.00,
        'G#3': 207.65,
        'A3': 220.00,
        'A#3': 233.08,
        'B3': 246.94,
        'C4': 261.63,
        'C#4': 277.18,
        'D4': 293.66,
        'D#4': 311.13,
        'E4': 329.63,
        'F4': 349.23,
        'F#4': 369.99,
        'G4': 392.00,
        'G#4': 415.30,
        'A4': 440.00,
        'A#4': 466.16,
        'B4': 493.88,
        'C5': 523.25
    };
    return frequencies[note];
}