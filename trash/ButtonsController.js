function ButtonsController() {

    this.displayButtons = function (buttonNames) {
        var htmlButtons = this.createHtmlOnClickButtons(
            'widgetController',
            'displayFromCurrentNodeTo',
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
        return "<button class='test' onclick='#function'>#param</button>"
            .replace('#function', htmlFunction)
            .replace('#param', paramName);
    };

    this.createHtmlFunction = function(className, functionName, paramName) {
        return '#class.#function("#param")'
            .replace('#class', className)
            .replace('#function', functionName)
            .replace('#param', paramName);
    };
}