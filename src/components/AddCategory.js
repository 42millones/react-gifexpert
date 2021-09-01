import React, { useState } from 'react';
import PropTypes from 'prop-types';


//no se usa props sino que se pasa la propiedad y se desestructura con {}
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            // llamamos a setCategories que ya fue desestructurada
            //cats es el acceso a los valores que ya tenia el setState no hace falta pasarlos sono pasar el set y llamandolo...
            //...de esa manera setX(values => [values, newValue])
            setCategories(cats => [inputValue, ...cats ]);
            setInputValue('');
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}

            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}


