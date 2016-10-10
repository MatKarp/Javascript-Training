class Interval {
    private delay: number;
    private onRun;
    private onStop;
    private timeout;

    run() {
        this.onRun();
        this.timeout = setTimeout(this.onStop, this.delay);
    }

    setDelay(number) {
        this.delay = number;
    }

    setOnRun(code) {
        this.onRun = code;
    }

    setOnStop(code) {
        this.onStop = code;
    }
}