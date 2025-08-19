import './components/components.js';

let clickCount = 0;
const basicBtn = document.getElementById('basicBtn');
basicBtn.addEventListener('click', () => {
  clickCount++;
  document.getElementById('clickCount').textContent = `You have clicked the button ${clickCount} time${clickCount > 1 ? 's' : ''}`;
});
