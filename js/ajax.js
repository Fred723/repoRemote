if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}

xhr.onreadystatechange = function()
{
    if(xhr.readystate == 4)
    {
        console.log(xhr.responseText);
    }
    else
    {

    }
}
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.send(null);