
angular.module('BlogApp').controller("AddPostController", function($http, $state, ContactFactory){
  var vm = this;

vm.addContact = {};

vm.savePost =function(){

ContactFactory.saveUser(vm.addContact).then(function(){
    $state.go('Home');
  })
}

});
