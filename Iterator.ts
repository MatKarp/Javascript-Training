class Iterator {

    counter = 1;

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