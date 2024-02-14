function fact(){
    let data= document.getElementById('data').value;
    let f=1
    for (let i = data; i > 0; i--) {
        f*=i
    }
    document.getElementById('result').innerHTML=f
}