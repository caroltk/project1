function sum(arr){
    var total = 0;
    for(let i=0; i<arr.length; i++)
    {
        total += arr[i];
    }
    return total
}

function multiple(a, b)
{
    return a*b;
}

function minus(a, b)
{
    return a-b;
}

function compare(a, b)
{
    if(a>b)
    {
        return 1
    }
    else{
        return -1
    }
}

function add(a,b){
    return a+b;
}