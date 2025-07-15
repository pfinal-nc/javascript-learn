const wishBtn = document.getElementById('wishBtn');
const nameInput = document.getElementById('nameInput');
const wishMsg = document.getElementById('wishMsg');

const wishes = [
  '愿你前程似锦，岁岁常欢愉，年年皆胜意！',
  '愿你被世界温柔以待，心想事成，幸福美满！',
  '愿你健康快乐，笑口常开，梦想成真！',
  '愿你所遇皆良善，所求皆如愿，生日快乐！',
  '愿你眼里有光，心中有爱，永远年轻！',
  '愿你生活明朗，万事尽可期待！',
  '愿你一切美好如约而至，生日快乐！'
];

wishBtn.onclick = function() {
  const name = nameInput.value.trim();
  if (!name) {
    wishMsg.textContent = '请先输入你的名字哦~';
    wishMsg.style.color = '#ff6384';
    return;
  }
  const wish = wishes[Math.floor(Math.random() * wishes.length)];
  wishMsg.innerHTML = `<span style='color:#ffb347;'>${name}</span>，${wish}`;
  wishMsg.style.color = '#ff6384';
};

nameInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    wishBtn.click();
  }
});