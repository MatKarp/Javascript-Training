class Animation {
    private onStop: () => void;
    private iterator = new Iterator();
    private intervalBuilder = Interval.buildier();

    play() {
        if (this.hasNextFrame()) {
            this.playNextFrame();
        } else {
            this.onStop();
        }
    }

    setOnStop(code) {
        this.onStop = code;
    }

    private playNextFrame() {
        var number = this.nextFrame();
        this.intervalBuilder
            .onRun(() => document.getElementById("animation").setAttribute("src", "resources/" + number + ".jpg"))
            .onStop(() => {this.play()})
            .delay(40)
            .build()
            .run();
    }

    private hasNextFrame() {
        return this.iterator.hasNext();
    }

    private nextFrame() {
        return this.iterator.next();
    }
}

