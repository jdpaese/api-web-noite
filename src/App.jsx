import s from './App.module.css'
import logo from '/logo.png'
import { useEffect, useState } from 'react'
import { Card } from './components/card'
import { api } from './constants/baseurl'
import Tilt from 'react-parallax-tilt';

function App() {
  const [data, setData] = useState([])
  const [page, setPage] =  useState ("1")
  const [erro, setErro] = useState(false)
  
  useEffect(() => {
    setErro(false)
    api.get(`/character/?page=${page}`).then((response) => {
        setData(response.data.results)
    }).catch((error) => {
      console.log("Erro ao carregar personagens", error)
      setErro(true)
    })
  }, [page])

  return (
    <>
      <main>
        <img className={s.logo} src={logo} alt="Logo" />
        {erro && <p>erro ao carregar personagem</p>}
        <input type="number" placeholder='digite uma páginda de (1/42)' value={page} onChange={(e) => setPage(e.target.value)}/>
        <section className={s.wrapcards}>
          {data.map((item) => {
            return(
              <Tilt tiltReverse={false} key={item.id}>
              <div className={s.card} >
                <Card imagem={item.image} nome={item.name} especie={item.species}/>
              </div>
              </Tilt>
            )
          })}
        </section>
      </main>
    </>
  )
}

export default App