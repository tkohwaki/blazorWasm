//
// Canvas Helper
//

// Fill Rectangle
function FillRect(canvasId, left,top,width,height,color) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');
    ctx.fillStyle=color;
    ctx.fillRect(left,top,width,height);
}
// Fill Ellipse
function FillEllipse(canvasId,left,top,r,color) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(left,top,r,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
}

// Fill Traiangle
function FillTraiangle(canvasId,left,top,len,color) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(left,top);
    ctx.lineTo(left-len/2,len);
    ctx.lineTo(left-len/2+len,len);
    ctx.lineTo(left,top);
    ctx.fill();
    ctx.closePath();
}

// Clear Canvas
function ClearCanvas(canvasId) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

// Get Specified Elements Rectangle
function GetElementRect(Id) {
    var ele = document.getElementById(Id);
    var rect = ele.getBoundingClientRect();
    return rect;
}

// moveTo Helper
function MoveToCanvas(canvasId,x,y) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x,y);
}

// lineTo Helper
function LineToCanvas(canvasId,x,y,color,width) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineTo(x,y);
    ctx.stroke();
}

// closePath Helper
function ClosePath(canvasId,fillflag) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');
    if (fillflag) {
        ctx.fill();
    }
    ctx.closePath();
}

// Get Image Data
function GetImageData(canvasId,x,y) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');
    return ctx.getImageData(x,y,1,1);
}
// Save as File
function SaveAsFile(canvasid,filename) {
	var canvas = document.getElementById(canvasid);
	var url = canvas.toDataURL();
	var lnk = document.createElement("a");
	lnk.href = url;
	lnk.download = filename;
	lnk.click();
}
