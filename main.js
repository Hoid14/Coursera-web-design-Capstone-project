var app = document.getElementById('typewriter');


var typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
    .typeString('Say... Hello!!!')
    .pauseFor(200)
    .start();



    const saludoBtn = document.getElementById('saludoBtn');
    const gifContainer = document.getElementById('gifContainer');
    var boolean= false;
    let gifElement = null;

saludoBtn.addEventListener('click', function() {
  if (gifElement) {
    gifContainer.removeChild(gifElement);
    gifElement = null;
  } else {
    const gifUrl = 'https://media.tenor.com/DurVWqW9hpAAAAAi/hola-gatito.gif'; // Ruta del archivo GIF
    gifElement = document.createElement('img');
    gifElement.src = gifUrl;
    gifContainer.appendChild(gifElement);
  }
      
    });