// // fetch('https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json')
// // .then((res)=>res.json())
// // .then((msg)=>msg[0])

// const data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const ans = '';
//         if(ans){
//             resolve(ans)
//         }
//         else{
//             reject('No Data Present');
//         }

//     }, 5000);
    
// })

// data
// .then((name)=>{
//     console.log(name)

// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{});

// const cityName = document.getElementById('cityname');
// const button = document.getElementById('btn');
// const city = document.getElementById('city');

// button.addEventListener('click',getCityName);

// function getCityName(){
//     city.innerHTML = cityName.value;


// const cityValue = cityName.value

// fetch("https://geocoding-api.open-meteo.com/v1/search?name=${(cityValue)}&count=1&language=en&format=json")
// .then(response =>{
//     if(response.ok){
//         return response.json();
//     }
//     else{
//         alert ('Not response')
//     }
// })
// .then(data =>{
//     console.log(data);

//     const result = data.results[0];
//     const latitude = result.latitude;
//     console.log(latitude) 
//     const longitude = result.longitude
//     console.log(longitude)
//     return fetch('https://api.open-meteo.com/v1/forecast?latitude=${(latitude)}&longitude=${(longitude)}&hourly=temperature_2m')

// })
// .then(temp =>{
//     if(temp.ok){
//         return temp.json();
//     }
//     else{
//         alert ('Not response')
//     }
// })    
// .then(temp =>{
//     console.log(temp)
//     const tempValue = temp.hourly.temperature_2m[0];
//     console.log(tempValue)
//     document.getElementById('temp').innerHTML = tempValue
// })


// }







// const latitude = result.latitude;
// console.log(latitude)




const cityName = document.getElementById('cityname');
const button = document.getElementById('btn');
const city = document.getElementById('city');

button.addEventListener('click', getCityData);

function getCityData() {
    const cityValue = cityName.value;
    document.getElementById('city').innerHTML = cityValue

    // Fetch city data
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityValue}&count=1&language=en&format=json`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert ('Enter The Corract Name');
            }
        })
        .then(data => {
            console.log(data);
            
            const result = data.results[0];
            const latitude = result.latitude;
            console.log(latitude)
            const longitude = result.longitude;

        
            return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
        })
        .then(tempResponse => {
            if (tempResponse.ok) {
                return tempResponse.json();
            } else {
                alert ('Enter Corract Name');
            }
        })
        .then(tempData => {
            console.log(tempData);
            const tempValue = tempData.hourly.temperature_2m[0];
            console.log(tempValue);
            document.getElementById('temp').innerHTML = tempValue+"°C";
        });
        
}

