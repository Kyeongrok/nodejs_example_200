
function getPower(value){
    value = value * value;
    if(value < 200){
        return value;
    } else{
        getPower(value);
    }
}

getPower(2);