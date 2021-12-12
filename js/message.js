	/*<div id="sales">Купи меня! <input type="button" value="Купить" onclick="buy()" /></div>*/

var sales_div = document.getElementById("sales");
function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}
function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}
window.onload = function (){
 var bought=getCookie("bought");
 if (bought!=null && bought!=""){
  if(bought == 'true'){
   sales.innerHTML = 'Спасибо за покупку! <input type="button" value="Отменить покупку" onclick="cancel()" />';
  }
  else{
   sales.innerHTML = 'Купи меня! <input type="button" value="Купить" onclick="buy()" />';
  }
 }
}
function buy(){
sales.innerHTML = 'Спасибо за покупку! <input type="button" value="Отменить покупку" onclick="cancel()" />';
setCookie('bought', 'true', 5); //Тут ставите сколько дней у Вас доставка идет (здесь - 5 дней)
}
function cancel(){
sales.innerHTML = 'Купи меня! <input type="button" value="Купить" onclick="buy()" />';
setCookie('bought', 'true', -5); // -5 удаляет cookie
}
