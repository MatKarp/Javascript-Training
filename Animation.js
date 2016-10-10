///<reference path="Iterator.ts"/>
///<reference path="IntervalBuilder.ts"/>
var Animation = (function () {
    function Animation() {
        this.iterator = new Iterator();
        this.intervalBuilder = new IntervalBuilder();
    }
    Animation.prototype.play = function () {
        if (this.hasNextFrame()) {
            this.playNextFrame();
        }
        else {
            this.onStop();
        }
    };
    Animation.prototype.setOnStop = function (code) {
        this.onStop = code;
    };
    Animation.prototype.playNextFrame = function () {
        var _this = this;
        var number = this.nextFrame();
        this.intervalBuilder
            .onRun(function () {
            document.getElementById("animation").setAttribute("src", "resources/" + number + ".jpg");
        })
            .onStop(function () {
            _this.play();
        })
            .delay(40)
            .build()
            .run();
    };
    Animation.prototype.hasNextFrame = function () {
        return this.iterator.hasNext();
    };
    Animation.prototype.nextFrame = function () {
        return this.iterator.next();
    };
    return Animation;
}());
