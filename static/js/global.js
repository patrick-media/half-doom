var d = new Date();
var sm_year = d.getFullYear();
var sm_month = d.getMonth();
var sm_date = d.getDate();
var sm_hours = d.getHours();
var sm_minutes = d.getMinutes();
var sm_seconds = d.getSeconds();
function start() {
  document.getElementById('datetimecurrent').innerHTML = sm_month + 1 + "-" + sm_date + "-" + sm_year + " " + sm_hours + ":" + sm_minutes + ":" + sm_seconds + " CST";
  // for some reason, js subtracts 1 from the month, so we add 1 in return
  // take that idiot
  // sux to sux
}
