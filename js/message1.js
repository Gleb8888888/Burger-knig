<div id="sales">Купи меня! <input type="button" value="Купить" onclick="buy()" /></div>
<script>
var sales_div = document.getElementById("sales");
function buy(){
sales.innerHTML = 'Спасибо за покупку! <input type="button" value="Отменить покупку" onclick="cancel()" />';
}
function cancel(){
sales.innerHTML = 'Купи меня! <input type="button" value="Купить" onclick="buy()" />';
}
</script>

