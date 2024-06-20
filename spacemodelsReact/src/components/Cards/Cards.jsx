import React, {useState} from 'react'
import Card from '../Card/Card'
import image01 from '../../assets/images/01.jpeg'
import image02 from '../../assets/images/02.jpeg'

const Cards = () => {

const [data, setData] = useState([
    {
        id: 1,
        imageUrl: image01,
        preTitle: "APERTURA DE CUENTAS", 
        title: "PLATAFORMAS", 
        description: "Te ayudamos en el registro, aprobación y monetización de diferentes plataformas de contenido"  
    },
    {
        id: 2,
        imageUrl: image02,
        preTitle: "MONETIZACION Y SEGUIMIENTO", 
        title: "INGRESOS", 
        description: "Pago de tus ganancias en las diferentes plataformas de contenido y streaming."  
    }

])



  return (
    <div>
        {data.map(datos =>{
            return(
                <Card
                key={datos.id}
                imageUrl={datos.imageUrl}
                preTitle={datos.preTitle}
                title={datos.title}
                description={datos.description}
                />
            )
        })}
    </div>
  )
}

export default Cards