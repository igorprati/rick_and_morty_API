import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './card'

function Episode(info) {

    const [episodes, setEpisodes] = useState([])
    const [personagens, setPersonagens] = useState([])
    const [loading, setLoading] = useState(true)


    const getEpisodes = () => (
        fetch("https://rickandmortyapi.com/api/episode/" + info.match.params.id_episodio)
        .then((res) => res.json())
        .then((result) => {
            setEpisodes(result)
            const id_personagens = result.characters.map((item) => item.split('/')[item.split('/').length - 1])
            getPersonagens(id_personagens)
        })
    )

    const getPersonagens = (id_personagens) => (
        fetch("https://rickandmortyapi.com/api/character/" + id_personagens))
        .then((res) => res.json())
        .then((result) => (
            setPersonagens(result),
            setLoading(false)
        ))


    useEffect(() => (
        getEpisodes()
    ),[])


    if(loading){
        return <h2>Carregando...</h2>
    }

    return (
        <div>
            <div className='episode__name'>
                <h2 >{episodes.name}</h2>
            </div>
            <div className='btn'>
                <Link to='/'>
                    <button className='btn__voltar'>Voltar</button>
                </Link>
            </div>
            <section className='cardList'>
                {personagens.map((item) => (
                    <Card key={item.name} info={item}></Card>
                ))}
            </section>
        </div>
    )
}

export default Episode
