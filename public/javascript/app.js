angular.module('BlogApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("Home", {
    url:'/',
    templateUrl:'/templates/home.html'
  })
  .state('EditPost', {
    url:'/post/edit/:id',
    templateUrl:'/templates/editPost.html',
    controller: "EditPostController as vm"
  })
.state('AddPost', {
  url: '/post/add/',
  templateUrl:'/templates/addPost.html',
  controller: "AddPostController as vm"

  })
$urlRouterProvider.otherwise('/');

})
