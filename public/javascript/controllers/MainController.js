
angular.module('BlogApp').controller('MainController', function($http, ControlFactory){
  var vm = this;

  vm.getPosts = function(){

    PostFactory.getPosts().then(function(posts){
      vm.posts = posts;
    });
  };

  vm.getPosts();

    //
    // vm.savePost = function() {
    //   PostFactory.savePost(vm.addPost).then(function(){
    //     $state.go("Home")
    //   })
    // }


    vm.deletePost = function(post) {
      ControlFactory.deletePost(post._id)

    }
});
