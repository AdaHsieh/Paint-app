Ti.UI.setBackgroundColor('#000');
function isAndroid(){
 return(Ti.Platform.name=='android');
}

var tabGroup= Ti.UI.createTabGroup();

var win1= Ti.UI.createWindow({
	title:'',
});
var tab1= Ti.UI.createTab({
	title:'created by Ada Hsieh',window:win1
});
var table= Ti.UI.createTableView({});
table.style= Ti.UI.iPhone.TableViewStyle.GROUPED;
if (!isAndroid()) {
	table.style= Ti.UI.iPhone.TableViewStyle.GROUPED;
};
var sectionAm= Ti.UI.createTableViewSection({headerTitle:'America'});
var sectionAf= Ti.UI.createTableViewSection({headerTitle:'Africa'});
var sectionEu= Ti.UI.createTableViewSection({headerTitle:'Europe'});
var sectionAs= Ti.UI.createTableViewSection({headerTitle:'Asia'});
var sectionOc= Ti.UI.createTableViewSection({headerTitle:'Oceania'});

var amRow1= Ti.UI.createTableViewRow({leftImage:'image/us.png',title:'American',hasChild:true});
var am1_population= Ti.UI.createLabel({
text:'3億1,574萬3千人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
amRow1.add(am1_population);
var amRow2= Ti.UI.createTableViewRow({leftImage:'image/ca.png',title:'Canada',hasChild:true});
var am2_population= Ti.UI.createLabel({
text:'3千500萬人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
amRow2.add(am2_population);
var amRow3= Ti.UI.createTableViewRow({leftImage:'image/br.png',title:'Brazil',hasChild:true});
var am3_population= Ti.UI.createLabel({
text:'1億9,100萬人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
amRow3.add(am3_population);

var afRow1= Ti.UI.createTableViewRow({leftImage:'image/eg.png',title:'Egypt',hasChild:true});
var af1_population= Ti.UI.createLabel({
text:'8,370萬人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
afRow1.add(af1_population);
var afRow2= Ti.UI.createTableViewRow({leftImage:'image/ke.png',title:'Kenya',hasChild:true});
var af2_population= Ti.UI.createLabel({
text:'4,301萬人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
afRow2.add(af2_population);
var afRow3= Ti.UI.createTableViewRow({leftImage:'image/sd.png',title:'Sudan',hasChild:true});
var af3_population= Ti.UI.createLabel({
text:'3,300萬人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
afRow3.add(af3_population);

var ocRow1= Ti.UI.createTableViewRow({leftImage:'image/au.png',title:'Australia',hasChild:true});
var oc1_population= Ti.UI.createLabel({
text:'2,200萬人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
ocRow1.add(oc1_population);
var ocRow2= Ti.UI.createTableViewRow({leftImage:'image/nz.png',title:'New Zealand',hasChild:true});
var oc2_population= Ti.UI.createLabel({
text:'488萬人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
ocRow2.add(oc2_population);
var ocRow3= Ti.UI.createTableViewRow({leftImage:'image/pf.png',title:'Polynesia',hasChild:true});
var oc3_population= Ti.UI.createLabel({
text:'26萬7千人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
ocRow3.add(oc3_population);

var euRow1= Ti.UI.createTableViewRow({leftImage:'image/it.png',title:'Italy',hasChild:true});
var eu1_population= Ti.UI.createLabel({
text:'6,063萬人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
euRow1.add(eu1_population);
var euRow2= Ti.UI.createTableViewRow({leftImage:'image/fr.png',title:'France',hasChild:true});
var eu2_population= Ti.UI.createLabel({
text:'6,500萬人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
euRow2.add(eu2_population);
var euRow3= Ti.UI.createTableViewRow({leftImage:'image/ch.png',title:'Switzerland',hasChild:true});
var eu3_population= Ti.UI.createLabel({
text:'780萬5,800人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
euRow3.add(eu3_population);

var asRow1= Ti.UI.createTableViewRow({leftImage:'image/tw.png',title:'Taiwan',hasChild:true});
var as1_population= Ti.UI.createLabel({
text:'2,300萬人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
asRow1.add(as1_population);
var asRow2= Ti.UI.createTableViewRow({leftImage:'image/jp.png',title:'Japan',hasChild:true});
var as2_population= Ti.UI.createLabel({
text:'1億2,700萬人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
asRow2.add(as2_population);
var asRow3= Ti.UI.createTableViewRow({leftImage:'image/sg.png',title:'Singapore',hasChild:true});
var as3_population= Ti.UI.createLabel({
text:'518萬人',font:{fontSize:12,fontWeight:'bold'},width:'auto', height:'auto',top:30,left:60,textAlign:'left'});
asRow3.add(as3_population);

sectionAm.add(amRow1);sectionAm.add(amRow2);sectionAm.add(amRow3);
sectionAf.add(afRow1);sectionAf.add(afRow2);sectionAf.add(afRow3);
sectionEu.add(euRow1);sectionEu.add(euRow2);sectionEu.add(euRow3);
sectionAs.add(asRow1);sectionAs.add(asRow2);sectionAs.add(asRow3);
sectionOc.add(ocRow1);sectionOc.add(ocRow2);sectionOc.add(ocRow3);
table.setData([sectionAm,sectionAf,sectionEu,sectionAs,sectionOc]);
win1.add(table);
win1.open();
tabGroup.addTab(tab1);
tabGroup.open();