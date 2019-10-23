angular.module('listApp', [])
    .controller('ListController',['$scope','$http', '$location',async function($scope,$http,$location){
        $scope.list = await getEntries();
        console.log(getEntries());

        $scope.list.remaining = function(){
            var count = 0;
            angular.forEach($scope.list.entries, function(entry) {
                count += entry.done ? 0 : 1;
            });
            return count;
        };

        $scope.list.entryDone = function(){
            //TODO: Implement when backend is ready
        };

        $scope.list.addEntry = function() {
            let data ={};
            data.entities = {"product":$scope.list.productName};
            return $http.post('/api/v1/lists/'+$location.$$absUrl.split('?')[1]+'/entries',JSON.stringify(data)).then(function(response){
                if(response.status === 200){
                    $scope.list.productName = '';
                    location.reload();
                } else{
                    $scope.list.productName = 'Error on reload';
                }
            });
        };

        function getEntries(){
            return $http.get('/api/v1/lists/'+$location.$$absUrl.split('?')[1]).then(function(data){
                return data.data.data;
            });
        }
    }]);
