// var animationModel = new AnimationModel();
// var buttonsController = new ButtonsController();
// var animationController = new AnimationController();
// var widgetController = new WidgetController();

var start = function () {
    console.log('start');
};

var run = function () {
    console.log('run');
};

var stop = function () {
    console.log('stop');
};

var intervalBuildier = new IntervalBuidier();

var interval = intervalBuildier
    .onStart(start)
    .onRun(run)
    .onStop(stop)
    .build();

interval.run();


