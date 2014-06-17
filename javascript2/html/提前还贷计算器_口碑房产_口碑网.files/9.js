//62.180.9
function exc_zuhe(fmobj,v){
	//var fmobj=document.calc1;
	if (fmobj.name=="calc1"){
		if (v==3){
			document.all.calc1_zuhe.style.display='block';
			fmobj.jisuan_radio[1].checked = true;
			exc_js(fmobj,2);
		}else{document.all.calc1_zuhe.style.display='none';}
	}else{
		if (v==3){
			document.all.calc2_zuhe.style.display='block';
			fmobj.jisuan_radio[1].checked = true;
			exc_js(fmobj,2);
		}else{document.all.calc2_zuhe.style.display='none';}
	}
}
function exc_js(fmobj,v){
	//var fmobj=document.calc1;
	if (fmobj.name=="calc1"){
		if (v==1){
			document.all.calc1_js_div1.style.display='block';
			document.all.calc1_js_div2.style.display='none';
			document.all.calc1_zuhe.style.display='none';
			fmobj.type.value=1;
		}else{
			document.all.calc1_js_div1.style.display='none';
			document.all.calc1_js_div2.style.display='block';
		}
	}else{
		if (v==1){
			document.all.calc2_js_div1.style.display='block';
			document.all.calc2_js_div2.style.display='none';
			document.all.calc2_zuhe.style.display='none';
			fmobj.type.value=1;
		}else{
			document.all.calc2_js_div1.style.display='none';
			document.all.calc2_js_div2.style.display='block';
		}
	}
}
function formReset(fmobj){
	//var fmobj=document.calc1;
	if (fmobj.name=="calc1"){
		document.all.calc1_js_div1.style.display='block';
		document.all.calc1_js_div2.style.display='none';
		document.all.calc1_zuhe.style.display='none';
		document.all.calc1_benjin.style.display='none';
	}else{
		document.all.calc2_js_div1.style.display='block';
		document.all.calc2_js_div2.style.display='none';
		document.all.calc2_zuhe.style.display='none';
		document.all.calc2_benxi.style.display='none';
	}
}

//显示右边的比较div
function showRightDiv(fmobj){
	if (ext_total(fmobj)==false){return;}
	//alert(document.calc1.month_money2.value);
	var a=window.open('','calc_win','status=yes,scrollbars=yes,resizable=yes,width=550,height=500,left=0,top=0')//790*520
	if (fmobj.name=="calc1"){
		document.calc1.target = "calc_win";
		document.calc1.submit();
	}else{
		document.calc2.target = "calc_win";
		document.calc2.submit();
	}

}


//验证是否为数字
function reg_Num(str){
	if (str.length==0){return false;}
	var Letters = "1234567890.";

	for (i=0;i<str.length;i++){
		var CheckChar = str.charAt(i);
		if (Letters.indexOf(CheckChar) == -1){return false;}
	}
	return true;
}

lilv_array=new Array;          
//2004年之前的旧利率
lilv_array[1]=new Array;
lilv_array[1][1]=new Array;
lilv_array[1][2]=new Array;
lilv_array[1][1][5]=0.0477;//商贷 1～5年 4.77%
lilv_array[1][1][10]=0.0504;//商贷 5-30年 5.04%
lilv_array[1][2][5]=0.0360;//公积金 1～5年 3.60%
lilv_array[1][2][10]=0.0405;//公积金 5-30年 4.05%

//2005年	1月的新利率
lilv_array[2]=new Array;
lilv_array[2][1]=new Array;
lilv_array[2][2]=new Array;
lilv_array[2][1][5]=0.0495;//商贷 1～5年 4.95%
lilv_array[2][1][10]=0.0531;//商贷 5-30年 5.31%
lilv_array[2][2][5]=0.0378;//公积金 1～5年 3.78%
lilv_array[2][2][10]=0.0423;//公积金 5-30年 4.23%

