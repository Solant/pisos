var re = /[^\(\)\. :\*\"\'\n\?\,\-0-9]+/g;

document.title = document.title.split(re).join('pisos');

setInterval(pisos, 1000);

function pisos() {
    var list = document.querySelectorAll('h1,h2,h3,h4,h5,h6,code,p,span,a,td,th,b,li,div');
    var length = list.length;
    for (var i = length-1; i >= 0; i--) {
        var item = list.item(i);
        var text = item.textContent.trim();
        var isDiv = item.tagName == 'DIV';
        var childNodes = item.childNodes.length;
        if (text.indexOf('pisos') != 0 && text) {
            if (childNodes != 1 && isDiv) {
                continue;
            }
            item.textContent = item.textContent.split(re).join('pisos');
        }
    }
}
