var counter = 1;
var intervalTimer;
var intervalValue;
var filePath = "Training/resources/"

var intervalFunction = function () {
    var fileName = counter + ".jpg";
    document.getElementById("pikachu").src = filePath + fileName;
    counter++;
    if (counter > 8) {
        counter = 1;
    }
};

function setIntervalValue() {
    intervalValue = document.getElementById("intervalInput").value;
    clearInterval(intervalTimer);
    intervalTimer = setInterval(intervalFunction, intervalValue);
}
