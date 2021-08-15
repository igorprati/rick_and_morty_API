import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './card'

export default function Info(info) {

    const [personagem, setPersonagem] = useState()
    const [loading, setLoading] = useState(true)

    const getData = () => {
        fetch('https://rickandmortyapi.com/api/character/' + info.match.params.id)
        .then((res) => res.json())
        .then((result) => (
            setPersonagem(result),
            setLoading(false)
        ))
    }


    useEffect(() => (
        getData()
    ),[])

    if(loading){
        return <div>Carregando...</div>
    }

    const location = personagem.location.url.split('/')[5]

    return (
        <div className='info'>
            <div className='info__box'>
                <div className='info__img'>
                    <img src={personagem.image} alt={personagem.name}/>
                </div>
                <div className='info__info'>
                    <div className='info__img'>
                        <h1>{personagem.name}</h1>
                        <p className={'info__status'}><span className={'status--' + personagem.status}></span>{personagem.status}</p>
                    </div>
                    <div className='info__data'>
                        <p>Gender: {personagem.gender}</p>
                        <p>Specie: {personagem.species}</p>
                        <Link to={'/location/' + location}>
                            <p className='data__location'>Location: {personagem.location.name}</p>
                        </Link>
                        <Link to={'/' + personagem.name + '/episodes/' + personagem.id}>
                            <p className='data__episodes'>Episodes</p>
                        </Link>
                    </div>
                    <div className='btn'>
                        <Link to='/'>
                            <button className='btn__voltar'>Voltar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
