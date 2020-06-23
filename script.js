var array =[]
var total = 0
var media = 0
var res = document.querySelector('#myres')
var fim
var list = document.querySelector('#addnum')
var numero = document.querySelector('#num')




function add(){
    
    res.innerHTML = "Logo saberá o resultado"
   

    
    var n = Number(numero.value)
  

    
if (n.length == 0||n < 1 ||n > 100|| array.indexOf(n) != -1){
    return (window.alert('O valor é inválido ou já existe'))
} else{
    
    
    var item = document.createElement('option')
    item.text = `O número ${n} foi adicionado corretamente`
    list.appendChild(item)
    array.push(n)
   


   }
 numero.value =""
 numero.focus()
}

function fim(){
if(array.length == 0||res.innerHTML != "Logo saberá o resultado"){
    window.alert('Adicione mais números')
}else{
    

    res.innerHTML =  `Ao todo, temos ${array.length} números cadastrados<br>`
    
    
   
   
   for(i in array){
       total += array[i]
media = total/array.length
      
   }
   var min = Math.min(...array)
   var max = Math.max(...array)
   res.innerHTML += `O valor total é ${total}<br>`
   res.innerHTML += `A média dos números é ${media}<br>`
   res.innerHTML += `O menor número é ${min}<br>`
  res.innerHTML +=  `O maior número é ${max}<br>`
}
}
function reset(){
    for(i = list.length;i >=0 ;i--){
    list.removeChild(list.firstChild)
    }
    res.innerHTML =""
    item.text =""
   
}





  
   
   
   


