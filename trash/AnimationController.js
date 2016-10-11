function AnimationController() {

    this.displayFrame = function(frameName) {
        document.getElementById('animation').src = "resources/" + frameName + '.jpg';
    };

    this.displayAnimation = function(startNodeName, destinationNodeName) {
        var link = animationModel.getLinkBy(startNodeName, destinationNodeName);
        var frameCounter = 0;

        var intervalListener = setInterval(function () {
            animationController.displayFrame(link[frameCounter]);
            frameCounter++;
            if(frameCounter == link.length) {
                clearInterval(intervalListener);
                widgetController.setCurrentNode(animationModel.getNodeBy(destinationNodeName));
                widgetController.displayCurrentNode();
            }
        }, 40);
    };
}