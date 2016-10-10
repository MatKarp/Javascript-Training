///<reference path="Animation.ts"/>

var animation = new Animation();

this.animation.setOnStop(() => {
    document.getElementById('text').setAttribute('value', 'Koniec');
});

animation.play();


