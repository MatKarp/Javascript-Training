function WidgetController() {
    this.currentNode = null;

    this.init = function () {
        this.setCurrentNode(animationModel.getStartNode());
        this.displayCurrentNode();
    };

    this.displayCurrentNode = function() {
        this.displayNode(this.currentNode);
    };

    this.displayNode = function(node) {
        animationController.displayFrame(node.getFrameName());
        buttonsController.displayButtons(node.getButtonNames());
    };

    this.displayFromCurrentNodeTo = function (destinationNodeName) {
        buttonsController.hideButtons();
        animationController.displayAnimation(this.getCurrentNodeName(), destinationNodeName)
    };

    this.setCurrentNode = function(currentNode) {
        this.currentNode = currentNode;
    };

    this.getCurrentNodeName = function() {
        return this.currentNode.getName();
    };
}