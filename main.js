let tbody = document.querySelector('tbody');

let xml = new XMLHttpRequest();

xml.open('get' , 'http://mysafeinfo.com/api/data?list=bestnovels&format=json');
xml.addEventListener('readystatechange' , function(){
    if (xml.readyState == 4 && xml.status == 200) {
        display();        
    }
})
xml.send();


function display(){
    console.log(xml.responseText);
    let data = JSON.parse(xml.responseText);
    // console.log(data);
    
    let text = "";
    for (let i = 0; i <data.length; i++) {   
        text += '<tr>';
        text += '<td>' + i + '</td>';
        text += '<td>' + data[i].Title + '</td>';
        text += '<td>' + data[i].Author + '</td>';
        text += '<td>' + data[i].Published + '</td>';
        text += '<td><a href = "https://en.wikipedia.org/wiki/'+ data[i].tt +'" class="btn btn-primary">Read More</a></td>';
        text += '</tr>';
    }
    tbody.innerHTML = text;
}
