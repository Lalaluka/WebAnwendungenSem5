angular.module('listApp', [])
    .controller('ListController',['$scope','$http', '$location',async function($scope,$http,$location){
        $scope.list = await getEntries();
        console.log(await getEntries());

        function getEntries(){
            return $http.get('/api/v1/lists/'+$location.$$absUrl.split('?')[1]).then(function(data){
                return data.data.data;
            });
        }
    }]);
