define(['./modA.js'], function(modA){
    function init() {
        console.log('<-- modC: ' + modA.getNum());
        modA.setNum(3);
        var num = modA.getNum();
        console.log('modC: ' + num + '-->');
    }
    
    return {
        init: init 
    }
})