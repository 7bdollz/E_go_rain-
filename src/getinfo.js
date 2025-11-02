
const getInfo = async (searched)=>{
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searched}?unitGroup=metric&key=Q3LGNVQM6CXGS6YZR32VCD8YP&contentType=json`
  try{
    const response = await fetch(url);
    if(!response.ok){
      throw new Error(response.status)
    }
    const result = await response.json()
    const address = result.resolvedAddress
    const conditions = result.currentConditions
    const weather = {address,conditions}

    return weather
    
  }catch(error){
    console.log("Fetch error:",error.message)
  }
}


export default getInfo;
