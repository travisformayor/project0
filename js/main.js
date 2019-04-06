function distortImage() {
  let pic = Math.round(Math.random())+1;
  $('#me').attr('src',`img/m${pic}.png`);
}
function fixImage() {
  // m3 on page load, bring it to m2
  $('#me').attr('src',`img/m2.png`);
  setInterval(distortImage, 1000); // cycle m2 and m1
}
setTimeout(fixImage, 1500); // wait with m3 on page load


