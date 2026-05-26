const qrcode= new QRCode(document.getElementById("qrcode"),{
    text:"https://rohaha007.github.io/code/",
    width:250,
    height:250,
    correctLevel:QRCode.CorrectLevel.H
})