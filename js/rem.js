function onRem () {
  let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  let iw = (iOS) ? screen.width : window.innerWidth, ih = (iOS) ? screen.height : window.innerHeight;

  switch (true) {
    case (iw > 650):
      document.documentElement.style.fontSize = iw / 1920 + 'px'
      break
    case (iw < 650):
      document.documentElement.style.fontSize = iw / 320 + 'px'
      break
  }
}

window.addEventListener('resize', onRem)

onRem()
