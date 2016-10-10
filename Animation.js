///<reference path="Iterator.ts"/>
///<reference path="IntervalBuildier.ts"/>
var Animation = (function () {
    function Animation() {
        this.iterator = new Iterator();
        this.intervalBuildier = new IntervalBuidier();
    }
    Animation.prototype.run = function () {
        var _this = this;
        if (this.iterator.hasNext()) {
            var number = this.iterator.next();
            this.intervalBuildier
                .delay(500)
                .onRun(function () {
                console.log(number);
            })
                .onStop(function () {
                _this.run();
            })
                .build()
                .run();
        }
        else {
            this.onStop();
        }
    };
    Animation.prototype.setOnStop = function (code) {
        this.onStop = code;
    };
    return Animation;
}());
