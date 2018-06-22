angular.module('sonosApp', [])
    .controller('homeController', function ($scope, $http) {

        function doPoll() {

            //403
            $http({
                method: 'GET',
                url: 'http://192.168.1.125:5005/studio%20403/state'
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
                url: 'http://192.168.1.125:5005/studio%20404/state'
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

            ////403 Queue
            $http({
                method: 'GET',
                url: 'http://192.168.1.125:5005/studio%20403/queue/10'
            }).then(function successCallback(response) {
                $scope.Queue = response.data;
            }, function errorCallback(response) {
                console.log(response);
                $scope.Offline = true;
            });

            setTimeout(doPoll, 5000);

            //var now = new Date();
            //var hour = now.getHours();
            //var minutes = now.getMinutes();

            //if (hour == 16 && minutes == 48) {

            //    if ($scope.CurrentTrack403.artist == "Oasis") {
            //        console.log("already playing " + $scope.CurrentTrack403.artist);
            //    }

            //};

        }

        //function playOasis() {
            //console.log("now playing oasis");

            //supersonic - spotify:track:1ZAWaJppxtA3zPh1R2W2wS
            //spotify:track:726Bm6HoMMOwrJlxqbfO45
            //spotify:track:0Uk0BWIMooZTyACeU16T9t
            //spotify:track:4ETiD213qgNHNYKfZRLlsH

            //var id = '4ETiD213qgNHNYKfZRLlsH';

            //$http({
            //    method: 'GET',
            //    url: 'http://localhost:5005/studio%20403/spotify/now/spotify:track:' + id
            //}).then(function successCallback(response) {
            //    console.log(response);
            //}, function errorCallback(response) {
            //    console.log(response);
            //    $scope.Offline = true;
            //});
        //}

        //$scope.showQueue = function() {

        //    $http({
        //        method: 'GET',
        //        url: 'http://192.168.1.125:5005/studio%20403/queue'
        //    }).then(function successCallback(response) {
        //        $scope.Queue = response.data;
        //    }, function errorCallback(response) {
        //        console.log(response);
        //        $scope.Offline = true;
        //    });

        //}

        doPoll();

    });