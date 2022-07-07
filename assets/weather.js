function GetInfo(){

    const newName =document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--"
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='newName.value+'&appid=0585441b30763b74a9ee4e931e26a3d3")
.then(Response => Response.json())
.then(data =>{

    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min -312.04).toFixed(1)+"°";
    }
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max -312.04).toFixed(1)+"°";
    }
    for (i=0;i<5;i++){
        document.getElementById("img" +(i+1)).src =" http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }
})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))


function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "London";
    GetInfo();
}


//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }