
function check(){
document.getElementById('f1').innerHTML=document.myform.name.value;
document.getElementById('f2').innerHTML=document.myform.Address.value;
document.getElementById('f3').innerHTML=document.myform.EMail.value;
document.getElementById('f4').innerHTML=document.myform.Password.value;
document.getElementById('f5').innerHTML=document.myform.Telephone.value;
document.getElementById('f6').innerHTML=document.myform.Subject.value;
document.getElementById('f7').innerHTML=document.myform.Comment.value;



}

function myFunction() 
{
  document.getElementById('myform').reset();
}

