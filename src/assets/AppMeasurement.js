console.log('hooked up!!!')
var s_account = "xchclraltestledgenerationreport";
var s = s_gi(s_account);
console.log('s', s)
s.trackingServer = "exchangecallrail.data.adobedc.net";
s.pageName = "AyanaPage";
s.eVar1 = "AyanaExample eVar";
s.events = "event1";
s.t();
console.log('at the end')