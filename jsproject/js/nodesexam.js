window.onload = function () {
    
    let gnb = document.getElementById('gnb');
    console.log(gnb.parentNode);
    console.log(gnb.childNodes);
    console.log(gnb.childNodes[0]);
    console.log(gnb.childNodes[1]);
    console.log(gnb.childNodes[2]);
    console.clear();
    console.log(gnb.children);
    console.log(gnb.children[0].firstChild);
    console.log(gnb.children[0].children[0]);
    console.log(gnb.children[0].children[0].nextSibling);
    console.log(gnb.id);
    console.log(gnb.children[0].children[0].nextElementSibling);
    console.log(gnb.children[0].firstChild);
    console.log(gnb.children[0].firstChild.nodeValue);
    console.log(gnb.children[0].tagName);
    
    
}