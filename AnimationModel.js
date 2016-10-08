function AnimationModel() {

    this.getStartNode = function () {
        return {
            getName: function () {
                return 'Living';
            },
            getFrameName: function () {
                return '1.jpg';
            },
            getButtonNames: function () {
                return ['Garage'];
            }
        };
    };

    this.getLinkBy = function (startNodeName, endNodeName) {
        if (startNodeName == 'Living' && endNodeName == 'Garage') {
            return ['2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];
        }
        if (startNodeName == 'Garage' && endNodeName == 'Living') {
            return ['7.jpg', '6.jpg', '5.jpg', '4.jpg', '3.jpg', '2.jpg'];
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
                    return "8.jpg"
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
                    return "1.jpg"
                },
                getButtonNames: function () {
                    return ['Garage'];
                }
            }
        }
    };
}