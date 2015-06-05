var myApp = angular.module('myApp', []);

myApp.controller('ContactFormController', function ($scope) {
    $scope.contactFormNumber = 1;
    $scope.contactForms = [$scope.contactFormNumber];

    $scope.addForm = function () {
        $scope.contactFormNumber++;
        $scope.contactForms.push($scope.contactFormNumber);
    };

    $scope.removeForm = function (formNumber) {
        var index = $scope.contactForms.indexOf(formNumber);
        $scope.contactForms.splice(index, 1);
    };
});