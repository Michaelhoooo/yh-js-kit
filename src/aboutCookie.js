// setCookie()
// @About setcookie
function setCookie(name, value) {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

// getCookie()
// @About getcookie
function getCookie(name) {
  var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) {
      return (arr[2]);
  } else {
      return "";
  }
}

// delCookie()
// @About delcookie
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) {
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
}

export default {
  setCookie,
  getCookie,
  delCookie
}