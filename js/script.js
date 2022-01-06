$(document).ready(function(){


    var textbox = $('.text-box');
    var circle =$('.circle');
    var circle2 = $('.circle2');
   

//CHANGING COMPLETE STATE ON CLICK //

$('.elements').on('click','.text-box p:last-of-type', function () {
   $(this).parent().toggleClass("default done");
   $(this).parent().find("p:first").toggleClass('circle circle2');
   $(this).parent().find('img').toggleClass('img-inactive img-active');
   $(this).parent().find('p:last').toggleClass ('text text2');


   // recount
   var n = $( ".text-box.default").length;
   $( ".items-left" ).text( "" + n + " items left")
});
 
    //CREATING AN ELEMENT
    $(':input').on('keypress',function(e) {
        if(e.which == 13 && $('#text').val().length != 0) {
               
                var data = $('#text').val();

                $('.elements').append
                ('<div class="text-box default"><p class="circle"><img class="img-inactive" src="img/icon-check.svg"></p><p class="text">' + data + '</p><img class="deleting" src="img/icon-cross.svg"></div>');
                $('.text-box').find('.deleting').show()

                // recount
                var n = $( ".text-box.default").length;
                $( ".items-left" ).text( "" + n + " items left");

                //display all
                $('.text-box.default').show()
                $('.text-box.done').show()
       
        //Clear after usage
        $('#text').val("") 
     }});

     // DELETING A NEW ELEMENT

     $('.elements').on('click','.text-box .deleting', function () {
        $(this).parent().remove();

        //recount
        var n = $( ".text-box.default").length;
        $( ".items-left" ).text( "" + n + " items left");
     })

     // COMPLETED

     var completed = $('.completed')

     completed.on('click', function(){

        $('.text-box.done').show()
        $('.text-box.default').hide()
        $('.text-box').find('.deleting').hide()
    // recount
        var n = $( ".text-box.done").length;
        $( ".items-left" ).text( "" + n + " items left")

     })

     //ACTIVE

     var active = $('.active');

     active.on('click', function(){

        $('.text-box.default').show()
        $('.text-box.done').hide()
        $('.text-box').find('.deleting').show()
    // recount
        var n = $( ".text-box.default").length;
        $( ".items-left" ).text( "" + n + " items left")
     })

     // ALL

     var all = $('.all');

     all.on('click', function(){

        $('.text-box.default').show()
        $('.text-box.done').show()
        $('.text-box').find('.deleting').show()
    // recount
        var n = $( ".text-box.default").length;
        $( ".items-left" ).text( "" + n + " items left")
     })
      

     // CLEAR

     var clear = $('.clear')
        clear.on('click', function() {
        $('.text-box.done').remove()
     //recount
     
        var n = $( ".text-box.default" ).length;
         $( ".items-left" ).text( "" + n + " items left");
     })

     // SWITCHER

     var plusmin = 1;

     $('.switcher').click(function(){
       plusmin *= -1;
      var stl = plusmin>0 ? 'css/style.css' : 'css/style2.css';

      $('#stl[rel=stylesheet]').attr('href', stl);
     
   });

   $('.switcher2').click(function(){
      plusmin *= -1;
     var stl = plusmin>0 ? 'css/style.css' : 'css/style2.css';

     $('#stl[rel=stylesheet]').attr('href', stl);
    
  });

  // SWAPPING

  $('#sortable').sortable({
     axis: "y"
  });

  


  



     

    




})
