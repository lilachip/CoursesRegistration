(function(angular) {
    'use strict';
var app = angular.module('app', []);
app.controller('appController', function ($scope) {
    $scope.courses = [{
        id: 1,
        student_firstName: "first student_firstName",
        student_lastName: "first student_lastName",
        course: "first course"
    },
        {
            id: 2,
            student_firstName: "second student_firstName",
        student_lastName: "second student_lastName",
        course: "second course"
        },
        {
            id: 3,
            student_firstName: "third student_firstName",
        student_lastName: "third student_lastName",
        course: "third course"
        },
        {
            id: 4,
            student_name: "fourth student_firstName",
        student_lastName: "fourth student_lastName",
        course: "fourth course"
        }
    ];
    $scope.newarray = [];
    $scope.sub = function ()
    {
        angular.forEach($scope.abc, function (value, key) {
            $scope.newarray.push({ id: value.id, name: value.name, sal: value.sal, mnth: value.mnth, total: parseInt(value.sal) * parseInt(value.mnth) });
        });
    }
    // $scope.Addcourse = function(course) {
    //     if (course) {
    //       var obj = {
    //         id: id,
    //         student_firstName:$scope.firstNameText,
    //         student_lastName:$scope.lastNameText,
    //         course: course
    //       };
    //    //   $scope.items.push($scope.input);
    //       $scope.courses.push(obj);
    //       this.id ='';
    //       this.firstNameText = '';
    //       this.lastNameText = '';
    //       this.course ='';
    //     }
    //     console.log($scope.courses);
    //   }
});
})(window.angular);