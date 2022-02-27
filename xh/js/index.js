$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  if (userName == "徐浩" && pwd == "") {
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      location.href = "1.html";
    }, 2000);
  } else if (userName == "0") {
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      alert("出去。这里不是给你看的!!!");
    }, 2000);
  } else {
    alert("Wrong Password");
  }
});
