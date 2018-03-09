document.write("Message from Javascript<br/>");
n=0;
do{
	n=prompt("Enter a number");
	if(checkPrime(n)){
		alert("Number is Prime");
		}
	else{
		alert("Number is not Prime");
		}

}while(confirm("Do you want to continue?"));
/******Function Defn**************/
function checkPrime(n){
for(i=2;i<=(n/2);i++){
	if(n%i==0){
		return false;
		}
	}
	return true;
}