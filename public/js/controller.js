app.controller('parkController', function ($scope, parkFactory) {
    /*function loadId() {
    var promise = parkFactory.getLastId();
    promise.then(function (data) {
        $scope.userObj.id = data.data;
        console.log('getting last id');
    }, function (err) {
        $scope.err = err;
        console.log('getting last id error');
    });
}*/
    $scope.clear = function () {
        $scope.userObj.name = '';
        $scope.userObj.carNo = '';
        $scope.userObj.mobileNo = '';
    }
    $scope.save = function () {
            $scope.userObj.date = new Date();
            var promise = parkFactory.submitToDB($scope.userObj);
            promise.then(function (data) {
                if (data.data.status == 'error') {
                    alert('ID should be unique and number!');
                    $scope.data = '';
                    document.getElementById("idInput").setAttribute('disabled', false);
                }
                else if (data.data.status == 'success') {
                    $scope.data = data.data.obj.message;
                    $scope.clear();
                    document.getElementById("nameInput").focus();
                    $scope.userObj.id = parseInt($scope.userObj.id) + 1;
                    document.getElementById("idInput").disabled = "true";
                }
            }, function (err) {
                $scope.err = err;
            });
            console.log($scope.userObj);
        }
        //loadId();
});
app.controller('parkController2', function ($scope, parkFactory) {
    $scope.searchIt = function () {
        var promise = parkFactory.searchFromDB($scope.option, $scope.searchTerm);
        promise.then(function (data) {
            if (data.data.status == 'error') {
                alert(data.data.obj.errmsg);
            }
            else if (data.data.status == 'success') {
                $scope.result = data.data.obj.data;
                console.log($scope.result);
            }
        }, function (err) {
            $scope.err = err;
        });
    }
});

function createTable() {
    var table = document.createElement('table');
    table.setAttribute("id", "resultTable");
    document.getElementById('result').appendChild(table);
    //create table here
}