function AnimationManager() {
    this.currentNode = null;


    this.init = function () {
        this.currentNode = animationModel.getStartNode();
        this.displayCurrentNode(this.currentNode);
    };

    this.displayCurrentNode = function() {
        this.displayFrame(this.currentNode.getFrameName());
        this.displayButtons(this.currentNode.getButtonNames());
    };

    this.displayAnimationTo = function (destinationNodeName) {
        var currentNodeName = this.currentNode.getName();
        var link = animationModel.getLinkBy(currentNodeName, destinationNodeName);
        var frameCounter = 0;

        var frameInterval = setInterval(function () {
            animationManager.hideButtons();
            animationManager.displayFrame(link[frameCounter]);
            frameCounter++;
            if(frameCounter > link.length) {
                clearInterval(frameInterval);
                animationManager.currentNode = animationModel.getNodeBy(destinationNodeName);
                animationManager.displayCurrentNode();
            }
        }, 100);
    };

    this.displayFrame = function(frameName) {
        document.getElementById('animation').src = "resources/" + frameName;
    };

    this.displayButtons = function (buttonNames) {
        var htmlButtons = this.createHtmlOnClickButtons(
            'animationManager',
            'displayAnimationTo',
            buttonNames
        );
        document.getElementById('buttons').innerHTML = htmlButtons;
    };

    this.hideButtons = function () {
        document.getElementById('buttons').innerHTML = '';
    };

    this.createHtmlOnClickButtons = function(className, functionName, buttonNames) {
        var htmlButtons = '';
        for(var i = 0; i < buttonNames.length; i++) {
            htmlButtons += this.createHtmlOnClickButton(
                className,
                functionName,
                buttonNames[i]);
        }
        return htmlButtons;
    };

    this.createHtmlOnClickButton = function (className, functionName, paramName) {
        var htmlFunction = this.createHtmlFunction(className, functionName, paramName);
        return "<button onclick='#function'>#param</button>"
            .replace('#function', htmlFunction)
            .replace('#param', paramName);
    };

    this.createHtmlFunction = function(objectName, functionName, paramName) {
        return '#object.#function(#param)'
            .replace('#object', objectName)
            .replace('#function', functionName)
            .replace('#param', '\"' + paramName + '\"');
    };

}


