let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


window.onload=()=>{
    let rWho = Math.floor(Math.random()*4),
        rAction= Math.floor(Math.random()*4),
        rWhat=Math.floor(Math.random()*3),
        rWhen= Math.floor(Math.random()*5);
    let h1= document.querySelector('h1')

    h1.textContent=`${who[rWho]} ${action[rAction]} ${what[rWhat]} ${when[rWhen]}`
}