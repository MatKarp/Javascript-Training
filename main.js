///<reference path="Animation.ts"/>
var animation = new Animation();
this.animation.setOnStop(function () {
    console.log('koniec');
});
animation.run();
