$(() => $("#createButton").click(createUser));
$(() => $("#createButton").click(validate));



function createUser() {
  const user = {
    name: $("input[name=name]")
      .val()
      .trim(),
    email: $("input[name=email]")
      .val()
      .trim(),
    number: $("input[name=number]")
      .val()
      .trim(),
  };
  console.log(user);

  const request = $.ajax({
    type: "post",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(user)
  });

  request.done(function(results) {
    console.log("User Creation Successfull!", results);
  });

  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  })};



function validate(event) {
  const firstChar = document.getElementById('number').value[0];
  if (firstChar === '0') {
    event.preventDefault();
    alert('Phone Number cannot start with 0')
  } else if (firstChar === '1') {
    event.preventDefault();
    alert('Phone Number cannot start with 1')
  } else {
    window.location.reload
  } 
};
