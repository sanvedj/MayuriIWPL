$(document).ready(function() {

  $('#first_form').submit(function(e) {
    e.preventDefault();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var password = $('#password').val();
    var contact = $('#contact').val();
    var password1=$('#pass').val();
    var d=$('#date1').val();
 
/*  
          if(phone.value.match(phoneNum)) {
                return true;
            }
  */
  $(".error").remove();

    if (first_name.length < 2) {
      $('#first_name').after('<span class="error">Enter first name</span>');
    }
    elseif (last_name.length < 2) {
      $('#last_name').after('<span class="error">Enter last name</span>');
    }
    elseif (password.length < 8) {
      $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
        
    }
    elseif(password !== password1) {
        $('#pass').after('<span class="error"> Password does not match </span>');
    }
    elseif(contact.length < 10) {
        $('#contact').after('<span class="error"> Re-enter contact number </span>');        
    }
    elseif(d === today() ) {
        $('date1').after('<span class="error"> Enter valid date </span> ');
    }
    else {
            alert("Submitted!! ");

    }

    
  });


});
