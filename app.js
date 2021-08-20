let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


window.onload=()=>{
    let rWho = Math.floor(Math.random()*who.length),
        rAction= Math.floor(Math.random()*action.length),
        rWhat=Math.floor(Math.random()*what.length),
        rWhen= Math.floor(Math.random()*when.length);
    let h1= document.querySelector('h1')

    h1.textContent=`${who[rWho]} ${action[rAction]} ${what[rWhat]} ${when[rWhen]}`
}

