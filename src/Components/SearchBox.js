import { Link } from 'react-router-dom'

export default function SearchBox(filter) {

  console.log(filter)

  return(
    <div className="searchbox container">
      <div className="app__list__searchbox__container">
        <img src='https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQOxGMxzPfr3lvtrDxZ9ahcGCw4wMQsdBljUXHiuon2Oa1SmjgGWYx-QWkyLuFwEaguoI3yaq592H-XkHzLbtgh5Pu9ljDJV6AzS.png?r=1ab' alt="Rick and Morty Logo"></img>
        <input 
          type="text"
          placeholder={filter.placeholder}
          onChange={filter.action}
        />
      </div>
      
    </div>
  )
}