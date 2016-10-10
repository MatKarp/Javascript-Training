///<reference path="Interval.ts"/>
var IntervalBuidier = (function () {
    function IntervalBuidier() {
    }
    IntervalBuidier.prototype.delay = function (number) {
        this.tempDelay = number;
        return this;
    };
    IntervalBuidier.prototype.onRun = function (code) {
        this.tempOnRun = code;
        return this;
    };
    IntervalBuidier.prototype.onStop = function (code) {
        this.tempOnStop = code;
        return this;
    };
    IntervalBuidier.prototype.build = function () {
        var interval = new Interval();
        interval.setDelay(this.tempDelay);
        interval.setOnRun(this.tempOnRun);
        interval.setOnStop(this.tempOnStop);
        return interval;
    };
    return IntervalBuidier;
}());
