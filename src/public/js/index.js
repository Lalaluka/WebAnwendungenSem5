angular.module('indexApp',[])
    .controller('SearchController',['$scope','$http', '$location','$window',async function($scope,$http,$location,$window){
        $scope.search = {};

        $scope.search.searchEntry = async function(){
            let data={};
            if($scope.search.idSearch){
                res = await $http.get('/api/v1/lists/'+$scope.search.idSearch,JSON.stringify(data)).then(function(res){
                    if(res.status=== 200){
                        $window.location.href='/list?'+$scope.search.idSearch;
                    } else{
                        console.log("yes")
                    }
                });
            }
        };
    }]);