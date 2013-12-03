'use strict';

/* Controllers */

angular.module('Manage.controllers', []).
    controller('AlbumsManage', ['$scope', 'Album', function($scope, Album) {
        Album.getAll(function(list){
            $scope.albumList = list;
        })
        $scope.remove = function($index, albumId){
            Album.delete(albumId, function(data){
            })
            $scope.albumList.splice($index, 1)
        }

        $scope.update = function($index, album, albumId){
            Album.put(albumId, album,function(data){
            })
            $scope.albumList[$index] = album
        }

//        $scope.view = {
//            editorEnabled: function($index){return false}
//        };
//
//        $scope.edit = function($index){
//            $scope.view.editorEnabled = true
//        };
//
//        $scope.cancelEditing = function($index){
//            $scope.view.editorEnabled = false
//        }

    }])
    .controller('PhotosManage', ['$scope', 'Photo', function($scope, Photo) {

    }]);