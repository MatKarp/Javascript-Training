class Interval {
    delay: number;
    onStart;
    onRun;
    onStop;

    run() {
        this.onStart();
        this.onRun();
        setTimeout(this.onStop, this.delay);
    }

    setDelay(number) {
        this.delay = number;
    }

    setOnStart(code) {
        this.onStart = code;
    }

    setOnRun(code) {
        this.onRun = code;
    }

    setOnStop(code) {
        this.onStop = code;
    }
}