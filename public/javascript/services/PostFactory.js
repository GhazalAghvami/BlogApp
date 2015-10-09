
o.getPosts = function(){
  var q =$q.defer();
  $http.get('https://myangularblogapp.firebaseio.com/.json').success(function(res){
    var posts = [];
    for (var prop in res) {
      res[prop]._id = prop;
      posts.push(res[prop]);
    }
    q.resolve(posts);
  });
  return q.promise;
}



  o.savePost = function(c) {
    var q = $.defer();
    vm.posts.push(vm.newPost);
    $http.post('https://myangularblogapp.firebaseio.com/.json', c).success(function(){
      q.resolve();
    });
    return q.promise;
  }

  o.deletePost = function(id) {
    $http.delete('https://myangularblogapp.firebaseio.com/'+ id +'.json').success(function(){
      o.getPosts();
    })
  }

return o;
});
