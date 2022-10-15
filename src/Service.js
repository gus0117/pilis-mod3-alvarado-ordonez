export const getLocation = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitude}&timezone=America/Argentina/Jujuy`
    );
    return response.json();
  } catch {
    throw new Error("Error en la peticion");
  }
};

const SERVER_DOMAIN = "https://6345f238745bd0dbd3741aca.mockapi.io/location/v1/";

export const getUsers = async () => {
  try{
    const response = await fetch(SERVER_DOMAIN+"/users");
    return response.json();
  }
  catch {
    throw new Error("Error en la peticion");
  }
}

export const validateUser = (user, pass) => {
    
    getUsers().then( users => {
      let validation = false;
      //console.log(users[0]);
      let i = 0;
      while(!validation && i < users.length){  
        validation = users[i].username === user && user[i].password === pass ? true : false
        i++;
      }
      return validation
    })
    .catch(console.log("Error en la peticion de usuarios"));
}
