//  taking buttons inputs and all needed elements to manupulate dom


let buttons = document.querySelectorAll('.form-input');
let PriceBoxs = document.getElementsByClassName('price');
let pair1= document.getElementById('pair1');
let pair2= document.getElementById('pair2');
let pair3= document.getElementById('pair3');
let Item=document.querySelectorAll('.cart-items');
let Label=document.querySelectorAll('label');
let CartButton = document.getElementById('Cart-Btn');


// functions for taking values from radio buttons

function updateCartTotal(){
    let total=0;
    let Price = document.getElementsByClassName('item-price')[0]
    let PriceEle = parseFloat(Price.innerText.replace('$', ''))
    let quantity = buttons[0].name
    total = total + (PriceEle * quantity)
   document.getElementById('cart-total').innerText = '$' + total + '.00' +" "+ 'USD';

}
function updateChartTotal1() {
    let total = 0
    let Price = document.getElementsByClassName('item-price')[1]
    let PriceEle = parseFloat(Price.innerText.replace('$', ''))
    let quantity = buttons[1].name
    total = total + (PriceEle * quantity)
    document.getElementById('cart-total').innerText = '$' + total + '.00' +" "+ 'USD'
}
function updateChartTotal2() {
    let total = 0
    let Price = document.getElementsByClassName('item-price')[2]
    let PriceEle = parseFloat(Price.innerText.replace('$', ''))
    let quantity =  buttons[2].name
    total = total + (PriceEle * quantity)
    document.getElementById('cart-total').innerText = '$' + total + '.00' +" " +'USD'

}

// addEventListener  for radio button and submit buttons

let count = 0
buttons[0].addEventListener('change', () => {
    updateCartTotal()
    pair1.style.visibility ='visible';
    Item[0].style.border='2px solid #FF6B82';
    Item[1].style.border=' 1px solid #9f9f9f';
    Item[2].style.border=' 1px solid #9f9f9f';
    Item[0].style.backgroundColor=' #FFF9FA';
    Item[1].style.backgroundColor='#fff';
    Item[2].style.backgroundColor='#fff';
    Item[0].style.height='175px';
    Item[2].style.height='75px';
    Item[1].style.height='75px';
    pair2.style.visibility="hidden";
    pair3.style.visibility="hidden";
    // pair3.style.display="none";
    //    CartButton.addEventListener('click', () => {
    //     count += 1;
    //     CartButton.innerText = `${count} Items Added To Cart`;
    //     buttons.checked = false;
    //     count=0
    // })
});

buttons[1].addEventListener('change', () => {
    updateChartTotal1()
    pair2.style.visibility ='visible';
    Item[1].style.border='2px solid #FF6B82';
    Item[0].style.border=' 1px solid #9f9f9f';
    Item[2].style.border=' 1px solid #9f9f9f';
    Item[1].style.backgroundColor=' #FFF9FA';
    Item[0].style.backgroundColor='#fff';
    Item[2].style.backgroundColor='#fff';
    Item[1].style.height='175px';
    pair1.style.visibility="hidden";
    pair3.style.display ='none';
    // pair3.style.visibility="hidden";
    Item[0].style.height='75px';
    Item[2].style.height='75px';

   // CartButton.addEventListener('click', () => {
   //      count += 1;
   //      CartButton.innerText = `${count} Items Added To Cart`;
   //      buttons.checked = false;
   //      count=0
   //  })    
});
buttons[2].addEventListener('change', () => {
    updateChartTotal2()
    pair3.style.display='flex';
    pair3.style.visibility="visible";

    Item[2].style.border='2px solid #FF6B82';
    Item[1].style.border=' 1px solid #9f9f9f';
    Item[0].style.border=' 1px solid #9f9f9f';
    Item[2].style.backgroundColor=' #FFF9FA';
    Item[1].style.backgroundColor='#fff';
    Item[0].style.backgroundColor='#fff';
    Item[2].style.height='175px';
    pair2.style.visibility="hidden";
    pair1.style.visibility="hidden";
    Item[1].style.height='75px';
    Item[0].style.height='75px';

    // CartButton.addEventListener('click', () => {
    //     count += 1;
    //     CartButton.innerText = `${count} Items Added To Cart`;
    //     buttons.checked = false;
    //     count=0
    // })


});
