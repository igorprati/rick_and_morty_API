import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Card(info) {

    const [character, setCaracter] = useState(info.info)

    let id = ('000' + character.id).slice(-3)

    return (
        <Link to={"/sobre/" + character.id} key={character.id}>
            <div className='card'>
                <div className='card__img'>
                    <img src={character.image} alt={character.id}></img>
                </div>
                <div className='card__info'>
                    <h3 className='info__nome'>{character.name}</h3>
                    <div className='info__footer'>
                        <p className='info__id'>{"# " + id}</p>
                        <p className={'info__status'}><span className={'status--' + character.status}></span>{character.status}</p>                       
                    </div>
                </div>
            </div>
        </Link>
    )
}




