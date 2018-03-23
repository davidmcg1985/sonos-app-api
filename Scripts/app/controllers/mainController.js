angular.module('sonosApp', [])
    .controller('homeController', function ($scope, $http) {

        $http({
            method: 'GET',
            url: 'http://localhost:5005/studio%20403/state'
        }).then(function successCallback (response) {
            $scope.CurrentTrack = response.data.currentTrack;
            $scope.NextTrack = response.data.nextTrack;
            $scope.PlaybackState = response.data.playbackState;
            $scope.Mute = response.data.mute;
            $scope.Volume = response.data.volume;
            }, function errorCallback(response) {
            console.log(response);
            $scope.Offline = true;
        });

    });