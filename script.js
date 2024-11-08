function firstWord(s){
    if(!s.trim()){
        return ' ';
    }
    let str=s.trim();
    let firstword='';
    for(let i=0;i<s.length;i++){
        if(str[i]===' '){
            return firstword;
        }
        firstword+=str[i];
    }
   return firstword;
}

const s = prompt("Enter String:");
alert(firstWord(s));
