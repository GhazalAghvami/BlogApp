
angular.module('BlogApp').controller("EditPostController", function($http, $state, $stateParams){
  var vm = this;
if (!$stateParams.id)  return $state.go('Home');

$http.get('https://myangularblogapp.firebaseio.com/'+ $stateParams.id+'/.json').success(function(res){
  vm.contactt = res;
});

vm.editPost =function(){

  $http.put("https://myangularblogapp.firebaseio.com/"+ $stateParams.id+"/.json",vm.post).success(function(){
    $state.go('Home');
  });
};

});
