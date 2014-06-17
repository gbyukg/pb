function gjjloan2(obj)
{

  var gryjce;//住房公积金个人月缴存额
  var poyjce;//配偶住房公积金个人月缴存额
  var grjcbl;//缴存比例
  var pojcbl;//配偶缴存比例
  var xy; //个人信用
  var fwzj;//房屋总价
  var fwxz;//房屋性质
  var dknx;//贷款申请年限
  var syhk; //首月还款额

  var dked;//需要贷款额度
  var hkfs;//还款方式
  var bxhj; //本息合计
  var bxhj2; //本息合计等本金

//中间变量
 var gbl;
 var jtysr; //家庭月收入
 var r;//月还款
 var rb;
 var gjjdka;//住房公积金贷款额度a
 var gjjdkb;//住房公积金贷款额度b
 var gjjdkc;//住房公积金贷款额度c


 gryjce=obj.mount2.value;
if(gryjce<=0){
	alert('住房公积金个人月缴存额不能为空,请输入.');
         obj.mount2.value='';
         obj.mount.focus();
         return;
}

 poyjce=obj.mount3.value;
/*if (obj.jcbl[0].checked==true)
{grjcbl=0.08;}
else {grjcbl=0.1;}

if (obj.p_bl[0].checked==true){pojcbl=0.08;}
else {pojcbl=0.1;}
*/
grjcbl=obj.jcbl.value/100;
pojcbl=obj.p_bl.value/100;
if (obj.xz[0].checked==true){fwxz=0.9;}
else {fwxz=0.8;}

if (obj.xy[0].checked==true){xy=1.15;}
else if(obj.xy[1].checked==true){xy=1.3;}
else {xy=1;}



 fwzj=obj.mount.value;

if(fwzj<=0){alert('房屋总价不能为空,请输入');
                     obj.mount.value='';return;}

 dknx=Math.round(obj.mount10.value);
//alert(dknx);
if(dknx<=0){alert('贷款申请年限不能为空,请输入');
                     obj.mount10.value='';return;}





switch(dknx){	//月均还款速算表
case 1: r=853.37;break; 
case 2: r=436.08;break; 
case 3: r=297.07;break; 
case 4: r=227.63;break; 
case 5: r=186.02;break; 
case 6: r=160.4;break;  
case 7: r=140.68;break; 
case 8: r=125.93;break; 
case 9: r=114.5;break;  
case 10: r=105.38;break;
case 11: r=97.95;break; 
case 12: r=91.79;break; 
case 13: r=86.6;break;  
case 14: r=82.17;break; 
case 15: r=78.35;break; 
case 16: r=75.03;break; 
case 17: r=72.12;break; 
case 18: r=69.55;break; 
case 19: r=67.27;break; 
case 20: r=65.22;break; 
case 21: r=63.39;break; 
case 22: r=61.74;break; 
case 23: r=60.24;break; 
case 24: r=58.89;break; 
case 25: r=57.65;break; 
case 26: r=56.51;break; 
case 27: r=55.48;break; 
case 28: r=54.52;break; 
case 29: r=53.64;break; 
case 30: r=52.83;break; 
  }

jtysr=Math.ceil((gryjce/grjcbl+poyjce/pojcbl)*10)/10;
gjjdka=Math.min(Math.round((jtysr-400)/r*10000*10)/10,600000);
gjjdkb=Math.round(gjjdka*xy*10)/10;
gjjdkc=Math.round(fwzj*fwxz*10)/10;
//obj.ze2.value=gjjdka; //jtysr;
//obj.ze2.value=Math.floor(Math.min(gjjdkb,gjjdkc)/10000*10)/10;

//计算2
zgdk=obj.ze2.value; //最高贷款额度

dked=Math.round(obj.need.value*10)/10;

obj.need.value=dked;

if(dked==0){alert('需要的贷款额度不能为空,请输入');
                     obj.need.value='';return;}
if(dked<0){alert('输入的贷款额度不符合要求,请输入');
                     obj.need.value='';return;}


if(dked>zgdk){alert('不能高于最高贷款额度,请重新输入');
                     obj.need.value='';return;}


hkfs=obj.select.value;

if(hkfs==1){
//obj.ze22.value=Math.ceil(dked*r*100)/100;
//==============================modify by xujianfei
var ylv_new ;

if(dknx>=1&&dknx<=5)
ylv_new = "0.003675";
else
ylv_new = "0.004050";


var ncm  = parseFloat(ylv_new) + 1;//n次幂
//alert(ncm);
var dknx_new = dknx*12;
//alert(dknx_new);
/*switch(dknx_new){         //等额本金还款方式首月还款额参照表
  case 1 : total_ncm = ncm;        break;
  case 2 : total_ncm = ncm*ncm;   break;
  case 3 : total_ncm = ncm*ncm*ncm;   break;
  case 4 : total_ncm = ncm*ncm*ncm*ncm;   break;
  case 5 : total_ncm = ncm*ncm*ncm*ncm*ncm;   break;
  case 6 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 7 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 8 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 9 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 10 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 11 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 12 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 13 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 14 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 15 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 16 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 17 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 18 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 19 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 20 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 21 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 22 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 23 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 24 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 25 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 26 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 27 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 28 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 29 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  case 30 : total_ncm = ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm*ncm;   break;
  }
  */


total_ncm = Math.pow(ncm, dknx_new)
//==============================
/*
 var total = ((dked*10000*ylv_new*total_ncm)/(total_ncm-1))*1000;
//alert(total);
var total1 = (total.toString()).indexOf(".");
var total2 = (total.toString()).substring(0,total1);//
var total3 = (total2.toString()).substring(total2.length-1,total2.length);//最后一位
var total4 = parseInt((total2.toString()).substring(total2.length-2,total2.length-1));//倒数二位
//alert(total3);
if(parseInt(total3)>=5)
total4 = total4 + 1;
total2 = (total2.toString()).substring(0,total2.length-2)+total4.toString();
//alert(total2);
obj.ze22.value = parseFloat(total2)/100;
*/
obj.ze22.value = Math.round(((dked*10000*ylv_new*total_ncm)/(total_ncm-1))*100)/100;
var pp = Math.round(((dked*10000*ylv_new*total_ncm)/(total_ncm-1))*100)/100;

//=========================================================
gbl=Math.round(Math.ceil(dked*r*100)/100/jtysr*1000)/10;
obj.yj2.value=gbl;
//bxhj=Math.round(r*dked*dknx*12*100)/100;
bxhj = Math.round(pp*dknx*12*100)/100;
obj.lx2.value=bxhj;
}
if (hkfs==2)
{

switch(dknx){         //等额本金还款方式首月还款额参照表
  case 1 :  rb=4.41; break;
  case 2 :  rb=4.41;  break;
  case 3 :  rb=4.41;  break;
  case 4 :  rb=4.41;  break;
  case 5 :  rb=4.41;  break;
  case 6 :  rb=4.86;  break;
  case 7 :  rb=4.86;  break;
  case 8 :  rb=4.86;  break;
  case 9 :  rb=4.86;  break;
  case 10 : rb=4.86;  break;
  case 11 : rb=4.86;  break;
  case 12 : rb=4.86;  break;
  case 13 : rb=4.86;  break;
  case 14 : rb=4.86;  break;
  case 15 : rb=4.86;  break;
  case 16 : rb=4.86;  break;
  case 17 : rb=4.86;  break;
  case 18 : rb=4.86;  break;
  case 19 : rb=4.86;  break;
  case 20 : rb=4.86;  break;
  case 21 : rb=4.86;  break;
  case 22 : rb=4.86;  break;
  case 23 : rb=4.86;  break;
  case 24 : rb=4.86;  break;
  case 25 : rb=4.86;  break;
  case 26 : rb=4.86;  break;
  case 27 : rb=4.86;  break;
  case 28 : rb=4.86;  break;
  case 29 : rb=4.86;  break;
  case 30 : rb=4.86;  break;
  }
syhk=Math.round((dked*10000/(dknx*12)+dked*10000*rb/(100*12))*100)/100;
obj.sfk2.value=syhk;
var yhke; //月还款额
var bxhj; //本息合计
var dkys; //贷款月数
var sydkze;//当前剩余贷款总额
var yhkbj; //月还款本金
dkys=dknx*12;
yhkbj=dked*10000/dkys;

yhke=syhk;
sydkze=dked*10000-yhkbj;
bxhj=syhk;
for (var count=2;count<=dkys; ++count)
	{
       		//yhke=Math.round((dked*10000/(dknx*12)+sydkze*rb/(100*12))*100)/100;
		yhke=dked*10000/dkys+sydkze*rb/1200;
		sydkze-=yhkbj;
		bxhj+=yhke;
	}
obj.lx3.value= Math.round(bxhj*100)/100;
}

if (hkfs==3)
{

switch(dknx){//自由还款还款方式月最低还款额参照表
	case 1 :  rb=83.04/100; break;
	case 2 :  rb=81.08/100; break;
	case 3 :  rb=79.12/100; break;
	case 4 :  rb=77.16/100; break;
	case 5 :  rb=75.20/100; break;
	case 6 :  rb=73.24/100; break;
	case 7 :  rb=71.28/100; break;
	case 8 :  rb=69.32/100; break;
	case 9 :  rb=67.36/100; break;
	case 10 :  rb=65.40/100; break;
	case 11 :  rb=63.44/100; break;
	case 12 :  rb=61.48/100; break;
	case 13 :  rb=59.52/100; break;
	case 14 :  rb=57.56/100; break;
	case 15 :  rb=55.60/100; break;
	case 16 :  rb=53.64/100; break;
	case 17 :  rb=51.68/100; break;
	case 18 :  rb=49.72/100; break;
	case 19 :  rb=47.76/100; break;
	case 20 :  rb=45.80/100; break;
	case 21 :  rb=43.84/100; break;
	case 22 :  rb=41.88/100; break;
	case 23 :  rb=39.92/100; break;
	case 24 :  rb=37.96/100; break;
	case 25 :  rb=36.00/100; break;
	case 26 :  rb=34.04/100; break;
	case 27 :  rb=32.08/100; break;
	case 28 :  rb=30.12/100; break;
	case 29 :  rb=28.16/100; break;
	case 30 :  rb=26.20/100; break;
}
var yhke; //月还款额
var ll;//利率
var zhbj;//最后一期本金
zhbj = Math.round(dked*10000*rb*100)/100;
if (dknx<=5)
{
	ll=0.0441/12;
	zdhkll=0.0378/12;
	var total_gjj = Math.pow(zdhkll + 1, dknx*12);
	syhk=Math.ceil(dked*10000*zdhkll*total_gjj/(total_gjj-1));
}
else
{
	ll=0.0486/12;
	zdhkll=0.0423/12;
	var total_gjj = Math.pow(zdhkll + 1, dknx*12-1);
	syhk=Math.ceil((dked*10000-zhbj)*zdhkll*total_gjj/(total_gjj-1)+zhbj*zdhkll);
}
	obj.sfk3.value=syhk;       //最低还款额
	var zhyqbj=dked*10000;
	var zchlx=0;//总偿还利息
	for (i=1;i<dknx*12 ;i++ )
	{
		zchlx+=Math.round(zhyqbj*ll*100)/100;
		zhyqbj=Math.round((zhyqbj-(syhk-Math.round(zhyqbj*ll*100)/100))*100)/100;
	}
	var sydkze=dked*10000-syhk;
	obj.lx4.value=zhyqbj;    //最后期本金
	obj.lx5.value=Math.round(zhyqbj*ll*100)/100;
	/*for (i=1;i<dknx*12 ;i++ )
	{
		zchlx+=Math.round((dked*10000-(syhk-Math.round(dked*10000*ll*100)/100))*ll*100)/100;
	}*/
	zchlx+=Math.round(zhyqbj*ll*100)/100;
	obj.lx6.value=Math.round(zchlx*100)/100;
}


//计算申请的最高贷款额度
/*
说明
家庭月收入＝住房公积金个人月缴存额÷缴存比例+配偶住房公积金个人月缴存额÷缴存比例

住房公积金贷款额度a＝（家庭月收入－400）÷等额均还月还款额每万元月还款额，且不大于40万元

对于个人信用等级为AAA的，住房公积金贷款额度b＝住房公积金贷款额度a×130％

对于个人信用等级为AA的，住房公积金贷款额度b＝住房公积金贷款额度a×115％

对于个人信用等级其它的，住房公积金贷款额度b＝住房公积金贷款额度a

对房屋性质为商品房期房的，住房公积金贷款额度c＝房屋总价×90％

对房屋性质为其它的，住房公积金贷款额度c＝房屋总价×95％

最高贷款额度d＝min（b，c）

等额均还还款公式：

等额本金还款公式

首月还款额=P/（n×12）+借款总额×I

其中：P为贷款本金，I为月利率，n为贷款年限。 */
}
