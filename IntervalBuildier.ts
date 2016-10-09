///<reference path="Interval.ts"/>
class IntervalBuidier {
    tempDelay;
    tempOnStart;
    tempOnRun;
    tempOnStop;

    delay(number) {
        this.tempDelay = number;
        return this;
    }

    onStart(code) {
        this.tempOnStart = code;
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
        interval.setOnStart(this.tempOnStart);
        interval.setOnRun(this.tempOnRun);
        interval.setOnStop(this.tempOnStop);
        return interval;
    }
}