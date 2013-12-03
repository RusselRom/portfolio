angular.module('Manage.services', [])
    .factory('Album', ['$http', function($http){
        return{
            get: function(callback){
                $http.get('/api/v1/albums/:albumId.json').success(function(data) {
                    callback(data);
                });
            },
            getAll: function(callback){
                $http.get('/api/v1/albums.json').success(function(data) {
                    callback(data);
                });
            },
            post: function(callback){
                $http.get('/albums/:albumId.json').success(function(data) {
                    callback(data);
                });
            },
            put: function(albumId, album, callback){
                $http.put('/api/v1/albums/'+albumId+'.json',{album: album}).success(function(data) {
                    callback(data);
                });
            },
            delete: function(albumId, callback){
                $http.delete('/api/v1/albums/'+albumId+'.json').success(function(data) {
                    callback(data);
                });
            }
        };
    }]);