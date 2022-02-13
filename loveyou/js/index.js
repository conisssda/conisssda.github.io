$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  if (userName == "徐曌瑜" && pwd == "1314520") {
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      location.href = "1.html";
    }, 2000);
  } else {
    alert("Wrong Password");
  }
});
