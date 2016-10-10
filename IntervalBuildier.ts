///<reference path="Interval.ts"/>

class IntervalBuidier {
    private tempDelay;
    private tempOnRun;
    private tempOnStop;

    delay(number) {
        this.tempDelay = number;
        return this;
    }

    onRun(code) {
        this.tempOnRun = code;
        return this;
    }

    onStop(code) {
        this.tempOnStop = code;
        return this;
    }

    build() {
        let interval = new Interval();
        interval.setDelay(this.tempDelay);
        interval.setOnRun(this.tempOnRun);
        interval.setOnStop(this.tempOnStop);
        return interval;
    }
}