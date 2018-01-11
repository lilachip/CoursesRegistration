var app = angular.module("app", []);

app.service("dataService", function ($http) {
    this.getData = function () {
        return $http.get("http://www.mocky.io/v2/5a563d0a2f00006e36beed34");
    };
});

app.controller("AngularJSCtrl", function ($scope, dataService) {
    $scope.data = null;
    $scope.coursesArray = [];
    $scope.coursesRegistrationList = [];

    dataService.getData().then(function (dataResponse) {
        $scope.data = dataResponse;
        $scope.coursesArray = dataResponse.data.courses;
    });

    var count = 0;
    $scope.Addcourse = function () {
        if ($scope.firstNameText == null || $scope.lastNameText == null || $scope.selectedCourse == null) {
            alert("Please fill out all the fields before submitting");
            return;
        }

        count++;
        $scope.coursesRegistrationList.push({
            id: count,
            student_firstName: $scope.firstNameText,
            student_lastName: $scope.lastNameText,
            course: $scope.selectedCourse
        });

        $scope.firstNameText = null;
        $scope.lastNameText = null;
        $scope.selectedCourse = null;
    };
});