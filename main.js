let tbody = document.querySelector('tbody');

let xml = new XMLHttpRequest(); //to je konstruktor funkcija koja pravi objekat sa puno metoda; to je jedna instanca ove klase. Ta klasa postoji u javascirptu

xml.open('get' , 'http://mysafeinfo.com/api/data?list=bestnovels&format=json');
xml.addEventListener('readystatechange' , function(){
    if (xml.readyState == 4 && xml.status == 200) { //200 oznacava OK. 4 oznacava kraj razgovora
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
        text += '<td>' + data[i].tt + '</td>';
        text += '<td>' + data[i].au + '</td>';
        text += '<td>' + data[i].yr + '</td>';
        text += '<td><a href = "https://en.wikipedia.org/wiki/'+ data[i].tt +'" class="btn btn-primary">Read More</a></td>';
        text += '</tr>';
    }
    tbody.innerHTML = text;
}


// setTimeout(function(){
//     console.log(xml.responseText)
// } , 4000);


