var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('William Royero')
    .pauseFor(2500)
    .deleteAll()
    .start();