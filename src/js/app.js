var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Will Royero')
    .pauseFor(2500)
    .deleteAll()
    .start();