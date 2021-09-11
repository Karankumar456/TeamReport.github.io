// Functions to increase and decrease the quantity of products in cart
function increment(textBoxId) {
    var textBox = document.getElementById(textBoxId);
    var textBoxValue = Number(textBox.value);
    textBoxValue++;
    textBox.value = textBoxValue;
}
function decrement(textBoxId) {
    var textBox = document.getElementById(textBoxId);
    var textBoxValue = Number(textBox.value);
    if (textBoxValue != 1) {
        textBoxValue--;
    }
    textBox.value = textBoxValue;
}
function showPrompt() {
    bootbox.confirm({
        message: "This is a confirm with custom button text and color! Do you like it?",
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            console.log('This was logged in the callback: ' + result);
        }
    });
}
// Code to open and close chatbot iframe
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function showOptionOfPayment(){
    var payOption = document.getElementById("select").value;
    if(payOption == "Online"){
        document.getElementById("onlinePay").style.display = "block";
    }else{
        document.getElementById("onlinePay").style.display = "none";
    }
}