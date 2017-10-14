app.factory('parkFactory', function ($http, $q) {
    return {
        submitToDB: function (obj) {
            var pr = $q.defer();
            var url = '/savetodb';
            $http.post(url, obj).then(function (data) {
                pr.resolve(data);
            }, function (err) {
                pr.reject(err);
            });
            return pr.promise;
        }
        , getLastId: function () {
            var pr = $q.defer();
            var url = '/lastid';
            $http.get(url).then(function (data) {
                pr.resolve(data);
                console.log("resolve");
            }, function (err) {
                pr.reject(err);
                console.log("reject");
            });
            return pr.promise;
        }
        , searchFromDB: function (x, y) {
            var pr = $q.defer();
            var url = '/searchData?' + x + '=' + y;
            console.log(url);
            $http.get(url).then(function (data) {
                pr.resolve(data);
                console.log("resolve");
            }, function (err) {
                pr.reject(err);
                console.log("reject");
            });
            return pr.promise;
        }
    }
});