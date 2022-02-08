//
//  Bing Maps API Functions
//
var BingMap;
var FindStart = null;
function loadMap(eleid) {
    BingMap = new Microsoft.Maps.Map(document.getElementById(eleid),{zoom: 15});
}

function AttachEvents(event, helper, funname) {
    Microsoft.Maps.Events.addHandler(BingMap,event,
        function(e) {
            helper.invokeMethodAsync(funname,e.location.latitude,e.location.longitude);
        }
    );
}
function AddPushpin(latitude,longitude,title,color) {
    if (FindStart != null) {
        BingMap.entities.remove(FindStart);
    }
    var loc = new Microsoft.Maps.Location(latitude,longitude);
    FindStart = new Microsoft.Maps.Pushpin(loc,{color:color,title:title});
    BingMap.entities.push(FindStart);
}
function ClearRestrans() {
    BingMap.entities.clear();
    BingMap.entities.push(FindStart);
}
function AddRestran(pinarg) {
    var loc = new Microsoft.Maps.Location(pinarg.latitude,pinarg.longitude);
    var pin = new Microsoft.Maps.Pushpin(loc,{color: pinarg.color,title: pinarg.name, text: pinarg.number});
    Microsoft.Maps.Events.addHandler(
        pin,
        "click",
        function(e) {
            var box = new Microsoft.Maps.Infobox(loc,{
                title:pinarg.name,
                description: pinarg.desc,
                maxHeight: 300,
                maxWidth: 300
            });
            box.setMap(BingMap);
        }
    );
    BingMap.entities.push(pin);
}
function AddInfoBox(boxInfo) {
    var loc = new Microsoft.Maps.Location(boxInfo.latitude,boxInfo.longitude);
    var box = new Microsoft.Maps.Infobox(loc,{
        title:boxInfo.title,
        description:boxInfo.description,
        maxHeight:300,
        maxWidth:350
    });
    box.setMap(BingMap);
}