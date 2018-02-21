// hide show text

$('.readmore a').click(function(event) {

  $('#show-this-on-click').slideDown()
  $('.readmore').hide()
  $('.readless').show()
  event.preventDefault();
}
)



$('.readless a').click(function(event) {

  $('#show-this-on-click').slideUp()
  $('.readless').hide()
  $('.readmore').show()
  event.preventDefault();

}
)

$('.readmore2 a').click(function(event) {

  $('#show-this-on-click2').slideDown()
  $('.readmore2').hide()
  $('.readless2').show()
  event.preventDefault();
}
)


$('.readless2 a').click(function(event) {

  $('#show-this-on-click2').slideUp()
  $('.readless2').hide()
  $('.readmore2').show()
  event.preventDefault();

}
)

// form validation alert

function validateForm()
 {
	 console.log('connected')
     var a=document.forms["input_form"]["name"].value;
     var b=document.forms["input_form"]["email"].value;
     var c=document.forms["input_form"]["message"].value;
     if (a=="" || a=="",b==null || b=="",c==null || c==""  )
     {
         alert("Please fill-in all required fields!");

         return false;
     }
 }
