let cart={};
$('document').ready(function(){
    loadShopcart();
});

function loadGoods() {
    //Загружаю товары на страницу
    $.getJSON('goods.json', function (data){
        let out='';
        for(let key in data){
            out+='<div class="single-goods">';
            out+='<h3>'+data[key]['name']+'</h3>';
            out+='<p>'Цена:'+data[key]['cost']+'</p>';
            out+='<img src="'+data[key].image+'">';
            out+='<button class="add-to-cart" data-art="'+key+'">Купить</button>';          
            out+='</div>';
            
        }
        $('#goods').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}

function addToCart() {
    //добавляем товар в корзину
    let articul=$(this).attr('data-art');
    if(cart[articul]=undefined){
        cart[articul]++;
    }
    else {
        cart[articul]=1;
        
    }
}