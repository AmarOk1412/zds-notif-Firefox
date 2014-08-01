if ("undefined" == typeof(ZDSNotif)) {
  var ZDSNotif = {};
};

/**
 * Controls the browser overlay
 */
ZDSNotif.BrowserOverlay = {
  /**
   * Says 'Hello' to the user. TODO: get MP/Notif/ replace a href="zeste..." fermer img/
   */
  sayHello : function(aEvent) {
    let stringBundle = document.getElementById("zds-notif-string-bundle");
    getNotifAndMP();

    function HTMLParser(aHTMLString){
      var html = document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", null),
      body = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
      html.documentElement.appendChild(body);

      body.appendChild(Components.classes["@mozilla.org/feed-unescapehtml;1"]
      .getService(Components.interfaces.nsIScriptableUnescapeHTML)
      .parseFragment(aHTMLString, false, null, body));

      return body;
    }

    function getNotifAndMP() {
      var oReq = new XMLHttpRequest();
      oReq.open("GET", 'http://zestedesavoir.com/', true);
      oReq.onload = function () {
        //Parse the HTML
        var DOMPars = HTMLParser(this.responseText);
        window.alert(DOMPars.getElementsByClassName('dropdown')[3].innerHTML);
      };
      oReq.send(null);
    }
  }
};
