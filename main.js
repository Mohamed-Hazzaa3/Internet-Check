let bttn=document.getElementById('bttn');
let title=document.querySelector('.title');
let ul = document.querySelector('ul');
window.onload=function(){
    if(window.navigator.onLine){
        online();
    }
    else{
        offline();
    }
}
window.addEventListener("online",function(){
    online();

});
window.addEventListener("offline",function(){
    offline();

});

bttn.onclick=function(){
    window.location.reload();
}




function online(){
    title.innerHTML = 'Online Now';
    ul.classList.add('hidden');
    title.style.color = 'green';
    bttn.classList.add('hidden')

    

}
function offline(){
    title.innerHtml=`Offline Now`;
    ul.classList.remove('hidden');
    bttn.classList.remove('hidden');
    title.style.color='#5a5656ef ';
}