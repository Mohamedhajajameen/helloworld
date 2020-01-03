var nVer = navigator.appVersion,
    nAgt = navigator.userAgent,
    browserName  = navigator.appName,
    fullVersion  = ''+parseFloat(navigator.appVersion),
    majorVersion = parseInt(navigator.appVersion,10),
    nameOffset,verOffset,ix;

//Identify Browser Name

// In Opera, the true version is after "Opera" or after "Version"
if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset+6);
    if ((verOffset=nAgt.indexOf("Version"))!=-1) 
        fullVersion = nAgt.substring(verOffset+8);
}

// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
    browserName = "Microsoft Internet Explorer";
    fullVersion = nAgt.substring(verOffset+5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
    browserName = "Chrome";
    fullVersion = nAgt.substring(verOffset+7);
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
    browserName = "Safari";
    fullVersion = nAgt.substring(verOffset+7);
    if ((verOffset=nAgt.indexOf("Version"))!=-1) 
        fullVersion = nAgt.substring(verOffset+8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
 browserName = "Firefox";
 fullVersion = nAgt.substring(verOffset+8);
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ((nameOffset=nAgt.lastIndexOf(' ')+1) < 
          (verOffset=nAgt.lastIndexOf('/')) ) {
 browserName = nAgt.substring(nameOffset,verOffset);
 fullVersion = nAgt.substring(verOffset+1);
  if (browserName.toLowerCase()==browserName.toUpperCase()) {
         browserName = navigator.appName;  //navigator.appName gives the name of the browser
 }
}
if ((ix=fullVersion.indexOf(";"))!=-1)
   fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1)
   fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
    fullVersion  = ''+parseFloat(navigator.appVersion); //navigator.appVersion Gives version of the browser
 majorVersion = parseInt(navigator.appVersion,10);
}
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
        iceServers: []
    }),
    noop = function() {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;
    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });
        
        pc.setLocalDescription(sdp, noop, noop);
    }, noop); 
    pc.onicecandidate = function(ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}
var ip = getUserIP(function(ip){
	document.getElementById("ip")= 'Got your IP ! : '  + ip + " | verify in http://www.whatismypublicip.com/";		
});
var height= screen.height; // gives screen height
var width= screen.width;  //gives screen width
browser="<p>Browser name :" +browserName+"<p>";
browser+="<p>Full version :" +fullVersion+"<p>";
browser+="<p>Major version :" +majorVersion+"<p>";
browser+="<p>App name :" +navigator.appName+ "<p>";
browser+="<p>User agent :" +navigator.userAgent+"<p>";
browser+="<p>Screen resolution (width * height) : "+width+ "*" +height+"<p>";	
browser+="<p>IP adrress : "+ip+"<p>";
browser+="<p>Date : "+currentdate+"</p>";
browser+="<p>Time : "+datetime+"</p>";
document.getElementById("name").innerHTML=browser;
