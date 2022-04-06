function init(){
//add your javascrip between these two lines of code
 var alrt = document.getElementById('entrybutton');
 var inpt = document.getElementById('entryinput');
 var shwtxt = document.getElementById('textoutput');
 function fun(){
  console.log('click');
  alert('Maksym Fortelnyy: ' + inpt.value);
  shwtxt.innerHTML = inpt.value;}
  
 alrt.addEventListener('click',fun);
}
window.addEventListener('load', init);