//2006年	1月的新利率下限
lilv_array[3]=new Array;
lilv_array[3][1]=new Array;
lilv_array[3][2]=new Array;
lilv_array[3][1][5]=0.0527;//商贷 1～5年 5.27%
lilv_array[3][1][10]=0.0551;//商贷 5-30年 5.51%
lilv_array[3][2][5]=0.0396;//公积金 1～5年 3.96%
lilv_array[3][2][10]=0.0441;//公积金 5-30年 4.41%
			
//2006年	1月的新利率上限
lilv_array[4]=new Array;
lilv_array[4][1]=new Array;
lilv_array[4][2]=new Array;
lilv_array[4][1][5]=0.0527;//商贷 1～5年 5.27%
lilv_array[4][1][10]=0.0612;//商贷 5-30年 6.12%
lilv_array[4][2][5]= 0.0396;//公积金 1～5年 3.96%
lilv_array[4][2][10]=0.0441;//公积金 5-30年 4.41%

//2006年	4月28日的新利率下限
lilv_array[5]=new Array;
lilv_array[5][1]=new Array;
lilv_array[5][2]=new Array;
lilv_array[5][1][5]=0.0551;//商贷 1～5年 5.51%
lilv_array[5][1][10]=0.0575;//商贷 5-30年 5.75%
lilv_array[5][2][5]= 0.0414;//公积金 1～5年 4.14%
lilv_array[5][2][10]=0.0459;//公积金 5-30年 4.59%

//2006年	4月28日的新利率上限
lilv_array[6]=new Array;
lilv_array[6][1]=new Array;
lilv_array[6][2]=new Array;
lilv_array[6][1][5]=0.0612;//商贷 1～5年 6.12%
lilv_array[6][1][10]=0.0639;//商贷 5-30年 6.39%
lilv_array[6][2][5]= 0.0414;//公积金 1～5年 4.14%
lilv_array[6][2][10]=0.0459;//公积金 5-30年 4.59%

//2006年	8月19日的新利率下限
lilv_array[7]=new Array;
lilv_array[7][1]=new Array;
lilv_array[7][2]=new Array;
lilv_array[7][1][5]=0.0551;//商贷 1～5年 5.51%
lilv_array[7][1][10]=0.0581;//商贷 5-30年 5.81%
lilv_array[7][2][5]= 0.0414;//公积金 1～5年 4.14%
lilv_array[7][2][10]=0.0459;//公积金 5-30年 4.59%

//2006年	8月19日的新利率上限
lilv_array[8]=new Array;
lilv_array[8][1]=new Array;
lilv_array[8][2]=new Array;
lilv_array[8][1][5]=0.0648;//商贷 1～5年 6.48%
lilv_array[8][1][10]=0.0684;//商贷 5-30年 6.84%
lilv_array[8][2][5]= 0.0414;//公积金 1～5年 4.14%
lilv_array[8][2][10]=0.0459;//公积金 5-30年 4.59%


//2007年	3月18日的新利率下限
lilv_array[9]=new Array;
lilv_array[9][1]=new Array;
lilv_array[9][2]=new Array;
lilv_array[9][1][5]=0.0574;//商贷 1～5年 5.74%
lilv_array[9][1][10]=0.0604;//商贷 5-30年 6.04%
lilv_array[9][2][5]=0.0432;//公积金 1～5年 4.32%
lilv_array[9][2][10]=0.0477;//公积金 5-30年 4.77%

//2007年	3月18日的新利率上限
lilv_array[10]=new Array;
lilv_array[10][1]=new Array;
lilv_array[10][2]=new Array;
lilv_array[10][1][5]=0.0675;//商贷 1～5年 6.75%
lilv_array[10][1][10]=0.0711;//商贷 5-30年 7.11%
lilv_array[10][2][5]=0.0432;//公积金 1～5年 4.32%
lilv_array[10][2][10]=0.0477;//公积金 5-30年 4.77%


//2007年	5月19日的新利率下限
lilv_array[11]=new Array;
lilv_array[11][1]=new Array;
lilv_array[11][2]=new Array;
lilv_array[11][1][5]=0.0589;//商贷 1～5年 5.89%
lilv_array[11][1][10]=0.0612;//商贷 5-30年 6.12%
lilv_array[11][2][5]=0.0441;//公积金 1～5年 4.41%%
lilv_array[11][2][10]=0.0486;//公积金 5-30年 4.86%%

