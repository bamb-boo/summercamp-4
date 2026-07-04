const btn = document.getElementById('btn'); 

btn.addEventListener('click', function() { 
    var change = document.getElementsByClassName('light'); 
    if (document.querySelectorAll('.light')[0].classList.contains('darkmode')) {
        alert("who even are you, using light mode. i give u pain by making you refresh the page to get light mode again. hahaha. darkmode forever")
    }
    else {
    for (var i = 0; i < change.length; i++) { 
        change[i].classList.add('darkmode'); 
    }}
});

const sub=document.getElementById("submit");
const name=document.getElementById("namesubmit");
sub.addEventListener("click", function(){
    alert("hello " + name.value)
})
name.addEventListener("keydown", function(event){
    if (event.key=="Enter"){
        sub.click();
    }
})