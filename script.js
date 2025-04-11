var scale = 1;

function zoomIn() {
  scale += 0.1;
  document.getElementById('artwork').style.transform = 'scale(' + scale + ')';
}

function zoomOut() {
  if (scale > 0.1) {
    scale -= 0.1;
    document.getElementById('artwork').style.transform = 'scale(' + scale + ')';
  }
}

function resetZoom() {
  scale = 1;
  document.getElementById('artwork').style.transform = 'scale(' + scale + ')';
}
