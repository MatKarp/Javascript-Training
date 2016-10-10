///<reference path="Iterator.ts"/>
///<reference path="IntervalBuildier.ts"/>

class Animation {

    private onStop;
    private iterator = new Iterator();
    private intervalBuildier = new IntervalBuidier();

    run() {
        if (this.iterator.hasNext()) {
            var number = this.iterator.next();
            this.intervalBuildier
                .delay(500)
                .onRun(() => {
                    console.log(number)
                })
                .onStop(() => {
                    this.run();
                })
                .build()
                .run();
        } else {
            this.onStop();
        }
    }

    setOnStop(code) {
        this.onStop = code;
    }
}