//2007年	5月19日的新利率上限
lilv_array[12]=new Array;
lilv_array[12][1]=new Array;
lilv_array[12][2]=new Array;
lilv_array[12][1][5]=0.0693;//商贷 1～5年 6.93%
lilv_array[12][1][10]=0.0720;//商贷 5-30年 7.20%
lilv_array[12][2][5]=0.0441;//公积金 1～5年 4.41%%
lilv_array[12][2][10]=0.0486;//公积金 5-30年 4.86%%




//2007年	7月21日的新利率下限
lilv_array[13]=new Array;
lilv_array[13][1]=new Array;
lilv_array[13][2]=new Array;
lilv_array[13][1][5]=0.0612;//商贷 1～5年 6.12%
lilv_array[13][1][10]=0.0627;//商贷 5-30年 6.27%
lilv_array[13][2][5]=0.0450;//公积金 1～5年 4.5%
lilv_array[13][2][10]=0.0495;//公积金 5-30年 4.95%

//2007年	7月21日的新利率上限
lilv_array[14]=new Array;
lilv_array[14][1]=new Array;
lilv_array[14][2]=new Array;
lilv_array[14][1][5]=0.0720;//商贷 1～5年 7.20%
lilv_array[14][1][10]=0.0738;//商贷 5-30年 7.38%
lilv_array[14][2][5]=0.0450;//公积金 1～5年 4.5%
lilv_array[14][2][10]=0.0495;//公积金 5-30年 4.95%


//2007年	8月22日的新利率下限
lilv_array[15]=new Array;
lilv_array[15][1]=new Array;
lilv_array[15][2]=new Array;
lilv_array[15][1][5]=0.0627;//商贷 1～5年 6.27%
lilv_array[15][1][10]=0.0643;//商贷 5-30年 6.43%
lilv_array[15][2][5]=0.0459;//公积金 1～5年 4.59%
lilv_array[15][2][10]=0.0504;//公积金 5-30年 5.04%

//2007年	8月22日的新利率上限
lilv_array[16]=new Array;
lilv_array[16][1]=new Array;
lilv_array[16][2]=new Array;
lilv_array[16][1][5]=0.0738;//商贷 1～5年 7.38%
lilv_array[16][1][10]=0.0756;//商贷 5-30年 7.56%
lilv_array[16][2][5]=0.0459;//公积金 1～5年 4.59%
lilv_array[16][2][10]=0.0504;//公积金 5-30年 5.04%


//2007年	9月15日的新利率下限
lilv_array[17]=new Array;
lilv_array[17][1]=new Array;
lilv_array[17][2]=new Array;
lilv_array[17][1][5]=0.0650;//商贷 1～5年 6.50%
lilv_array[17][1][10]=0.0666;//商贷 5-30年 6.66%
lilv_array[17][2][5]=0.0477;//公积金 1～5年 4.77%
lilv_array[17][2][10]=0.0522;//公积金 5-30年 5.22%

//2007年	9月15日的新利率上限
lilv_array[18]=new Array;
lilv_array[18][1]=new Array;
lilv_array[18][2]=new Array;
lilv_array[18][1][5]=0.0765;//商贷 1～5年 7.65%
lilv_array[18][1][10]=0.0783;//商贷 5-30年 7.83%
lilv_array[18][2][5]=0.0477;//公积金 1～5年 4.77%
lilv_array[18][2][10]=0.0522;//公积金 5-30年 5.22%


//2007年	12月21日的新利率下限
lilv_array[19]=new Array;
lilv_array[19][1]=new Array;
lilv_array[19][2]=new Array;
lilv_array[19][1][5]=0.0658;//商贷 1～5年 6.58%
lilv_array[19][1][10]=0.0666;//商贷 5-30年 6.66%
lilv_array[19][2][5]=0.0477;//公积金 1～5年 4.77%
lilv_array[19][2][10]=0.0522;//公积金 5-30年 5.22%

