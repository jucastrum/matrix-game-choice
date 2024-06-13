function redirecionar(url) {
  window.location.href = url;
}

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5
});

document.querySelector('.card1').addEventListener('click', function() {
  redirecionar('blue-pill.html');
});

document.querySelector('.card2').addEventListener('click', function() {
  redirecionar('https://youtu.be/Z9oRFDpUDSk?si=whI27QJ_fXJzTUPz');
});
