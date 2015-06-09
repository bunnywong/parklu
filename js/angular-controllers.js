var myApp = angular.module('myApp', []);

function isValidPassword(password) {
  var reChar = /[A-Z]/;
  var reDigit = /\d/;
  return reChar.test(password) && reDigit.test(password);
};

var isEmail = function (email) {
  var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
  return re.test(email);
};

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

myApp.controller('EmailFormController', function ($scope) {
    $scope.isValidEmail = true;
    $scope.isValidNewEmail = true;
    $scope.isValidPassword = true;

    $scope.checkEmail = function (email) {
        return isEmail(email);
    };

    $scope.checkPassword = function (password) {
        return isValidPassword(password);
    };
});

myApp.controller('PasswordFormController', function ($scope) {
    $scope.isValidPassword = true;
    $scope.isValidNewPassword = true;
    $scope.isValidNewPasswordRepeat = true;

    $scope.checkPassword = function (password) {
        return isValidPassword(password);
    };

    $scope.checkRepeatPassword = function () {
        return $scope.newPassword == $scope.newPasswordRepeat;
    };
});