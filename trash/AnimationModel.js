function AnimationModel() {

    this.getStartNode = function () {
        return {
            getName: function () {
                return 'Living';
            },
            getFrameName: function () {
                return '1';
            },
            getButtonNames: function () {
                return ['Garage'];
            }
        };
    };

    this.getLinkBy = function (startNodeName, endNodeName) {
        if (startNodeName == 'Living' && endNodeName == 'Garage') {
            return this.generateNumbersInStringFormat(1, 32);
        }
        if (startNodeName == 'Garage' && endNodeName == 'Living') {
            return this.generateNumbersInStringFormat(32, 1);
        }
        return null;
    };

    this.getNodeBy = function (nodeName) {
        if (nodeName == 'Garage') {
            return {
                getName: function () {
                    return 'Garage';
                },
                getFrameName: function () {
                    return "32"
                },
                getButtonNames: function () {
                    return ['Living'];
                }
            }
        }
        if (nodeName == 'Living') {
            return {
                getName: function () {
                    return 'Living';
                },
                getFrameName: function () {
                    return "1"
                },
                getButtonNames: function () {
                    return ['Garage'];
                }
            }
        }
    };

    this.generateNumbersInStringFormat = function(start, end) {
        var numbers = [];
        if(start < end) {
            for(var i = start; i <= end; i++) {
                numbers.push(String(i));
            }
        } else{
            for(var i = start; i >= end; i--) {
                numbers.push(String(i));
            }
        }
        return numbers;
    }
}