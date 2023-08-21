let sum = 0;

function inputValue(priceOfProduct) {

    const getValue = parseFloat(document.getElementById(priceOfProduct).innerText);

    sum += getValue;
 
    if(sum >= 200)
    {
        
        document.getElementById('submit').disabled = false;
        document.getElementById('submit').style.backgroundColor = '#E527B2';
    
    }
    else{
        document.getElementById('submit').disabled = true;
        document.getElementById('submit').style.backgroundColor = "#AAAAAA";
    }


    if(sum > 0)
    {
        document.getElementById('purchaseId').disabled = false;
        document.getElementById('purchaseId').style.backgroundColor = '#E527B2';
       
    }
    else{
        document.getElementById('purchaseId').disabled = true;
        document.getElementById('purchaseId').style.backgroundColor = "#AAAAAA";
    }
 
    document.getElementById('totalPrice').innerText = sum.toFixed(2);
}

let count = 0;
function cardNameText(productList) {
    count++;
    const li = document.createElement('li');
    li.classList.add('getClass');
    li.innerText = count + '. ' + document.getElementById(productList).innerText;
    document.getElementById('cartProuctList').appendChild(li);
}


function cardOneClick() {
    inputValue('1stAcessoriesPrice');
    cardNameText('card1');
}
function cardTwoClick() {
    inputValue('2ndAcessoriesPrice');
    cardNameText('card2')
}
function cardThreeClick() {
    inputValue('3rdAcessoriesPrice');
    cardNameText('card3')
}
function cardFourClick() {
    inputValue('4thAcessoriesPrice');
    cardNameText('card4')
}
function cardFiveClick() {
    inputValue('5thAcessoriesPrice');
    cardNameText('card5')
}
function cardSixClick() {
    inputValue('6thAcessoriesPrice');
    cardNameText('card6')
}
function cardSevenClick() {
    inputValue('7thAcessoriesPrice');
    cardNameText('card7')
}
function cardEightClick() {
    inputValue('8thAcessoriesPrice');
    cardNameText('card8')
}
function cardNineClick() {
    inputValue('9thAcessoriesPrice');
    cardNameText('card9')
}

function applyBtn() {
    const coupon = document.getElementById('coupon');

    if(coupon.value == 'SELL200')
    {
        let totalprice =  parseFloat(document.getElementById('totalPrice').innerText);
        let discount = totalprice*0.2
        
        document.getElementById('discount').innerText = discount.toFixed(2);
        document.getElementById('total').innerText = (totalprice.toFixed(2) - discount.toFixed(2)).toFixed(2);
    }

    coupon.value = '';
}

function goHome()
{
    const deleteButtons = document.querySelectorAll('.getClass');

    for(const deleteButton of deleteButtons){
        deleteButton.remove();
    }

    document.getElementById('totalPrice').innerText = '00.00';
    document.getElementById('discount').innerText = '00.00';
    document.getElementById('total').innerText = '00.00';
    sum = 0;
    count = 0;

}