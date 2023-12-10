var cal = document.getElementById("cal");
var far = document.getElementById("far");
cal.addEventListener("input", function () {
  var c = this.value;
  var f = c * 1.8 + 32;
  far.value = f;
});
far.addEventListener("input", function () {
  var f = this.value;
  var c = ((f - 32) * 5) / 9;
  cal.value = c;
});
