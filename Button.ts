class Button {

    tagId: string;
    onClickFunction;

    constructor(tagId: string, onClickFunction) {
        this.tagId = tagId;
        this.onClickFunction = onClickFunction;
    }

    display() {
        this.onClickFunction();
    }
}