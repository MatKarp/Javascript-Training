var Interval = (function () {
    function Interval() {
    }
    Interval.prototype.run = function () {
        this.onStart();
        this.onRun();
        setTimeout(this.onStop, this.delay);
    };
    Interval.prototype.setDelay = function (number) {
        this.delay = number;
    };
    Interval.prototype.setOnStart = function (code) {
        this.onStart = code;
    };
    Interval.prototype.setOnRun = function (code) {
        this.onRun = code;
    };
    Interval.prototype.setOnStop = function (code) {
        this.onStop = code;
    };
    return Interval;
}());
