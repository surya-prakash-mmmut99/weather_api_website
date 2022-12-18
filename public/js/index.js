const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_value = document.getElementById('temp_real_value');
const dataHide = document.querySelector('.middle_layer');

const getInfo =async(event)=>{
    event.preventDefault();
  
  let cityVal = cityName.value;
  if(cityVal===""){
        city_name.innerText = `Plz input the city Name` ; 
        dataHide.classList.add("data_hide")  

  }else{
      try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=77a33607aa04a95e3ae2ca177585046e`

        const respose = await  fetch(url);
        const data =await respose.json();
      const arrData =[data];

       city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
       temp_real_value.innerText = arrData[0].main.temp;
     
       temp_status.innerText = arrData[0].weather[0].main;
       dataHide.classList.remove("data_hide")  


    //   if(tempMood == 'Clear'){
    //       temp_status.innerText = "<i class='fa-solid fa-sun-bright'></i>"
    //   }else if(tempMood == 'Clouds'){
    //     temp_status.innerText = "<i class='fa-solid fa-clouds'></i>"
    //   }else if(tempMood == 'Rain'){
    //     temp_status.innerText = "<i class='fa-solid fa-cloud-hail-mixed'></i>"
    //   }else{
    //     temp_status.innerText = '<i class="fa-solid fa-cloud-bolt-sun"></i> '
    //   }

      }catch{
        city_name.innerText = `Plz input the city Name correctly ` ;
        dataHide.classList.add("data_hide")  
   
   
      }
    
  }
}
submitBtn.addEventListener('click',getInfo)



const getCurrentDay=()=>{
    let weekday = new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="ThursDay";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    let currentTime = new Date();
     days = weekday[currentTime.getDay()]
    let day =document.getElementById('day')
    day.innerText = days;
};
getCurrentDay();


document.getElementById("today_data").innerHTML = formatAMPM();

function formatAMPM() {
    var date = new Date().toLocaleDateString();
   
   
    var strTime = date ;
    return strTime;
}


