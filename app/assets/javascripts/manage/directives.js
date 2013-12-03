'use strict';

/* Directives */


angular.module('Manage.directives', []).
    directive('clickToEdit', [function() {
        return {
            replace: true,
            controller: function($scope) {
                $scope.view = {
                    editorEnabled: false
                };

                $scope.enableEditor = function() {
                    $scope.view.editorEnabled = true;
                };

                $scope.disableEditor = function() {
                    $scope.view.editorEnabled = false;
                };

                $scope.save = function() {
                    $scope.value = $scope.view.editableValue;
                    $scope.disableEditor();
                };
            }
        };
    }]);