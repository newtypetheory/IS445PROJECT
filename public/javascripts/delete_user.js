$(clickHandler);

function clickHandler() {
  $(".deleteButton").click(function() {
    const uid = $(this).attr("data-uid");
    confirm(`Are you sure you want to delete this user?`, {}) 
    if(uid === false) {
      console.log("User Account has been deleted ", uid);
      window.location.reload();
    } else {
      event.preventDefault();
    }
    deleteUser(uid);
  });
}

function deleteUser(uid) {
  const request = $.ajax({
    url: `/users/user/${uid}`,
    type: "delete",
    success: function(data) {
      console.log("delete done", data);
      window.location.reload();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("error happend");
      console.log(jqXHR, textStatus, errorThrown);
    }
  });
}