window.onload = function() {
  // selects input fields
  var reserve_name = document.getElementById("reserve_name");
  var reserve_phone = document.getElementById("reserve_phone");
  var reserve_email = document.getElementById("reserve_email");
  var reserve_uniqueID = document.getElementById("reserve_uniqueID");
  var res_submit = document.getElementById("res_submit");

  // clears form values
  function clearAll() {
    reserve_name.value = "";
    reserve_phone.value = "";
    reserve_email.value = "";
    reserve_uniqueID.value = "";
  }

  // gets input field values on click
  res_submit.onclick = function() {
    var reserve_name_val = reserve_name.value.trim();
    var reserve_phone_val = reserve_phone_val.value.trim();
    var reserve_email_val = reserve_email_val.value.trim();
    var reserve_uniqueID_val = reserve_email_val.value.trim();

    // sets user input into an object
    var userObj = {
      reserve_name_val,
      reserve_phone_val,
      reserve_email_val,
      reserve_uniqueID_val
    };

    // posts
    $.ajax({ method: "POST", url: "/api/reserve", data: userObj }).done(
      function() {
        clearAll();
      }
    );
  };
};
