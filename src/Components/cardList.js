import React, { useEffect, useState } from 'react'
import Card from './card'
import SearchBox from './SearchBox'

export default function CardList() {

    const [characters, setCharacters] = useState([])
    const [busca, setBusca] = useState([]);
    const [page, setPage] = useState(1)

    // const [numero, letra, operacao] = [1, 's', '+']
    // spread operator, operações com objetos, desestruturação-desconstrução de arrays, API - Axios

    const getData = (page) => {
        fetch('https://rickandmortyapi.com/api/character/?page=' + page)
        .then( res => res.json() )
        .then( (result) => {
            setCharacters([...characters,...result.results]) 
            setBusca(result.results)
        })
    }

    const filterCharacters = (e) => {
        const filtered = busca.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setCharacters(filtered)
      }

    useEffect( () => {
        getData(page);
      }, [page]);


    const nextPage = () => {
        setPage(page + 1)
    }

    return (
        <>
            <SearchBox placeholder="Buscar personagem..." action={filterCharacters}></SearchBox>   

            <section className='cardList'>
                {characters.map((item) => (
                    <Card key={item.name} info={item}></Card>
                ))}
            </section>
            <div className='btn'>
                <button className='carregar__mais' onClick={nextPage}>Carregar mais...</button>
            </div>
        </>
    )
}

