angular.module('indexApp',[])
    .controller('SearchController',['$scope','$http', '$location','$window',async function($scope,$http,$location,$window){
        $scope.search = {};
        $scope.search.searchEntry = async function(){
            if($scope.search.idSearch){
                try{
                    await $http.get('/api/v1/lists/'+$scope.search.idSearch,JSON.stringify(data)).then(function(res){
                        if(res.status=== 200){
                            $window.location.href='/list?'+$scope.search.idSearch;
                        } else{
                            $scope.search.error = "ID doesn't exist!";
                        }
                    });
                } catch(e){
                    $scope.search.error = "ID doesn't exist!";
                }
            }
        };
    }])
    .controller('CreateListController',['$scope','$http', '$location','$window',async function($scope,$http,$location,$window){
        $scope.createList = {};
        $scope.createList.create = async function(){
            if($scope.createList.email){
                try{
                    let tags = [];
                    if ($scope.createList.tags){
                        tags = $scope.createList.tags.split(' ');
                    }
                    await $http.post('/api/v1/lists',{'owner':$scope.createList.email, 'tags': tags}).then(function(res){
                        if(res.status===200){
                            $window.location.href='/list?'+res.data.data._id;
                        } else{
                            $scope.createList.error = "Error on Creation";
                        }
                    })
                } catch(e){
                    $scope.createList.error = "Error on Creation";
                }
            }
        }
    }]);