//2007年	12月21日的新利率上限
lilv_array[20]=new Array;
lilv_array[20][1]=new Array;
lilv_array[20][2]=new Array;
lilv_array[20][1][5]=0.0774;//商贷 1～5年 7.74%
lilv_array[20][1][10]=0.0783;//商贷 5-30年 7.83%
lilv_array[20][2][5]=0.0477;//公积金 1～5年 4.77%
lilv_array[20][2][10]=0.0522;//公积金 5-30年 5.22%


//2007年	12月21日的新利率上限
lilv_array[21]=new Array;
lilv_array[21][1]=new Array;
lilv_array[21][2]=new Array;
lilv_array[21][1][5]=0.0756;//商贷 1～5年 7.74%
lilv_array[21][1][10]=0.0774;//商贷 5-30年 7.83%
lilv_array[21][2][5]=0.0459;//公积金 1～5年 4.77%
lilv_array[21][2][10]=0.0513;//公积金 5-30年 5.22%


//2008年	10月9日的新利率上限
lilv_array[22]=new Array;
lilv_array[22][1]=new Array;
lilv_array[22][2]=new Array;
lilv_array[22][1][5]=0.0729;//商贷 1～5年 7.74%
lilv_array[22][1][10]=0.0747;//商贷 5-30年 7.83%
lilv_array[22][2][5]=0.0432;//公积金 1～5年 4.77%
lilv_array[22][2][10]=0.0486;//公积金 5-30年 5.22%

//2008年	10月30日的新利率上限
lilv_array[23]=new Array;
lilv_array[23][1]=new Array;
lilv_array[23][2]=new Array;
lilv_array[23][1][5]=0.0702;//商贷 1～5年 7.74%
lilv_array[23][1][10]=0.0720;//商贷 5-30年 7.83%
lilv_array[23][2][5]=0.0405;//公积金 1～5年 4.77%
lilv_array[23][2][10]=0.0459;//公积金 5-30年 5.22%

//2008年	11月27日的新利率上限
lilv_array[24]=new Array;
lilv_array[24][1]=new Array;
lilv_array[24][2]=new Array;
lilv_array[24][1][5]=0.0594;//商贷 1～5年 7.74%
lilv_array[24][1][10]=0.0612;//商贷 5-30年 7.83%
lilv_array[24][2][5]=0.0351;//公积金 1～5年 4.77%
lilv_array[24][2][10]=0.0405;//公积金 5-30年 5.22%

//2008年	12月23日的新利率上限
lilv_array[25]=new Array;
lilv_array[25][1]=new Array;
lilv_array[25][2]=new Array;
lilv_array[25][1][5]=0.0576;//商贷 1～5年 7.74%
lilv_array[25][1][10]=0.0594;//商贷 5-30年 7.83%
lilv_array[25][2][5]=0.0333;//公积金 1～5年 4.77%
lilv_array[25][2][10]=0.0387;//公积金 5-30年 5.22%

//得到利率
function getlilv(lilv_class,type,years){
	var lilv_class = parseInt(lilv_class);
    if (years<=5){
		 return lilv_array[lilv_class][type][5];
	}else{
		return lilv_array[lilv_class][type][10];
	}
}

//本金还款的月还款额(参数: 年利率 / 贷款总额 / 贷款总月份 / 贷款当前月0～length-1)
function getMonthMoney2(lilv,total,month,cur_month){
	var lilv_month = lilv / 12;//月利率
	//return total * lilv_month * Math.pow(1 + lilv_month, month) / ( Math.pow(1 + lilv_month, month) -1 );
	var benjin_money = total/month;
	return (total - benjin_money * cur_month) * lilv_month + benjin_money;

}


//本息还款的月还款额(参数: 年利率/贷款总额/贷款总月份)
function getMonthMoney1(lilv,total,month){
	var lilv_month = lilv / 12;//月利率
	return total * lilv_month * Math.pow(1 + lilv_month, month) / ( Math.pow(1 + lilv_month, month) -1 );
}

