'use strict';
 
 var base_deal = function(num){
	
	var reg = /\.[0]+$/;
	if(reg.test(num)){	
		num = parseFloat(num).toFixed(1);
	}
	return num;
  }

 
 var deal_int = function (num){
	
	num = num.toString();
	var temp = "";
	
	for(var i = num.length-1;i>=3;i-=3){
		temp = ","+num[i-2]+""+num[i-1]+""+num[i] +""+ temp;	
	}
	
	temp =(num[i-2]?num[i-2]:"")+ (num[i-1]?num[i-1]:"")+(num[i]?num[i]:"")+temp;
	return temp;
  }

function thousands_separators(num) {
  
	num = base_deal(num).toString();

	var nums = num.split(".");
	var part_int = nums[0];
	var part_float = nums[1]?nums[1]:"";

	part_int = deal_int(part_int);
	
	num = part_int +"." +part_float;

	return num;
}

module.exports = thousands_separators;
