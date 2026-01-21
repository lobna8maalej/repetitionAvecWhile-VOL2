function multiplierpar10Nfois(num,n){
var result=num
while(n>0){
result=result*10;
n--;
    
}
return result
}

function comptercaractereAindex(string1,index,string2){
var result=0
var j=0;
while(index>=0){
var char=string1[index].toLowerCase();
var j=0;

while(j<string2.length){
if (string2[j].toLowerCase()===char){

    result++;
}
j++;
}
index--;

}

return result;
}

function inverserchaine(chaine){

const chaineinversee=chaine.split('').reverse().join('');

return chaineinversee;

}

function obtenirIndicede(chaine,caractere){

    var I=0
  var position=-1
while(I<chaine.length){
if(chaine[I]===caractere){
position=I;
break;
}; 
I++;

}
return position;
}



function sommepairs(nombre1,nombre2){

var result=0
while(nombre1<nombre2){
if(nombre1 %2===0){
result=result+nombre1

}
    nombre1++;
}

return result
}

