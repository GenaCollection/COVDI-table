async function covid(){
    let request = await fetch('https://api.covidtracking.com/v1/states/ca/daily.json')
    let covidArr = await request.json()
    let tab = document.getElementById('tab')
    covidArr.slice(0,20).map(obj =>{
        tab.innerHTML += `<tr><td>${obj.date.toString().substring(7,8)+'-' +obj.date.toString().substring(5,6) + '-'+obj.date.toString().substring(0,4)}</td><td>${obj.total}</td><td>${obj.death}</td><td>${obj.positive}</td><td id ='neg'>${obj.negative?1:0}</td></tr>`
    } )
}

covid()