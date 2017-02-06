require(['./modules/modB.js', './modules/modC.js'], function(modB, modC){
    console.log('Hello Require.js!');
    modB.init();
    modC.init();
})