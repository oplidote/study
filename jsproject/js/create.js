window.onload = function(){

    let bt = document.getElementById('bt');
    function create() {    
        
        let div = document.createElement('div');
        let p = document.createElement('p');
        let txt = document.createTextNode('javaScript');
        p.appendChild(txt);
        div.appendChild(p);
        document.body.appendChild(div);
            
    }
    bt.onclick = create;

}