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

myApp.controller('DeliveryFormController', function ($scope) {
    var formNumber = 1;
    $scope.forms = [formNumber];

    $scope.addForm = function () {
        formNumber++;
        $scope.forms.push(formNumber);
    };
});

myApp.controller('EditCompanyFormController', function ($scope) {
    socialNetworkNumber = 0;
    $scope.forms = [];

    $scope.addSocialNetwork = function () {
        socialNetworkNumber++;
        $scope.forms.push(socialNetworkNumber);
    };
});