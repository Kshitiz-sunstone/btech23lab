function leap(){
    let data=document.getElementById('data').value
    let result=''
    if(((data%4==0)&&(data%100!=0))||(data%400==0)){
        result='Leap Year'
    }
    else{
        result='Not a leap year'
    }
    document.getElementById('result').innerHTML=result
}