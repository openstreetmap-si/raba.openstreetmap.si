// in addition to the CC-BY-SA of the wiki feel free to use the following source for any purpose without restrictions (PD)
// credits and additions appreciated: http://wiki.openstreetmap.org/wiki/User:Stephankn

var baseJosmRemoteUrl = "http://127.0.0.1:8111";
var josmFound = false;

function josmAvailable() {
	josmGetVersion(); //schedule async check for future
	return josmFound;
}

function josmGetVersion()
{
	var versionUrl =  baseJosmRemoteUrl + "/version";

	$.get( versionUrl, function( version ) {
		josmFound = true;
		$("#josmRemoteInfo").text(version.application + ", version " + version.protocolversion.major + "." + version.protocolversion.minor);
	}, "json" );
	//TODO: on error/timeout: 
	//josmFound = false;
}

function josmZoom(left, right, top, bottom) {
	// GET /zoom?left=...&right=...&top=...&bottom=...&select=object[,object...]
	var zoomUrl =  baseJosmRemoteUrl + "/zoom";
	$.get( zoomUrl, { left: left, right: right, top: rop, bottom: bottom } );
}

function josmLoadAndZoom(left, right, top, bottom, changesetSource, changesetComment ) {
	// GET /load_and_zoom?left=...&right=...&top=...&bottom=...&select=object[,object...]
	var loadUrl =  baseJosmRemoteUrl + "/load_and_zoom";
	$.get( loadUrl, { left: left, right: right, top: top, bottom: bottom, changeset_source: changesetSource, changeset_comment: changesetComment } );
}


function josmImport(uri) {
	// GET /import?url=...
	// https://dl.dropboxusercontent.com/u/36381923/osm/data/42diss.zip
	//var importUrl =  baseJosmRemoteUrl + "/import?url=" + encodeURIComponent(uri);
	var importUrl =  baseJosmRemoteUrl + "/import";
	//$.get( importUrl, { url: uri } );
        $.ajax({
                url: importUrl,
                data: { url: uri }
        }).fail(function (jqXHR, textStatus, errorThrown) {
                if(textStatus == "error" && jqXHR.status==0 && jqXHR.readyState == 0)
                {
                        alert("Could not connect to editor.\nIs JOSM running and Remote Control enabled?");
                }
                else
                {
                        alert(textStatus + ":" + errorThrown + "-" + jqXHR.status + "-" + jqXHR.readyState );
                        console.log(textStatus + ":" + errorThrown + "-" + jqXHR.status + "-" + jqXHR.readyState );
                        console.log(textStatus + ": " + errorThrown);
                        console.log(jqXHR);
                }
        });

}

function josmImagery(title, type, uriPattern) {
	// http://localhost:8111/imagery?title=osm&type=tms&url=http://wms.openstreetmap.de/testtms/RABA3000/%7Bzoom%7D/%7Bx%7D/%7By%7D.png"
	var imageryUrl =  baseJosmRemoteUrl + "/imagery";
	$.get( imageryUrl, { title: title, type: type,  url: uriPattern } );
}


/* old example from wiki, replaced by shorter code using jQuery above
 function checkJOSM(version){

   //alert(version.application + " uses protocol version " + version.protocolversion.major + "." + version.protocolversion.minor);
   console.log(version.application + " " + version.protocolversion.major + "." + version.protocolversion.minor);
   $("#josmRemote").text(version.application + " " + version.protocolversion.major + "." + version.protocolversion.minor);
   // do something useful, maybe showing edit button
}
 
function getJOSMversion()
{
var url =  baseJosmRemoteUrl + "/version";
var useFallback = false;
// currently FF3.5, Safari 4 and IE8 implement CORS
if (XMLHttpRequest) {
   var request = new XMLHttpRequest();
   if ("withCredentials" in request) {
      request.open('GET', url, true);
      request.onreadystatechange = function(){
         if (request.readyState != 4) {
            return;
         }
         if (request.status == 200) {
            checkJOSM(eval('(' + request.responseText + ')'));
         }
      };
      request.send();
   }
   else if (XDomainRequest) {
      var xdr = new XDomainRequest();
      xdr.open("get", url);
      xdr.onload = function(){
         checkJOSM(eval('(' + xdr.responseText + ')'));
      };
      xdr.send();
   } else {
      useFallback = true;
   }
}
else {
   // no XMLHttpRequest available
   useFallback = true;
}
 
if (useFallback) {
   // Use legacy jsonp call
   var s = document.createElement('script');
   s.src = url + '?jsonp=checkJOSM';
   s.type = 'text/javascript';
 
   if (document.getElementsByTagName('head').length > 0) {
      document.getElementsByTagName('head')[0].appendChild(s);
   }
 
}
}
*/
