const c = document.querySelectorAll('code');
for (const e of c) {
  if (e.parentElement.tagName != 'PRE') continue; 
  let v = Array.from(e.children).reduce((p, c) => p += c.innerText + '\n', '');
  let b = document.createElement('button');
  b.onclick = () => {
    window.navigator.clipboard.writeText(v);
    b.innerText = 'Copied';
  }
  b.className = 'copy';
  b.innerText = 'Copy';
  e.parentElement.appendChild(b);
}
