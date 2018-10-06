function deleteItem(){
  return 0;
}

function getPriceByProduct(itemNode){
  var itemTotalPrice = itemNode.getElementsByClassName('total-price');
  var itemPrice = itemNode.getElementsByClassName('item-price');
  var itemQuantity = itemNode.getElementsByClassName('item-quantity');
  return itemTotalPrice[0].innerHTML=itemPrice[0].innerHTML * itemQuantity[0].value;
}


function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var wrapper = document.getElementsByClassName('wrapper');
  var totalPrice = document.getElementById('total-price');
  var sum=0;
  for(i=0;i<wrapper.length;i++){
    getPriceByProduct(wrapper[i]);
    sum += getPriceByProduct(wrapper[i]);
  }

  totalPrice.innerHTML='$'+sum;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

console.log(deleteItem);

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
