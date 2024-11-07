const btnInput = document.getElementById('btn-input');
const textInput = document.getElementById('text-input');
const textOutput = document.getElementById('text-result');
const textCopied = document.getElementById('text-copied');
const btnCopy = document.getElementById('btn-copy');

const convertText = () => {
  textOutput.value = textInput.value.split(' ').map(word => `🅱️${word.substring(1)}`).join(' ');
  textOutput.focus();
  textOutput.select();
};

textInput.focus();
textInput.select();
textOutput.value = textInput.value.split(' ').map(word => `🅱️${word.substring(1)}`).join(' ');

textOutput.addEventListener('click', () => textOutput.select())
btnInput.addEventListener('click', () => convertText());
textInput.addEventListener('keypress', (e) => {
  if (e.key !== 'Enter') return;
  e.preventDefault();
  convertText();
});

btnCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(textOutput.value.trim());
  textCopied.classList.remove('hidden');
});