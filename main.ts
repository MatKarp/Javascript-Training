///<reference path="Animation.ts"/>

var animation = new Animation();

this.animation.setOnStop(() => {
    console.log('koniec');
});

animation.run();


