class Button {

    private tagId: string;
    private onClickFunction;

    constructor(tagId: string, onClickFunction) {
        this.tagId = tagId;
        this.onClickFunction = onClickFunction;
    }

    display() {
        this.onClickFunction();
    }
}