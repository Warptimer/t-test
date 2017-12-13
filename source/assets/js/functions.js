// Codekit import
// @codekit-append '../blocks/_global/preloader/preloader';

document.addEventListener('DOMContentLoaded', function () {
  let preloader = new Preloader();
  
  preloader.off();

  $('#authorization button[type="submit"]').prop('disabled', 'disabled');

  $('#authorization').validate({
    errorPlacement: function(error, element) {
      error.insertAfter($(element).parent());
    },
    submitHandler: function(form) {
      console.log(form)
      form.submit();
    }
  });

  $('#authorization input').on('keyup', function() {
    if ($("#authorization").valid()) {
      $('#authorization button[type="submit"]').prop('disabled', false);  
    } else {
      $('#authorization button[type="submit"]').prop('disabled', 'disabled');
    }
  });
});