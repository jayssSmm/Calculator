const container=document.querySelector('.container')

const percent=document.createElement('button')
const clearAll=document.createElement('button')
const backspace=document.createElement('button')
const equal=document.createElement('button')

const one=document.createElement('button')
const two=document.createElement('button')
const three=document.createElement('button')
const four=document.createElement('button')
const five=document.createElement('button')
const six=document.createElement('button')
const seven=document.createElement('button')
const eight=document.createElement('button')
const nine=document.createElement('button')
const zero=document.createElement('button')
const plus=document.createElement('button')
const minus=document.createElement('button')
const slash=document.createElement('button')
const x=document.createElement('button')

const screen1=document.createElement('div')
const screen2=document.createElement('div')
const negation=document.createElement('button')
const decimal=document.createElement('button')

container.append(screen1)
container.append(screen2)
container.append(percent)
container.append(clearAll)
container.append(backspace)
container.append(equal)
container.append(one)
container.append(two)
container.append(three)
container.append(plus)
container.append(four)
container.append(five)
container.append(six)
container.append(minus)
container.append(seven)
container.append(eight)
container.append(nine)
container.append(slash)
container.append(negation)
container.append(zero)
container.append(decimal)
container.append(x)

one.setAttribute('class','btn')
two.setAttribute('class','btn')
three.setAttribute('class','btn')
four.setAttribute('class','btn')
five.setAttribute('class','btn')
six.setAttribute('class','btn')
seven.setAttribute('class','btn')
eight.setAttribute('class','btn')
nine.setAttribute('class','btn')
zero.setAttribute('class','btn')
plus.setAttribute('class','btn')
minus.setAttribute('class','btn')
slash.setAttribute('class','btn')
equal.setAttribute('class','btn')
x.setAttribute('class','btn')
negation.setAttribute('class','btn')
decimal.setAttribute('class','btn')
clearAll.setAttribute('class','btn')
backspace.setAttribute('class','btn')
percent.setAttribute('class','btn')

one.textContent='1'
two.textContent='2'
three.textContent='3'
four.textContent='4'
five.textContent='5'
six.textContent='6'
seven.textContent='7'
eight.textContent='8'
nine.textContent='9'
zero.textContent='0'
plus.textContent=' + '
minus.textContent=' - '
x.textContent=' X '
slash.textContent=' / '
equal.textContent=' = '
negation.textContent='  '
decimal.textContent='.'
backspace.textContent=' Backspace '
clearAll.textContent=' Clear '
percent.textContent=' % '

screen1.style.width='400px'
screen1.style.height='100px'
screen1.style.textAlign='right'
screen1.style.padding='30px'
screen1.style.boxSizing='border-box'

screen2.style.width='400px'
screen2.style.height='100px'
screen2.style.textAlign='right'
screen2.style.padding='30px'
screen2.style.boxSizing='border-box'

const btn=document.getElementsByClassName('btn')

container.style.width='400px'
container.style.height='700px'
container.style.border='1px solid black'
container.style.display='flex'
container.style.flexWrap='wrap'
container.style.margin='auto'

for (let i=0; i<btn.length;i++){
    btn[i].style.width='100px'
    btn[i].style.height='100px'
    btn[i].style.boxSizing='border-box'
    btn[i].style.padding = '0'
    btn[i].style.flexShrink='0'
}

//JS

const specialCharacter=['+','/','X','=','-','','%']
const specialCharacterElements=[plus,x,slash,minus,percent]

function firstValue(arr){
    let sum=''
    for (let i=0;i<arr.length;i++){
        if (arr[i]){
            sum+=arr[i]
            if (parseFloat(sum)) return sum
        }
    }
}

function operatorOnOff(a){
    for (let i=0;i<specialCharacterElements.length;i++){
        specialCharacterElements[i].disabled=a
    }
}

function operate(arr){
    let value=parseFloat(firstValue(arr))
    let value_holder=value
    let flag
    for (let i=0;i<arr.length;i++){
        if (specialCharacter.includes(arr[i])){
            if (arr[i]==='+') flag='add'
            else if (arr[i]==='-') flag='subtract'
            else if (arr[i]==='/') flag='divide'
            else if (arr[i]==='X') flag='multiply'
            else if (arr[i]==='%') flag='percent'
        }else{
            if (flag==='add') value+=parseFloat(arr[i])
            else if (flag==='subtract') value-=parseFloat(arr[i])
            else if (flag==='divide') value/=parseFloat(arr[i])
            else if (flag==='multiply') value*=parseFloat(arr[i])
            else if (flag==='percent') value*=parseFloat(arr[i])*.01
        }
    }
    if (arr[0]) return value
    else return value-value_holder
}


let arrString=''
let expression=[]
let value
let decimal_flag=false

container.addEventListener('click',(element)=>{
    let target=element.target.textContent
    arrString+=target
    arrString=arrString.replace(' Backspace ','')
    screen2.textContent=arrString

    if (target==' = '){
        expression=arrString.split(' ')

        value=operate(expression)

        screen2.textContent=value
        screen1.textContent=arrString
        arrString=value
        decimal_flag=false
        operatorOnOff(false)
    }
    else if(target==' Clear '){
        screen1.textContent=''
        screen2.textContent=''
        arrString=''
        decimal_flag=false
        operatorOnOff(false)
    }
    else if(target===' Backspace '){
        arrString=arrString.trim().slice(0,-1)
        screen2.textContent=arrString
    }
    else if(target==='.'){
        decimal_flag=true
    }
    else if (specialCharacter.includes(target.trim())){
        decimal_flag=false
        operatorOnOff(true)
    }else{
        operatorOnOff(false)
    }

    if (decimal_flag) decimal.disabled=true
    else decimal.disabled=false
})


container.addEventListener('keydown',(element)=>{
    switch (element.key){
        case '1':
            arrString+=1
            break
        case '2':
            arrString+=2
            break
        case '3':
            arrString+=3
            break
        case '4':
            arrString+=4
            break
        case '5':
            arrString+=5
            break
        case '6':
            arrString+=6
            break
        case '7':
            arrString+=7
            break
        case '8':
            arrString+=8
            break
        case '9':
            arrString+=9
            break
        case '0':
            arrString+=0
            break
    }
    screen2.textContent=arrString
    console.log(arrString)
})