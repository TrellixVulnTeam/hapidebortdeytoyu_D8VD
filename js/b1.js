$('#enter-btn').click(function() {
    goNextPage()
    
})


$( ".password" ).on( "keydown", function(event) {
    if(event.which == 13){
        goNextPage()
    }
       
  });

  function goNextPage(){
    if($('.password').val() === 'bolu'){
        window.location.href='../b2.html';
    }
    else {
        $('.error-message').css('opacity', '1');
    }
  }