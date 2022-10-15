import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LocationContext } from '../../context/LocationContext'
import { getLocation } from '../../Service'
import { getCurrentDate } from '../../utils/Util'
import './CreateLocation.css';

const CreateLocation = () => {
    const navigate = useNavigate();
    const { locationList, setLocationList } = useContext(LocationContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            locationName: 'S. S. de Jujuy',
            lat: -24.1895811,
            lon: -65.2982537,
            urlImg: ''
        }
    });

    const onSubmit = (data) => {
        const newLocation = {
            id: locationList.length + 1,
            name: data.locationName,
            lat: data.lat,
            lon: data.lon,
            urlImg: data.urlImg
        }
        //Buscar la locacion
        getLocation(newLocation.lat, newLocation.lon)
            .then(({ current_weather }) => {
                let auxLocation = {...newLocation, 
                    temperature: current_weather.temperature, 
                    windspeed: current_weather.windspeed, 
                    date: getCurrentDate()}
                setLocationList([...locationList, auxLocation])
                //Agregar datos al localStorage
                localStorage.setItem("locations", JSON.stringify([...locationList, auxLocation]));
                navigate('/');
            })
            .catch( (error) => console.log(error))
    }
  return (
    <>
        
        <div className='form-container'>
            <h1 className='create-location-title'>Generate a new location card</h1>
            <p className='description'>
                You can add a new location card putting its coordinates (latitude and longitude) and its name. NOTE: Some images may not load due to CORS policy.
            </p>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Location name'
                    {...register('locationName', { required: 'You must enter a name' })}
                />
                <p>{errors.locationName?.message}</p>

                <input type="text" placeholder='Latitude'
                    {...register('lat', { required: 'You must enter a latitude' })}
                />
                <p>{errors.lat?.message}</p>

                <input type="text" placeholder='Longitude'
                    {...register('lon', { required: 'You must enter a longitude' })}
                />
                <p>{errors.lon?.message}</p>

                <input type="text" placeholder='Image URL (optinal)'
                    {...register('urlImg')}
                />

                <button className='btn' type='submit'>Create new card</button>
            </form>
        </div>
    </>
  )
}

export default CreateLocation