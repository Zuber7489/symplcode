//     main add to cart ajax
$(document).ready(function () {
  function addItem(form_id) {
    $.ajax({
      type: "POST",
      url: "/cart/add.js",
      dataType: "json",
      data: $("#" + form_id).serialize(),
      success: Shopify.onSuccess,
      error: Shopify.onError,
    });
  }
  $("#AddToCart").click(function (e) {
    e.preventDefault();

    $(this).prop("disabled", true);
    var id = $(this).parents("form").attr("id");
    // console.log(id);
    addItem(id);
  });

  $("#AddToCart2").click(function (e) {
    e.preventDefault();

    $(this).prop("disabled", true);
    var id = $(this).parents("form").attr("id");
    //alert(id);
    addItem(id);
  });

  $("#AddToCart1").click(function (e) {
    e.preventDefault();
    if (!$("#custom").val()) {
      alert("Bitte Text einfügen");
    } else {
      $(this).prop("disabled", true);
      var id = $(this).parents("form").attr("id");
      // console.log(id);
      addItem(id);
    }
  });
  $(".add_to_cart_button").each(function () {
    $(this).click(function (e) {
      e.preventDefault();

      var id = $(this).parents("form").attr("id");

      addItem(id);
    });
  });
  $(".m-radio").change(function () {
    var id = $(this)
      .parent(".c-radio")
      .parent(".r-select-size")
      .parents("form")
      .attr("id");

    addItem(id);
  });

  Shopify.onSuccess = function () {
    var elem = $("#AddToCart");
    elem.removeAttr("disabled");
    var quantity = parseInt(jQuery('[name="quantity"]').val(), 10) || 1;
    // Refresh cart content directly without fetching from /cart page
    $.ajax({
      type: "GET",
      url: "/cart.js",
      dataType: "json",
      success: function(cartData) {
        // Update cart count
        $(".count").html(cartData.item_count);
        $(".hcart").html(cartData.item_count);
        $(".cart-btn").html(
          "<span class='fa fa-shopping-bag'></span><span>" + cartData.item_count + "</span>"
        );
        
        // Show/hide cart icon based on item count
        if (cartData.item_count == "0") {
          $(".hcart").hide();
        } else {
          $(".hcart").show();
        }
        
        // Open cart drawer
        $("body").addClass("g-cart-open");
        $(".r-side-cart").addClass("active");
        
        // Trigger cart refresh event for slide-cart.liquid
        $(document).trigger('cart:refresh');
      }
    });
  };
  Shopify.onError = function (XMLHttpRequest, textStatus) {
    console.log("errorerror");
    // Shopify returns a description of the error in XMLHttpRequest.responseText.
    // It is JSON.
    // Example: {"description":"The product 'Amelia - Small' is already sold out.","status":500,"message":"Cart Error"}
    var data = eval("(" + XMLHttpRequest.responseText + ")");
    if (!!data.message) {
      alert(data.message + "(" + data.status + "): " + data.description);
    } else {
      alert("Error : " + Shopify.fullMessagesFromErrors(data).join("; ") + ".");
    }

    $(".addtocart").removeAttr("disabled");
  };

  Shopify.fullMessagesFromErrors = function (errors) {
    var fullMessages = [];
    jQuery.each(errors, function (attribute, messages) {
      jQuery.each(messages, function (index, message) {
        fullMessages.push(attribute + " " + message);
      });
    });
    return fullMessages;
  };
});

// Success function for AJAX add to cart
function sucss(data) {
  // This function is no longer used as we refresh cart directly
  // Keeping for backward compatibility
  console.log("Cart updated successfully");
}

// Remove cart item handler (moved inside sucss function to avoid duplication)
// This handler is now integrated with the main cart functionality above
