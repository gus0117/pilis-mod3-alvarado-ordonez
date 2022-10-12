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

const ENDPOINT = "https://6345f238745bd0dbd3741aca.mockapi.io/location/v1/";

export const validateUser = async (user, pass) => {
  try{
    const response = await fetch(ENDPOINT+"/users");
    const users = response.json();
    return users.map( u => {u.username === user && u.password === pass})
  }
  catch {
    throw new Error("Error en la peticion");
  }
}
