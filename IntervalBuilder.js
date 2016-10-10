///<reference path="Interval.ts"/>
var IntervalBuilder = (function () {
    function IntervalBuilder() {
    }
    IntervalBuilder.prototype.onRun = function (code) {
        this.tempOnRun = code;
        return this;
    };
    IntervalBuilder.prototype.onStop = function (code) {
        this.tempOnStop = code;
        return this;
    };
    IntervalBuilder.prototype.delay = function (number) {
        this.tempDelay = number;
        return this;
    };
    IntervalBuilder.prototype.build = function () {
        var interval = new Interval();
        interval.setOnRun(this.tempOnRun);
        interval.setOnStop(this.tempOnStop);
        interval.setDelay(this.tempDelay);
        return interval;
    };
    return IntervalBuilder;
}());
