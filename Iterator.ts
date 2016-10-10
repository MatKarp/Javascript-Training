class Iterator {

    counter = 0;

    next() {
        this.counter++;
        return this.counter;
    }

    hasNext () {
        if(this.counter < 10) {
            return true;
        } else {
            return false;
        }
    };


}