
const baseurl="https://api.weatherapi.com/v1/current.json?key=b946bc03515d446089953637231108";
export const getweather=async function(city){
    const response=await fetch(`${baseurl}&q=${city}`);
    return response.json();
}

export const getweatherloc=async function(lat,long){
    const response=await fetch(`${baseurl}&q=${lat},${long}`);
    return response.json();
}

