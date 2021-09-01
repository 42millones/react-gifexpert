import React from 'react'
import { GifGridItem } from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    // usamos : para renombrar
        const {data:images, loading} = useFetchGifs(category);


    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>

        <div className="card-grid">
            {loading && <p>Loading</p>}
                {images.map(image =>{
                    return(
                    <GifGridItem 
                    key={image.id} 
                    {...image}/>
                    )
                })}
        </div>
        </>
    )
}
