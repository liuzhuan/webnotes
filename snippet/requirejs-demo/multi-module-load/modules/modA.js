define(function(){
    var num = 1;
    function getNum() {
        return num;
    }

    function setNum(n) {
        num = n;
    }

    return {
        getNum: getNum,
        setNum: setNum
    }
});