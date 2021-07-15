import React from 'react';

const Poke = (props) => {
    return(
        <div>
            <ul>
                {
                    props.pokemon.map((item, idx) => {
                        return <li key ={idx}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Poke;