function ext_total(fmobj){
	//var fmobj=document.calc1;
	//先清空月还款数下拉框
	while ((k=fmobj.month_money2.length-1)>=0){
		fmobj.month_money2.options.remove(k);
	}
	var years = fmobj.years.value;
	var month = fmobj.years.value * 12;

	fmobj.month1.value = month+"(月)";
	fmobj.month2.value = month+"(月)";
	if (fmobj.type.value == 3 ){
		//--  组合型贷款(组合型贷款的计算，只和商业贷款额、和公积金贷款额有关，和按贷款总额计算无关)
			if (!reg_Num(fmobj.total_sy.value)){alert("混合型贷款请填写商贷比例");fmobj.total_sy.focus();return false;}
			if (!reg_Num(fmobj.total_gjj.value)){alert("混合型贷款请填写公积金比例");fmobj.total_gjj.focus();return false;}
			if (fmobj.total_sy.value==null){fmobj.total_sy.value=0;}
			if (fmobj.total_gjj.value==null){fmobj.total_gjj.value=0;}
			var total_sy = fmobj.total_sy.value;
			var total_gjj = fmobj.total_gjj.value;
			fmobj.fangkuan_total1.value = "略";//房款总额
			fmobj.fangkuan_total2.value = "略";//房款总额
			fmobj.money_first1.value = 0;//首期付款
			fmobj.money_first2.value = 0;//首期付款

			//贷款总额
			var total_sy = parseInt(fmobj.total_sy.value);
			var total_gjj = parseInt(fmobj.total_gjj.value);
			var daikuan_total = total_sy + total_gjj;
			fmobj.daikuan_total1.value = daikuan_total;
			fmobj.daikuan_total2.value = daikuan_total;

			//月还款
			var lilv_sd = getlilv(fmobj.lilv.value,1, years);//得到商贷利率
			var lilv_gjj = getlilv(fmobj.lilv.value,2, years);//得到公积金利率

			//1.本金还款
				//月还款
				var all_total2 = 0;
				var month_money2 = "";
				for(j=0;j<month;j++) {
					//调用函数计算: 本金月还款额
					huankuan = getMonthMoney2(lilv_sd,total_sy,month,j) + getMonthMoney2(lilv_gjj,total_gjj,month,j);
					all_total2 += huankuan;
					huankuan = Math.round(huankuan*100)/100;
					//fmobj.month_money2.options[j] = new Option( (j+1) +"月," + huankuan + "(元)", huankuan);
					month_money2 += (j+1) +"月," + huankuan + "(元)\n";
				}
				fmobj.month_money2.value = month_money2;
				//还款总额
				fmobj.all_total2.value = Math.round(all_total2*100)/100;
				//支付利息款
				fmobj.accrual2.value = Math.round( (all_total2 - daikuan_total) *100)/100;


			//2.本息还款
				//月均还款
				var month_money1 = getMonthMoney1(lilv_sd,total_sy,month) + getMonthMoney1(lilv_gjj,total_gjj,month);//调用函数计算
				fmobj.month_money1.value = Math.round(month_money1*100)/100 + "(元)";
				//还款总额
				var all_total1 = month_money1 * month;
				fmobj.all_total1.value = Math.round(all_total1*100)/100;
				//支付利息款
				fmobj.accrual1.value = Math.round( (all_total1 - daikuan_total) *100)/100;

	}else{
		//--  商业贷款、公积金贷款
			var lilv = getlilv(fmobj.lilv.value,fmobj.type.value, fmobj.years.value);//得到利率
			if (fmobj.jisuan_radio[0].checked == true){
				//------------ 根据单价面积计算
				if (!reg_Num(fmobj.price.value)){alert("请填写单价");fmobj.price.focus();return false;}
				if (!reg_Num(fmobj.sqm.value)){alert("请填写面积");fmobj.sqm.focus();return false;}

				//房款总额
				var fangkuan_total = fmobj.price.value * fmobj.sqm.value;
				fmobj.fangkuan_total1.value = fangkuan_total;
				fmobj.fangkuan_total2.value = fangkuan_total;
				//贷款总额
				var daikuan_total = (fmobj.price.value * fmobj.sqm.value) * (fmobj.anjie.value/10);
				fmobj.daikuan_total1.value = daikuan_total;
				fmobj.daikuan_total2.value = daikuan_total;
				//首期付款
				var money_first = fangkuan_total - daikuan_total;
				fmobj.money_first1.value = money_first
				fmobj.money_first2.value = money_first;
			}else{
				//------------ 根据贷款总额计算
				if (fmobj.daikuan_total000.value.length==0){alert("请填写贷款总额");fmobj.daikuan_total000.focus();return false;}

				//房款总额
				fmobj.fangkuan_total1.value = "略";
				fmobj.fangkuan_total2.value = "略";
				//贷款总额
				var daikuan_total = fmobj.daikuan_total000.value;
				fmobj.daikuan_total1.value = daikuan_total;
				fmobj.daikuan_total2.value = daikuan_total;
				//首期付款
				fmobj.money_first1.value = 0;
				fmobj.money_first2.value = 0;
			}
			//1.本金还款
				//月还款
				var all_total2 = 0;
				var month_money2 = "";
				for(j=0;j<month;j++) {
					//调用函数计算: 本金月还款额
					huankuan = getMonthMoney2(lilv,daikuan_total,month,j);
					all_total2 += huankuan;
					huankuan = Math.round(huankuan*100)/100;
					//fmobj.month_money2.options[j] = new Option( (j+1) +"月," + huankuan + "(元)", huankuan);
					month_money2 += (j+1) +"月," + huankuan + "(元)\n";
				}
				fmobj.month_money2.value = month_money2;
				//还款总额
				fmobj.all_total2.value = Math.round(all_total2*100)/100;
				//支付利息款
				fmobj.accrual2.value = Math.round( (all_total2 - daikuan_total) *100)/100;


			//2.本息还款
				//月均还款
				var month_money1 = getMonthMoney1(lilv,daikuan_total,month);//调用函数计算
				fmobj.month_money1.value = Math.round(month_money1*100)/100 + "(元)";
				//还款总额
				var all_total1 = month_money1 * month;
				fmobj.all_total1.value = Math.round(all_total1*100)/100;
				//支付利息款
				fmobj.accrual1.value = Math.round( (all_total1 - daikuan_total) *100)/100;

	}
}

