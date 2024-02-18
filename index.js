function go(){
    var value  = document.querySelector("input").value;
    if(value)
    var qr = new QRious({
        size: 150,
        element: document.getElementById('qr'),
        value: value
    });
}