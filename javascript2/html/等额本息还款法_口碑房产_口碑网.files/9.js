//62.180.9
function exc_zuhe(fmobj,v){
	//var fmobj=document.calc1;
	if (fmobj.name=="calc1"){
				if (v==1){
         document.all.dx[0].disabled=true;
		 document.all.dx[1].checked=true;
		 document.all.dx[1].disabled=false;
         document.all.dx[2].disabled=false;
         document.all.dx[3].disabled=false;
         document.all.dx[4].disabled=false;
		}
		if (v==2){
        document.all.dx[0].disabled=false;
		document.all.dx[0].checked=true;
        document.all.dx[1].disabled=true;
        document.all.dx[2].disabled=true;
        document.all.dx[3].disabled=true;
        document.all.dx[4].disabled=true;
		}
		if (v==3){
	    document.all.dx[0].disabled=true;
		document.all.dx[1].checked=true;
        document.all.dx[1].disabled=false;
        document.all.dx[2].disabled=false;
        document.all.dx[3].disabled=false;
        document.all.dx[4].disabled=false;
		}
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

//��ʾ�ұߵıȽ�div
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


//��֤�Ƿ�Ϊ����
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
//2004��֮ǰ�ľ�����
lilv_array[1]=new Array;
lilv_array[1][1]=new Array;
lilv_array[1][2]=new Array;
lilv_array[1][1][5]=0.0477;//�̴� 1��5�� 4.77%
lilv_array[1][1][10]=0.0504;//�̴� 5-30�� 5.04%
lilv_array[1][2][5]=0.0360;//������ 1��5�� 3.60%
lilv_array[1][2][10]=0.0405;//������ 5-30�� 4.05%

//2005��	1�µ�������
lilv_array[2]=new Array;
lilv_array[2][1]=new Array;
lilv_array[2][2]=new Array;
lilv_array[2][1][5]=0.0495;//�̴� 1��5�� 4.95%
lilv_array[2][1][10]=0.0531;//�̴� 5-30�� 5.31%
lilv_array[2][2][5]=0.0378;//������ 1��5�� 3.78%
lilv_array[2][2][10]=0.0423;//������ 5-30�� 4.23%

//2006��	1�µ�����������
lilv_array[3]=new Array;
lilv_array[3][1]=new Array;
lilv_array[3][2]=new Array;
lilv_array[3][1][5]=0.0527;//�̴� 1��5�� 5.27%
lilv_array[3][1][10]=0.0551;//�̴� 5-30�� 5.51%
lilv_array[3][2][5]=0.0396;//������ 1��5�� 3.96%
lilv_array[3][2][10]=0.0441;//������ 5-30�� 4.41%
			
//2006��	1�µ�����������
lilv_array[4]=new Array;
lilv_array[4][1]=new Array;
lilv_array[4][2]=new Array;
lilv_array[4][1][5]=0.0527;//�̴� 1��5�� 5.27%
lilv_array[4][1][10]=0.0612;//�̴� 5-30�� 6.12%
lilv_array[4][2][5]= 0.0396;//������ 1��5�� 3.96%
lilv_array[4][2][10]=0.0441;//������ 5-30�� 4.41%

//2006��	4��28�յ�����������
lilv_array[5]=new Array;
lilv_array[5][1]=new Array;
lilv_array[5][2]=new Array;
lilv_array[5][1][5]=0.0551;//�̴� 1��5�� 5.51%
lilv_array[5][1][10]=0.0575;//�̴� 5-30�� 5.75%
lilv_array[5][2][5]= 0.0414;//������ 1��5�� 4.14%
lilv_array[5][2][10]=0.0459;//������ 5-30�� 4.59%

//2006��	4��28�յ�����������
lilv_array[6]=new Array;
lilv_array[6][1]=new Array;
lilv_array[6][2]=new Array;
lilv_array[6][1][5]=0.0612;//�̴� 1��5�� 6.12%
lilv_array[6][1][10]=0.0639;//�̴� 5-30�� 6.39%
lilv_array[6][2][5]= 0.0414;//������ 1��5�� 4.14%
lilv_array[6][2][10]=0.0459;//������ 5-30�� 4.59%

//2006��	8��19�յ�����������
lilv_array[7]=new Array;
lilv_array[7][1]=new Array;
lilv_array[7][2]=new Array;
lilv_array[7][1][5]=0.0551;//�̴� 1��5�� 5.51%
lilv_array[7][1][10]=0.0581;//�̴� 5-30�� 5.81%
lilv_array[7][2][5]= 0.0414;//������ 1��5�� 4.14%
lilv_array[7][2][10]=0.0459;//������ 5-30�� 4.59%

//2006��	8��19�յ�����������
lilv_array[8]=new Array;
lilv_array[8][1]=new Array;
lilv_array[8][2]=new Array;
lilv_array[8][1][5]=0.0648;//�̴� 1��5�� 6.48%
lilv_array[8][1][10]=0.0684;//�̴� 5-30�� 6.84%
lilv_array[8][2][5]= 0.0414;//������ 1��5�� 4.14%
lilv_array[8][2][10]=0.0459;//������ 5-30�� 4.59%


//2007��	3��18�յ�����������
lilv_array[9]=new Array;
lilv_array[9][1]=new Array;
lilv_array[9][2]=new Array;
lilv_array[9][1][5]=0.0574;//�̴� 1��5�� 5.74%
lilv_array[9][1][10]=0.0604;//�̴� 5-30�� 6.04%
lilv_array[9][2][5]=0.0432;//������ 1��5�� 4.32%
lilv_array[9][2][10]=0.0477;//������ 5-30�� 4.77%

//2007��	3��18�յ�����������
lilv_array[10]=new Array;
lilv_array[10][1]=new Array;
lilv_array[10][2]=new Array;
lilv_array[10][1][5]=0.0675;//�̴� 1��5�� 6.75%
lilv_array[10][1][10]=0.0711;//�̴� 5-30�� 7.11%
lilv_array[10][2][5]=0.0432;//������ 1��5�� 4.32%
lilv_array[10][2][10]=0.0477;//������ 5-30�� 4.77%


//2007��	5��19�յ�����������
lilv_array[11]=new Array;
lilv_array[11][1]=new Array;
lilv_array[11][2]=new Array;
lilv_array[11][1][5]=0.0589;//�̴� 1��5�� 5.89%
lilv_array[11][1][10]=0.0612;//�̴� 5-30�� 6.12%
lilv_array[11][2][5]=0.0441;//������ 1��5�� 4.41%%
lilv_array[11][2][10]=0.0486;//������ 5-30�� 4.86%%

//2007��	5��19�յ�����������
lilv_array[12]=new Array;
lilv_array[12][1]=new Array;
lilv_array[12][2]=new Array;
lilv_array[12][1][5]=0.0693;//�̴� 1��5�� 6.93%
lilv_array[12][1][10]=0.0720;//�̴� 5-30�� 7.20%
lilv_array[12][2][5]=0.0441;//������ 1��5�� 4.41%%
lilv_array[12][2][10]=0.0486;//������ 5-30�� 4.86%%




//2007��	7��21�յ�����������
lilv_array[13]=new Array;
lilv_array[13][1]=new Array;
lilv_array[13][2]=new Array;
lilv_array[13][1][5]=0.0612;//�̴� 1��5�� 6.12%
lilv_array[13][1][10]=0.0627;//�̴� 5-30�� 6.27%
lilv_array[13][2][5]=0.0450;//������ 1��5�� 4.5%
lilv_array[13][2][10]=0.0495;//������ 5-30�� 4.95%

//2007��	7��21�յ�����������
lilv_array[14]=new Array;
lilv_array[14][1]=new Array;
lilv_array[14][2]=new Array;
lilv_array[14][1][5]=0.0720;//�̴� 1��5�� 7.20%
lilv_array[14][1][10]=0.0738;//�̴� 5-30�� 7.38%
lilv_array[14][2][5]=0.0450;//������ 1��5�� 4.5%
lilv_array[14][2][10]=0.0495;//������ 5-30�� 4.95%


//2007��	8��22�յ�����������
lilv_array[15]=new Array;
lilv_array[15][1]=new Array;
lilv_array[15][2]=new Array;
lilv_array[15][1][5]=0.0627;//�̴� 1��5�� 6.27%
lilv_array[15][1][10]=0.0643;//�̴� 5-30�� 6.43%
lilv_array[15][2][5]=0.0459;//������ 1��5�� 4.59%
lilv_array[15][2][10]=0.0504;//������ 5-30�� 5.04%

//2007��	8��22�յ�����������
lilv_array[16]=new Array;
lilv_array[16][1]=new Array;
lilv_array[16][2]=new Array;
lilv_array[16][1][5]=0.0738;//�̴� 1��5�� 7.38%
lilv_array[16][1][10]=0.0756;//�̴� 5-30�� 7.56%
lilv_array[16][2][5]=0.0459;//������ 1��5�� 4.59%
lilv_array[16][2][10]=0.0504;//������ 5-30�� 5.04%


//2007��	9��15�յ�����������
lilv_array[17]=new Array;
lilv_array[17][1]=new Array;
lilv_array[17][2]=new Array;
lilv_array[17][1][5]=0.0650;//�̴� 1��5�� 6.50%
lilv_array[17][1][10]=0.0666;//�̴� 5-30�� 6.66%
lilv_array[17][2][5]=0.0477;//������ 1��5�� 4.77%
lilv_array[17][2][10]=0.0522;//������ 5-30�� 5.22%

//2007��	9��15�յ�����������
lilv_array[18]=new Array;
lilv_array[18][1]=new Array;
lilv_array[18][2]=new Array;
lilv_array[18][1][5]=0.0765;//�̴� 1��5�� 7.65%
lilv_array[18][1][10]=0.0783;//�̴� 5-30�� 7.83%
lilv_array[18][2][5]=0.0477;//������ 1��5�� 4.77%
lilv_array[18][2][10]=0.0522;//������ 5-30�� 5.22%


//2007��	12��21�յ�����������
lilv_array[19]=new Array;
lilv_array[19][1]=new Array;
lilv_array[19][2]=new Array;
lilv_array[19][1][5]=0.0658;//�̴� 1��5�� 6.58%
lilv_array[19][1][10]=0.0666;//�̴� 5-30�� 6.66%
lilv_array[19][2][5]=0.0477;//������ 1��5�� 4.77%
lilv_array[19][2][10]=0.0522;//������ 5-30�� 5.22%

//2007��	12��21�յ�����������
lilv_array[20]=new Array;
lilv_array[20][1]=new Array;
lilv_array[20][2]=new Array;
lilv_array[20][1][5]=0.0774;//�̴� 1��5�� 7.74%
lilv_array[20][1][10]=0.0783;//�̴� 5-30�� 7.83%
lilv_array[20][2][5]=0.0477;//������ 1��5�� 4.77%
lilv_array[20][2][10]=0.0522;//������ 5-30�� 5.22%



//������������� 2008.9.16�� 4.59% 5.13% 
//��ҵ�Դ������� 2008��	08.09.16������ 6.426% 6.579% 
lilv_array[21]=new Array;
lilv_array[21][1]=new Array;
lilv_array[21][2]=new Array;
lilv_array[21][1][5]=0.0658;//�̴� 1��5�� 6.58%
lilv_array[21][1][10]=0.0666;//�̴� 5-30�� 6.66%
lilv_array[21][2][5]=0.0477;//������ 1��5�� 4.77%
lilv_array[21][2][10]=0.0522;//������ 5-30�� 5.22%

//��ҵ�Դ������� 08.09.16������ 7.56% 7.74% 
lilv_array[22]=new Array;
lilv_array[22][1]=new Array;
lilv_array[22][2]=new Array;
lilv_array[22][1][5]=0.0756;//�̴� 1��5�� 7.56%
lilv_array[22][1][10]=0.0774;//�̴� 5-30�� 7.74% 
lilv_array[22][2][5]=0.0477;//������ 1��5�� 4.77%
lilv_array[22][2][10]=0.0522;//������ 5-30�� 5.22%

//������������� 2008.10.09�� 4.32% 4.86% 
//��ҵ�Դ������� 08.10.09������ 6.20% 6.35% 
lilv_array[23]=new Array;
lilv_array[23][1]=new Array;
lilv_array[23][2]=new Array;
lilv_array[23][1][5]=0.0620;//�̴� 1��5�� 6.20%
lilv_array[23][1][10]=0.0635;//�̴� 5-30�� 6.35% 
lilv_array[23][2][5]=0.0432;//������ 1��5�� 4.32%
lilv_array[23][2][10]=0.0486;//������ 5-30�� 4.86%

//��ҵ�Դ������� 08.10.09������ 8.02% 8.22% 
lilv_array[24]=new Array;
lilv_array[24][1]=new Array;
lilv_array[24][2]=new Array;
lilv_array[24][1][5]=0.0802;//�̴� 1��5�� 8.02%
lilv_array[24][1][10]=0.0822;//�̴� 5-30�� 8.22%
lilv_array[24][2][5]=0.0432;//������ 1��5�� 4.32%
lilv_array[24][2][10]=0.0486;//������ 5-30�� 4.86%

//��ҵ�Դ������� 08.10.09���׼ 7.29% 7.47% 
lilv_array[25]=new Array;
lilv_array[25][1]=new Array;
lilv_array[25][2]=new Array;
lilv_array[25][1][5]=0.0729;//�̴� 1��5�� 7.29%
lilv_array[25][1][10]=0.0747;//�̴� 5-30�� 7.47%
lilv_array[25][2][5]=0.0477;//������ 1��5�� 4.77%
lilv_array[25][2][10]=0.0522;//������ 5-30�� 5.22%

//2008.10.27�� ������������� ��ҵ�Դ�������
lilv_array[26]=new Array;
lilv_array[26][1]=new Array;
lilv_array[26][2]=new Array;
lilv_array[26][1][5]=0.0702;//�̴� 1��5�� 7.29%
lilv_array[26][1][10]=0.0720;//�̴� 5-30�� 7.47%
lilv_array[26][2][5]=0.0405;//������ 1��5�� 4.77%
lilv_array[26][2][10]=0.0459;//������ 5-30�� 5.22%

//2008.11.27�� ������������� ��ҵ�Դ�������
lilv_array[27]=new Array;
lilv_array[27][1]=new Array;
lilv_array[27][2]=new Array;
lilv_array[27][1][5]=0.0594;//�̴� 1��5�� 7.29%
lilv_array[27][1][10]=0.0612;//�̴� 5-30�� 7.47%
lilv_array[27][2][5]=0.0351;//������ 1��5�� 4.77%
lilv_array[27][2][10]=0.0405;//������ 5-30�� 5.22%

//2008.12.23�� ������������� ��ҵ�Դ�������
lilv_array[28]=new Array;
lilv_array[28][1]=new Array;
lilv_array[28][2]=new Array;
lilv_array[28][1][5]=0.0576;//�̴� 1��5�� 7.29%
lilv_array[28][1][10]=0.0594;//�̴� 5-30�� 7.47%
lilv_array[28][2][5]=0.0333;//������ 1��5�� 4.77%
lilv_array[28][2][10]=0.0387;//������ 5-30�� 5.22%

//�õ�����
function getlilv(lilv_class,type,years){
	var lilv_class = parseInt(lilv_class);
var lilv;
    if (years<=5){
            if(type==2){
             lilv = document.all.gjj1.value;
			}else{
			if(document.all.dx[1].checked){
               lilv = document.all.aj1.value;
			}
					if(document.all.dx[2].checked){
						lilv = document.all.jz1.value;
			}
					if(document.all.dx[3].checked){
						lilv = document.all.sf1.value;
			}
					if(document.all.dx[4].checked){
						lilv = document.all.xf1.value;
			}
			}
		// return lilv_array[lilv_class][type][5];
	}else{
		  if(type==2){
             lilv = document.all.gjj2.value;
			}else{
			if(document.all.dx[1].checked){
             lilv =  document.all.aj2.value;
			}
					if(document.all.dx[2].checked){
						lilv =  document.all.jz2.value;
			}
					if(document.all.dx[3].checked){
						lilv =  document.all.sf2.value;
			}
					if(document.all.dx[4].checked){
						lilv =  document.all.xf2.value;
			}
			}
	}
	return lilv/100;
}

//���𻹿���»����(����: ������ / �����ܶ� / �������·� / ���ǰ��0��length-1)
function getMonthMoney2(lilv,total,month,cur_month){
	var lilv_month = lilv / 12;//������
	//return total * lilv_month * Math.pow(1 + lilv_month, month) / ( Math.pow(1 + lilv_month, month) -1 );
	var benjin_money = total/month;
	return (total - benjin_money * cur_month) * lilv_month + benjin_money;

}


//��Ϣ������»����(����: ������/�����ܶ�/�������·�)
function getMonthMoney1(lilv,total,month){
	var lilv_month = lilv / 12;//������
	return total * lilv_month * Math.pow(1 + lilv_month, month) / ( Math.pow(1 + lilv_month, month) -1 );
}

function ext_total(fmobj){
	//var fmobj=document.calc1;
	//������»�����������
	while ((k=fmobj.month_money2.length-1)>=0){
		fmobj.month_money2.options.remove(k);
	}
	var years = fmobj.years.value;
	var month = fmobj.years.value * 12;

	fmobj.month1.value = month+"(��)";
	fmobj.month2.value = month+"(��)";
	if (fmobj.type.value == 3 ){
		//--  ����ʹ���(����ʹ���ļ��㣬ֻ����ҵ�����͹����������йأ��Ͱ������ܶ�����޹�)
			if (!reg_Num(fmobj.total_sy.value)){alert("����ʹ�������д�̴�����");fmobj.total_sy.focus();return false;}
			if (!reg_Num(fmobj.total_gjj.value)){alert("����ʹ�������д���������");fmobj.total_gjj.focus();return false;}
			if (fmobj.total_sy.value==null){fmobj.total_sy.value=0;}
			if (fmobj.total_gjj.value==null){fmobj.total_gjj.value=0;}
			var total_sy = fmobj.total_sy.value;
			var total_gjj = fmobj.total_gjj.value;
			fmobj.fangkuan_total1.value = "��";//�����ܶ�
			fmobj.fangkuan_total2.value = "��";//�����ܶ�
			fmobj.money_first1.value = 0;//���ڸ���
			fmobj.money_first2.value = 0;//���ڸ���

			//�����ܶ�
			var total_sy = parseInt(fmobj.total_sy.value);
			var total_gjj = parseInt(fmobj.total_gjj.value);
			var daikuan_total = total_sy + total_gjj;
			fmobj.daikuan_total1.value = daikuan_total;
			fmobj.daikuan_total2.value = daikuan_total;

			//�»���
			var lilv_sd = getlilv(fmobj.lilv.value,1, years);//�õ��̴�����
			var lilv_gjj = getlilv(fmobj.lilv.value,2, years);//�õ�����������

			//1.���𻹿�
				//�»���
				var all_total2 = 0;
				var month_money2 = "";
				for(j=0;j<month;j++) {
					//���ú�������: �����»����
					huankuan = getMonthMoney2(lilv_sd,total_sy,month,j) + getMonthMoney2(lilv_gjj,total_gjj,month,j);
					all_total2 += huankuan;
					huankuan = Math.round(huankuan*100)/100;
					//fmobj.month_money2.options[j] = new Option( (j+1) +"��," + huankuan + "(Ԫ)", huankuan);
					month_money2 += (j+1) +"��," + huankuan + "(Ԫ)\n";
				}
				fmobj.month_money2.value = month_money2;
				//�����ܶ�
				fmobj.all_total2.value = Math.round(all_total2*100)/100;
				//֧����Ϣ��
				fmobj.accrual2.value = Math.round( (all_total2 - daikuan_total) *100)/100;


			//2.��Ϣ����
				//�¾�����
				var month_money1 = getMonthMoney1(lilv_sd,total_sy,month) + getMonthMoney1(lilv_gjj,total_gjj,month);//���ú�������
				fmobj.month_money1.value = Math.round(month_money1*100)/100 + "(Ԫ)";
				//�����ܶ�
				var all_total1 = month_money1 * month;
				fmobj.all_total1.value = Math.round(all_total1*100)/100;
				//֧����Ϣ��
				fmobj.accrual1.value = Math.round( (all_total1 - daikuan_total) *100)/100;

	}else{
		//--  ��ҵ������������
			var lilv = getlilv(fmobj.lilv.value,fmobj.type.value, fmobj.years.value);//�õ�����
			if (fmobj.jisuan_radio[0].checked == true){
				//------------ ���ݵ����������
				if (!reg_Num(fmobj.price.value)){alert("����д����");fmobj.price.focus();return false;}
				if (!reg_Num(fmobj.sqm.value)){alert("����д���");fmobj.sqm.focus();return false;}

				//�����ܶ�
				var fangkuan_total = fmobj.price.value * fmobj.sqm.value;
				fmobj.fangkuan_total1.value = fangkuan_total;
				fmobj.fangkuan_total2.value = fangkuan_total;
				//�����ܶ�
				var daikuan_total = (fmobj.price.value * fmobj.sqm.value) * (fmobj.anjie.value/10);
				fmobj.daikuan_total1.value = daikuan_total;
				fmobj.daikuan_total2.value = daikuan_total;
				//���ڸ���
				var money_first = fangkuan_total - daikuan_total;
				fmobj.money_first1.value = money_first
				fmobj.money_first2.value = money_first;
			}else{
				//------------ ���ݴ����ܶ����
				if (fmobj.daikuan_total000.value.length==0){alert("����д�����ܶ�");fmobj.daikuan_total000.focus();return false;}

				//�����ܶ�
				fmobj.fangkuan_total1.value = "��";
				fmobj.fangkuan_total2.value = "��";
				//�����ܶ�
				var daikuan_total = fmobj.daikuan_total000.value;
				fmobj.daikuan_total1.value = daikuan_total;
				fmobj.daikuan_total2.value = daikuan_total;
				//���ڸ���
				fmobj.money_first1.value = 0;
				fmobj.money_first2.value = 0;
			}
			//1.���𻹿�
				//�»���
				var all_total2 = 0;
				var month_money2 = "";
				for(j=0;j<month;j++) {
					//���ú�������: �����»����
					huankuan = getMonthMoney2(lilv,daikuan_total,month,j);
					all_total2 += huankuan;
					huankuan = Math.round(huankuan*100)/100;
					//fmobj.month_money2.options[j] = new Option( (j+1) +"��," + huankuan + "(Ԫ)", huankuan);
					month_money2 += (j+1) +"��," + huankuan + "(Ԫ)\n";
				}
				fmobj.month_money2.value = month_money2;
				//�����ܶ�
				fmobj.all_total2.value = Math.round(all_total2*100)/100;
				//֧����Ϣ��
				fmobj.accrual2.value = Math.round( (all_total2 - daikuan_total) *100)/100;


			//2.��Ϣ����
				//�¾�����
				var month_money1 = getMonthMoney1(lilv,daikuan_total,month);//���ú�������
				fmobj.month_money1.value = Math.round(month_money1*100)/100 + "(Ԫ)";
				//�����ܶ�
				var all_total1 = month_money1 * month;
				fmobj.all_total1.value = Math.round(all_total1*100)/100;
				//֧����Ϣ��
				fmobj.accrual1.value = Math.round( (all_total1 - daikuan_total) *100)/100;

	}
}

//��ǰ���L����
function play(){
  if (document.tqhdjsq.dkzws.value==''){
       alert('����������ܶ�');
       return false;
  }else dkzys=parseFloat(document.tqhdjsq.dkzws.value)*10000;

  if(document.tqhdjsq.tqhkfs[1].checked && document.tqhdjsq.tqhkws.value==''){
    alert('�����벿����ǰ������');
    return false;
   }
  s_yhkqs=parseInt(document.tqhdjsq.yhkqs.value);

  //������

	if(document.tqhdjsq.dklx[0].checked){
		if (s_yhkqs>60){
			dklv=getlilv(document.tqhdjsq.lilv.value,2,10)/12; //�������������5������4.23%
		}else{
			dklv=getlilv(document.tqhdjsq.lilv.value,2,3)/12;  //�������������5��(��)����3.78%
		}
	}
	if(document.tqhdjsq.dklx[1].checked){
		if (s_yhkqs>60){
			dklv=getlilv(document.tqhdjsq.lilv.value,1,10)/12; //��ҵ�Դ�������5������5.31%
		}else{
			dklv=getlilv(document.tqhdjsq.lilv.value,1,3)/12; //��ҵ�Դ�������5��(��)����4.95%
		}
	}

  //�ѻ���������
  yhdkqs=(parseInt(document.tqhdjsq.tqhksjn.value)*12+parseInt(document.tqhdjsq.tqhksjy.value))-(parseInt(document.tqhdjsq.yhksjn.value)*12 + parseInt(document.tqhdjsq.yhksjy.value));

  if(yhdkqs<0 || yhdkqs>s_yhkqs){
    alert('Ԥ����ǰ����ʱ�����һ�λ���ʱ����ì�ܣ����ʵ');
    return false;
   }

  yhk=dkzys*(dklv*Math.pow((1+dklv),s_yhkqs))/(Math.pow((1+dklv),s_yhkqs)-1);
  yhkjssj=Math.floor((parseInt(document.tqhdjsq.yhksjn.value)*12+parseInt(document.tqhdjsq.yhksjy.value)+s_yhkqs-2)/12)+'��'+((parseInt(document.tqhdjsq.yhksjn.value)*12+parseInt(document.tqhdjsq.yhksjy.value)+s_yhkqs-2)%12+1)+'��';
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
         remark='������ǰ��������㹻������Ƿ���';
     }else{
	        yhbjs=yhbjs+yhk;
            byhk=yhk+tqhkys;
			if(document.tqhdjsq.clfs[0].checked){
			  yhbjs_temp=yhbjs+tqhkys;
              for(xdkqs=0;yhbjs_temp<=dkzys;xdkqs++) yhbjs_temp=yhbjs_temp+yhk-(dkzys-yhbjs_temp)*dklv;
			  xdkqs=xdkqs-1;
              xyhk=(dkzys-yhbjs-tqhkys)*(dklv*Math.pow((1+dklv),xdkqs))/(Math.pow((1+dklv),xdkqs)-1);
              jslx=yhk*s_yhkqs-yhdkys-byhk-xyhk*xdkqs;
			  xdkjssj=Math.floor((parseInt(document.tqhdjsq.tqhksjn.value)*12+parseInt(document.tqhdjsq.tqhksjy.value)+xdkqs-2)/12)+'��'+((parseInt(document.tqhdjsq.tqhksjn.value)*12+parseInt(document.tqhdjsq.tqhksjy.value)+xdkqs-2)%12+1)+'��'; 
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
    xdkjssj=document.tqhdjsq.tqhksjn.value+'��'+document.tqhdjsq.tqhksjy.value+'��';
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