//提前还歀计算
function play(){
  if (document.tqhdjsq.dkzws.value==''){
       alert('请填入贷款总额');
       return false;
  }else dkzys=parseFloat(document.tqhdjsq.dkzws.value)*10000;

  if(document.tqhdjsq.tqhkfs[1].checked && document.tqhdjsq.tqhkws.value==''){
    alert('请填入部分提前还款额度');
    return false;
   }
  s_yhkqs=parseInt(document.tqhdjsq.yhkqs.value);

  //月利率

	if(document.tqhdjsq.dklx[0].checked){
		if (s_yhkqs>60){
			dklv=getlilv(document.tqhdjsq.dklv_class.value,2,10)/12; //公积金贷款利率5年以上4.23%
		}else{
			dklv=getlilv(document.tqhdjsq.dklv_class.value,2,3)/12;  //公积金贷款利率5年(含)以下3.78%
		}
	}
	if(document.tqhdjsq.dklx[1].checked){
		if (s_yhkqs>60){
			dklv=getlilv(document.tqhdjsq.dklv_class.value,1,10)/12; //商业性贷款利率5年以上5.31%
		}else{
			dklv=getlilv(document.tqhdjsq.dklv_class.value,1,3)/12; //商业性贷款利率5年(含)以下4.95%
		}
	}

  //已还贷款期数
  yhdkqs=(parseInt(document.tqhdjsq.tqhksjn.value)*12+parseInt(document.tqhdjsq.tqhksjy.value))-(parseInt(document.tqhdjsq.yhksjn.value)*12 + parseInt(document.tqhdjsq.yhksjy.value));

  if(yhdkqs<0 || yhdkqs>s_yhkqs){
    alert('预计提前还款时间与第一次还款时间有矛盾，请查实');
    return false;
   }

  yhk=dkzys*(dklv*Math.pow((1+dklv),s_yhkqs))/(Math.pow((1+dklv),s_yhkqs)-1);
  yhkjssj=Math.floor((parseInt(document.tqhdjsq.yhksjn.value)*12+parseInt(document.tqhdjsq.yhksjy.value)+s_yhkqs-2)/12)+'年'+((parseInt(document.tqhdjsq.yhksjn.value)*12+parseInt(document.tqhdjsq.yhksjy.value)+s_yhkqs-2)%12+1)+'月';
  yhdkys=yhk*yhdkqs;

  yhlxs=0;
  yhbjs=0;
  for(i=1;i<=yhdkqs;i++){
     yhlxs=yhlxs+(dkzys-yhbjs)*dklv;
     yhbjs=yhbjs+yhk-(dkzys-yhbjs)*dklv;
   }

  remark='';
  if(document.tqhdjsq.tqhkfs[1].checked){
    tqhkys=parseInt(document.tqhdjsq.tqhkws.value)*10000;
     if(tqhkys+yhk>=(dkzys-yhbjs)*(1+dklv)){
         remark='您的提前还款额已足够还清所欠贷款！';
     }else{
	        yhbjs=yhbjs+yhk;
            byhk=yhk+tqhkys;
			if(document.tqhdjsq.clfs[0].checked){
			  yhbjs_temp=yhbjs+tqhkys;
              for(xdkqs=0;yhbjs_temp<=dkzys;xdkqs++) yhbjs_temp=yhbjs_temp+yhk-(dkzys-yhbjs_temp)*dklv;
			  xdkqs=xdkqs-1;
              xyhk=(dkzys-yhbjs-tqhkys)*(dklv*Math.pow((1+dklv),xdkqs))/(Math.pow((1+dklv),xdkqs)-1);
              jslx=yhk*s_yhkqs-yhdkys-byhk-xyhk*xdkqs;
			  xdkjssj=Math.floor((parseInt(document.tqhdjsq.tqhksjn.value)*12+parseInt(document.tqhdjsq.tqhksjy.value)+xdkqs-2)/12)+'年'+((parseInt(document.tqhdjsq.tqhksjn.value)*12+parseInt(document.tqhdjsq.tqhksjy.value)+xdkqs-2)%12+1)+'月'; 
             }else{
		       xyhk=(dkzys-yhbjs-tqhkys)*(dklv*Math.pow((1+dklv),(s_yhkqs-yhdkqs)))/(Math.pow((1+dklv),(s_yhkqs-yhdkqs))-1);
               jslx=yhk*s_yhkqs-yhdkys-byhk-xyhk*(s_yhkqs-yhdkqs);
			   xdkjssj=yhkjssj;
			  }
       }
   }

  if(document.tqhdjsq.tqhkfs[0].checked || remark!=''){
    byhk=(dkzys-yhbjs)*(1+dklv);
    xyhk=0;
    jslx=yhk*s_yhkqs-yhdkys-byhk;
    xdkjssj=document.tqhdjsq.tqhksjn.value+'年'+document.tqhdjsq.tqhksjy.value+'月';
	}

  document.tqhdjsq.ykhke.value=Math.round(yhk*100)/100;
  document.tqhdjsq.yhkze.value=Math.round(yhdkys*100)/100;
  document.tqhdjsq.yhlxe.value=Math.round(yhlxs*100)/100;
  document.tqhdjsq.gyyihke.value=Math.round(byhk*100)/100;
  document.tqhdjsq.xyqyhke.value=Math.round(xyhk*100)/100;
  document.tqhdjsq.jslxzc.value=Math.round(jslx*100)/100;
  document.tqhdjsq.yzhhkq.value=yhkjssj;
  document.tqhdjsq.xdzhhkq.value=xdkjssj;
  document.tqhdjsq.jsjgts.value=remark;
}