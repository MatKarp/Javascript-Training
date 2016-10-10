var Interval = (function () {
    function Interval() {
    }
    Interval.prototype.run = function () {
        this.onRun();
        this.timeout = setTimeout(this.onStop, this.delay);
    };
    Interval.prototype.setDelay = function (number) {
        this.delay = number;
    };
    Interval.prototype.setOnRun = function (code) {
        this.onRun = code;
    };
    Interval.prototype.setOnStop = function (code) {
        this.onStop = code;
    };
    return Interval;
}());
