angular.module('sonosApp', [])
    .controller('homeController', function ($scope, $http) {

        function doPoll() {

            //403
            $http({
                method: 'GET',
                url: 'http://localhost:5005/studio%20403/state'
            }).then(function successCallback(response) {
                $scope.CurrentTrack403 = response.data.currentTrack;
                $scope.NextTrack403 = response.data.nextTrack; // TODO: handle no next track
                $scope.PlaybackState403 = response.data.playbackState;
                $scope.Mute403 = response.data.mute;
                $scope.Volume403 = response.data.volume;
            }, function errorCallback(response) {
                console.log(response);
                $scope.Offline = true;
            });

            //404
            $http({
                method: 'GET',
                url: 'http://localhost:5005/studio%20404/state'
            }).then(function successCallback(response) {
                $scope.CurrentTrack404 = response.data.currentTrack;
                $scope.NextTrack404 = response.data.nextTrack; // TODO: handle no next track
                $scope.PlaybackState404 = response.data.playbackState;
                $scope.Mute404 = response.data.mute;
                $scope.Volume404 = response.data.volume;
            }, function errorCallback(response) {
                console.log(response);
                $scope.Offline = true;
            });

            //403 Queue
            $http({
                method: 'GET',
                url: 'http://localhost:5005/studio%20403/queue'
            }).then(function successCallback(response) {
                $scope.Queue = response.data;
            }, function errorCallback(response) {
                console.log(response);
                $scope.Offline = true;
            });

            setTimeout(doPoll, 5000);

        }

        //$scope.showQueue = function() {

        //    $http({
        //        method: 'GET',
        //        url: 'http://localhost:5005/studio%20403/queue'
        //    }).then(function successCallback(response) {
        //        $scope.Queue = response.data;
        //    }, function errorCallback(response) {
        //        console.log(response);
        //        $scope.Offline = true;
        //    });

        //}

        //$scope.SaySpeech = function (text) {

        //    $http.post('http://localhost:5005/studio%20403/say/' + text).then(successCallback, errorCallback);

        //    function successCallback(response) {
        //        console.log(response);
        //    }

        //    function errorCallback(response) {
        //        console.log(response);
        //    }

        //};

        doPoll();

    });