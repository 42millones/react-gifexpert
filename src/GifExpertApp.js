import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Full Metal Alchemist']);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'One Piece']);
    // }

    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            


            <ol>
                { 
                    categories.map(category =>{
                        return(
                            <GifGrid 
                            category={category}
                            key={category}
                            />
                        )
                    })
                }
            </ol>
        </div>
    )
}