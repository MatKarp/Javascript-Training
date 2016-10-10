var Button = (function () {
    function Button(tagId, onClickFunction) {
        this.tagId = tagId;
        this.onClickFunction = onClickFunction;
    }
    Button.prototype.display = function () {
        this.onClickFunction();
    };
    return Button;
}());
