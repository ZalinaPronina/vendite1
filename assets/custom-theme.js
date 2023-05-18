$(document).ready(function(){
  
  // product page - klaviyo back in stock
  $('.klaviyo-backinstock-form .btn').on('click', function(e){
    e.preventDefault();
    var email_val = $('.klaviyo-backinstock-form input').val();
    var variant_id = parseInt($(this).attr('data-variant-id'));
    if(email_val.length>0){
      $('.klaviyo-backinstock-form .valid-msg').hide();
      $.ajax({
        type: "POST",
        url: "https://a.klaviyo.com/onsite/components/back-in-stock/subscribe",
        data: {
            a: "Vi3x7d",
            email: email_val,
            variant: variant_id,
            platform: "shopify"
        },
        success: function(response){
          $('.klaviyo-backinstock-form .success-msg').addClass('active');
          $('.klaviyo-backinstock-form .valid-msg').hide();
          $('.klaviyo-backinstock-form .input-group').hide();
          $('.klaviyo-backinstock-form .disclaimer-text').hide();
        }
      });
    } else {
      $('.klaviyo-backinstock-form .valid-msg').show();
    }
  });
  
});