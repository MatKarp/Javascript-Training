class Iterator {

    counter = 0;

    next() {
        this.counter++;
        return this.counter;
    }

    hasNext() {
        if (this.counter < 33) {
            return true;
        } else {
            return false;
        }
    };
}