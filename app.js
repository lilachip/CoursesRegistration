
var app = angular.module("app", []);

app.service('dataService', function ($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    this.getData = function () {
        return $http({
            method: 'GET',
            url: 'http://www.mocky.io/v2/5a563d0a2f00006e36beed34',
            params: 'limit=10, sort_by=created:desc',
            headers: { 'Authorization': 'Token token=xxxxYYYYZzzz' }
        });
    }
});

app.controller('AngularJSCtrl', function ($scope, dataService) {
    $scope.data = null;
    $scope.coursesArray = [];
    $scope.coursesRegistrationList = [];
    dataService.getData().then(function (dataResponse) {
        $scope.data = dataResponse;
        $scope.coursesArray = dataResponse.data.courses;
        $scope.Addcourse = function () {
            if ($scope.firstNameText == null || $scope.lastNameText == null || $scope.selectedCourse == null) {
                alert("pls insert name and last name and the wanted course...");
                return;
            }
            var count = 0
            $scope.coursesRegistrationList.push({
                id: count + 1,
                student_firstName: $scope.firstNameText,
                student_lastName: $scope.lastNameText,
                course: $scope.selectedCourse
            });
            $scope.firstNameText = null;
            $scope.lastNameText = null;
            console.log($scope.coursesRegistrationList);
        };
        console.log($scope.coursesArray);
    });
});
