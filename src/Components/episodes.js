import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './card'

function Episodes(info) {

    const [personagem, setPersonagem] = useState([])
    const [loading, setLoading] = useState(true)

    const getPersonagem = () => (
        fetch('https://rickandmortyapi.com/api/character/' + info.match.params.id_personagem)
        .then((res) => res.json())
        .then((result) => (
            setPersonagem(result),
            setLoading(false)

        ))
    )

    useEffect(() => (
        getPersonagem()
    ),[])


    if(loading){
        return <h1>Carregando...</h1>
    }

    return (
        <div className='episodes'>
            <h2>Lista de episodios de: <span className='nome__personagem'>{personagem.name}</span></h2> 
            <hr className='hr'/>
            <div className='episodes__lista'>
                {personagem.episode.map((item) => (
                    <Link to={'/episode/' + item.split('/')[5]}>
                        <p className='episode'>{item.split('/')[4] + ' ' + item.split('/')[5]}</p>
                    </Link>
                ))}
            </div>
            <div className='btn'>
                <Link to={'/sobre/' + personagem.id}>
                    <button className='btn__voltar'>Voltar</button>
                </Link>
            </div>
        </div>
    )
}

export default Episodes
