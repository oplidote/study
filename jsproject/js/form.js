window.onload = function () {
    let form1 = document.form1;
    let form2 = document.form2;
    console.log(form1.search.placeholder);
    console.log(form2.subject.placeholder);
    console.log(form2.credit.placeholder);
    console.log(document.forms); // []
    console.log(document.forms[0]); // 
    console.log(document.forms[0].elements); // []
    console.log(document.forms[0].elements[0]); // 
    console.log(document.forms[0].elements[0].placeholder); // 
}