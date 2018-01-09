(function (angular) {
    'use strict';
    var app = angular.module('app', []);
    app.controller('appController', ["$scope", function ($scope) {
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
            student_firstName: "fourth student_firstName",
            student_lastName: "fourth student_lastName",
            course: "fourth course"
        }
        ];    
      console.log($scope.courses);
      var count = $scope.courses.length;
      console.log(count);
      $scope.Addcourse = function(){ 
          if($scope.firstNameText == null || $scope.lastNameText == null ||  $scope.selectedCourse ==null)
          {           
              alert("pls insert name and last name and the wanted course...");
              return;
          }
    $scope.courses.push({
        id:count+1,
        student_firstName :$scope.firstNameText,
        student_lastName :$scope.lastNameText,
        course: $scope.selectedCourse.course
    });
    $scope.firstNameText =null;
    $scope.lastNameText =null;
      console.log($scope.courses);
      };
    }]);
})(window.angular);