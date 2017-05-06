$(document).ready(function() {

  $('#getMovie').click((event) => {
    let movieTitle = $('#movieSearch').val();
    movieAPI.getMovie(movieTitle).then((results) =>{
      console.log("Movie API results:", results);
    }).catch((error) => {
      console.log("getMovie Error", error);
    });
  });


  $("#LoginBtn").click((e)=>{
  	$("#login-container").addClass("hide");
  	$("#btnLogout").removeClass("hide");
  	$(".row").removeClass("hide");





  });


  $("#RegisterBtn").click((e)=>{
  	$("#login-container").addClass("hide");
  	$("#btnLogout").removeClass("hide");
  	$(".row").removeClass("hide");





  });

});
