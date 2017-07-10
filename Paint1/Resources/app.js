var Paint = require('ti.paint');

var win = Ti.UI.createWindow({
    backgroundColor : '#fff'
});
var paintView = Paint.createPaintView({
    top : 0,
    right : 0,
    bottom : 80,
    left : 0,
    // strokeWidth (float), strokeColor (string), strokeAlpha (int, 0-255)
    strokeColor : '#0f0',
    strokeAlpha : 255,
    strokeWidth : 10,
    eraseMode : false,
    //image : 'default.png'
});
win.add(paintView);

var buttonStrokeWidth = Ti.UI.createButton({
    left : 90,
    bottom : 50,
    height : 30,
    backgroundColor:'#ccc',
    borderRadius:10,
    height:30,
    width:30,
    //title : 'Decrease Stroke Width',
    backgroundImage:'image/Line-width-icon.png'
    
});
buttonStrokeWidth.addEventListener('click', function(e) {
	
    paintView.strokeWidth = (paintView.strokeWidth === 10) ? 5 : 10;
    //e.source.title = (paintView.strokeWidth === 10) ? 'Decrease Stroke Width' : 'Increase Stroke Width';
    buttonStrokeWidth.backgroundImage = (paintView.strokeWidth === 10) ? 'image/Line-width-icon.png' : 'image/Line-width-icon-2.png';
});
win.add(buttonStrokeWidth);

var buttonStrokeColorRed = Ti.UI.createButton({
    bottom : 10,
    left : 20,
    backgroundImage:'image/red_pen.png',
    backgroundColor:'#ccc',
    borderRadius:10,
    width :30,
    height : 30, 
    //title : 'Red'
});
buttonStrokeColorRed.addEventListener('click', function() {
	
    paintView.strokeColor = 'red';
    buttonStrokeColorRed.backgroundColor='white';
    buttonStrokeColorGreen.backgroundColor='#ccc';
    buttonStrokeColorBlue.backgroundColor='#ccc';
    buttonStrokeColorEraser.backgroundImage='image/eraser-icon-3.png';
    paintView.eraseMode= false;
    
});
var buttonStrokeColorGreen = Ti.UI.createButton({
    bottom :10,
    left : 55,
     width :30,
    height : 30, 
    backgroundImage:'image/green_pen.png',
    backgroundColor:'white',
    borderRadius:10,
//    width : 75,
  //  height : 30,
    //title : 'Green'
});
buttonStrokeColorGreen.addEventListener('click', function() {
    paintView.strokeColor = '#0f0';
     buttonStrokeColorRed.backgroundColor='#ccc';
    buttonStrokeColorGreen.backgroundColor='white';
    buttonStrokeColorBlue.backgroundColor='#ccc';
    buttonStrokeColorEraser.backgroundImage='image/eraser-icon-3.png';
    paintView.eraseMode= false;
});
var buttonStrokeColorBlue = Ti.UI.createButton({
    bottom :10,
    left : 90,
    width :30,
    height : 30, 
    backgroundImage:'image/blue_pen.png',
    backgroundColor:'#ccc',
    borderRadius:10,
//    width : 75,
  //  height : 30,
   // title : 'Blue'
});
buttonStrokeColorBlue.addEventListener('click', function() {
	
    paintView.strokeColor = '#0000ff';
     buttonStrokeColorRed.backgroundColor='#ccc';
    buttonStrokeColorGreen.backgroundColor='#ccc';
    buttonStrokeColorBlue.backgroundColor='white';
    buttonStrokeColorEraser.backgroundImage='image/eraser-icon-3.png';
    paintView.eraseMode= false;
});
win.add(buttonStrokeColorRed);
win.add(buttonStrokeColorGreen);
win.add(buttonStrokeColorBlue);

var clear = Ti.UI.createButton({
    top:25,
    right:15,
    //backgroundColor:'#ccc',
    borderRadius:10,
    width :30,
    height : 30, 
   // width : 75,
    //height : 30,
    //title : 'Clear',
    backgroundImage:'image/trash_icon.png'
    
});
clear.addEventListener('click', function() {
	
    paintView.clear();
 
});
win.add(clear);


var hello = Ti.UI.createButton({
    top:'40%',
    //backgroundColor:'#ccc',
    borderRadius:10,
    //width :30,
    //height : 30,
    title : 'Hello! Please Click me to start!',
});
hello.addEventListener('click', function(e) { 
hello.title='';
});
win.add(hello);

var buttonStrokeAlpha = Ti.UI.createButton({
    bottom :50,
    left:55,
    borderRadius:10,
    width : 30,
    height : 30,
   // title : 'Alpha : 100%',
    backgroundImage:'image/letter-B-icon.png',
    backgroundColor:'#ccc',
});
buttonStrokeAlpha.addEventListener('click', function(e) {

    paintView.strokeAlpha = (paintView.strokeAlpha === 255) ? 90 : 255;
    //e.source.title = (paintView.strokeAlpha === 255) ? 'Alpha : 100%' : 'Alpha : 50%';
    buttonStrokeAlpha.backgroundImage = (paintView.strokeAlpha === 255) ? 'image/letter-B-icon.png' : 'image/letter-B-icon-1.png';
});
win.add(buttonStrokeAlpha);

var buttonStrokeColorEraser = Ti.UI.createButton({
    bottom : 50,
    left : 20,
    backgroundColor:'#ccc',
  borderRadius:10,
   width :30,
   // width : 100,
    height : 30,
  // title : 'Off',
   //image:'image/eraser-icon-3.png',
  backgroundImage:'image/eraser-icon-3.png',
  backgroundColor:'#ccc',
  borderRadius:10,
    //textAlign:'right',
    });
    
 // win.add(buttonLabel);
buttonStrokeColorEraser.addEventListener('click', function(e) {

    paintView.eraseMode = (paintView.eraseMode) ? false : true;
   // e.source.title = (paintView.eraseMode) ? 'On' : 'Off';
    buttonStrokeColorEraser.backgroundImage= (paintView.eraseMode) ?'image/eraser-icon-2.png':'image/eraser-icon-3.png';
    //buttonLabel.text = (paintView.eraseMode) ?'On' : 'Off';
  
});
win.add(buttonStrokeColorEraser);

win.open();

