var Iterator = (function () {
    function Iterator() {
        this.counter = 0;
    }
    Iterator.prototype.next = function () {
        this.counter++;
        return this.counter;
    };
    Iterator.prototype.hasNext = function () {
        if (this.counter < 10) {
            return true;
        }
        else {
            return false;
        }
    };
    ;
    return Iterator;
}());
