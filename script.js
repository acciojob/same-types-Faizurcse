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

alert(isSameType(1, 3));
alert(isSameType("hey", "hello"));
alert(isSameType(NaN, NaN));
alert(isSameType("3", 3));
alert(isSameType("3", NaN));



