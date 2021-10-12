// function onRem () {
//   let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
//   let iw = (iOS) ? screen.width : window.innerWidth, ih = (iOS) ? screen.height : window.innerHeight;
//
//   switch (true) {
//     case (iw > 650):
//       document.documentElement.style.fontSize = iw / 1920 + 'px';
//       console.log(iw)
//       break;
//     case (iw <= 650):
//       document.documentElement.style.fontSize = iw / 320 + 'px';
//       break;
//   }
// }


function onRem() {
  let width = document.documentElement.clientWidth;
  switch (true) {
    case (width > 650):
      document.documentElement.style.fontSize = width / 1920 + 'px';
      console.log(width);
      break;
    case (width <= 650):
      document.documentElement.style.fontSize = width / 320 + 'px';
      break;
  }
}

window.addEventListener('resize', onRem);
window.addEventListener("orientationchange", onRem);
onRem()
