var Iterator = (function () {
    function Iterator() {
        this.counter = 1;
    }
    Iterator.prototype.next = function () {
        this.counter++;
        return this.counter;
    };
    Iterator.prototype.hasNext = function () {
        if (this.counter < 33) {
            return true;
        }
        else {
            return false;
        }
    };
    ;
    return Iterator;
}());
