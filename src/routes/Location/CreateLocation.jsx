import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LocationContext } from '../../context/LocationContext'
import { getLocation } from '../../Service'

const CreateLocation = () => {
    const navigate = useNavigate();
    const { locationList, setLocationList } = useContext(LocationContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            locationName: 'S. S. de Jujuy',
            lat: -24.1895811,
            lon: -65.2982537
        }
    });

    const onSubmit = (data) => {
        const newLocation = {
            id: locationList.length + 1,
            name: data.locationName,
            lat: data.lat,
            lon: data.lon
        }

        //Buscar la locacion
        getLocation(newLocation.lat, newLocation.lon)
            .then(({ current_weather }) => {
                let auxLocation = {...newLocation, temperature: current_weather.temperature, windspeed: current_weather.windspeed}
                setLocationList([...locationList, auxLocation])
                //console.table(locationList);
                navigate('/');
            })
            .catch( (error) => console.log(error))
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Nombre de la locacion'
                {...register('locationName', { required: 'Debe ingresar un nombre' })}
            />
            <p>{errors.locationName?.message}</p>

            <input type="text" placeholder='Latitud'
                {...register('lat', { required: 'Debe ingresar una latitud' })}
            />
            <p>{errors.lat?.message}</p>

            <input type="text" placeholder='Longitud'
                {...register('lon', { required: 'Debe ingresar una longitud' })}
            />
            <p>{errors.lon?.message}</p>

            <button type='submit'>Crear Locacion</button>
        </form>
    </div>
  )
}

export default CreateLocation