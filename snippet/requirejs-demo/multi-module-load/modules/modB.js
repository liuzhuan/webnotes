define(['./modA.js'], function(modA){
    function init() {
        console.log('<-- modB: ' + modA.getNum());
        modA.setNum(2);
        var num = modA.getNum();
        console.log('modB: ' + num + '-->');
    }
    
    return {
        init: init 
    }
})