function isSameType(value1, value2) {
  //your js code here
	if(typeof value1===typeof value2){
		return true;
	}
	else{
		return false;
	}
}

//do not change the code below.
let value1 = 12
let value2 = "1"
alert(isSameType(value1, value2));


