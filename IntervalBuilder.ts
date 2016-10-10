///<reference path="Interval.ts"/>

class IntervalBuilder {
    private tempOnRun;
    private tempOnStop;
    private tempDelay;

    onRun(code) {
        this.tempOnRun = code;
        return this;
    }

    onStop(code) {
        this.tempOnStop = code;
        return this;
    }

    delay(number) {
        this.tempDelay = number;
        return this;
    }

    build() {
        let interval = new Interval();
        interval.setOnRun(this.tempOnRun);
        interval.setOnStop(this.tempOnStop);
        interval.setDelay(this.tempDelay);
        return interval;
    }
}