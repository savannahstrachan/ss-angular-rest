angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

   


    //init showme variable to be false
    $scope.showMe = false;

    //init function in javascript
    $scope.myFunc = function(response) {
       $http.post("https://restaurant-db-test.herokuapp.com/restaurants", {"hunger":"3"}).then(function(res){
        console.log(res.data);
        $scope.blake = res.data[0];
       }); 
     };

   

});

	
 // $( function() {
 //    $( "#accordion" ).accordion({
 //      heightStyle: "content",
 //      collapsible: true
 //    });
 //  } );

 //  $( function() {
 //    $( "input" ).checkboxradio();
 //    $( "fieldset" ).controlgroup();
 //  } );