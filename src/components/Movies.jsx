import {getMovies} from "../data/data"
import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import "../App.css"

const Movies= ()=>{
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    let Movies= getMovies();
    return(
        <div>
            <div className="search-inp">
                <input type="text" placeholder="search" value={searchParams.get("MovieName") || ""}
                onChange={
                    event =>{
                        let MovieName = event.target.value

                        if(MovieName){
                            setSearchParams({MovieName})
                        }else{
                            setSearchParams({})
                        }
                    }
                } />
                
            </div>
            <div className="items1">
            {
                    Movies.filter((Movie)=>{
                        let Name= searchParams.get("MovieName")
                        if(!Name) return true
                        let name = Movie.name
                        return name.startsWith(Name)
                    })
                    .map(Movie =>(
                        <NavLink

                        
                        className="item"
                        
                        to={`${Movie.id}${location.search}`} key={Movie.id}>
                             
                        <div className="itemm">
                            <div className="img">
                                <img src={Movie.img} alt="" style={{width : "350px" , height : "350px"}}/>
                            </div>
                            <div className="name-a">
                                <div className="rr3">The last part was added</div>
                                <div className="rr2">{Movie.name}</div>
                                <div className="rr1">{Movie.score}/100</div>
                            </div>
                        </div>
                        </NavLink>
                    ))
                }
            </div>
            <Outlet />
        </div>
    )
}
export default Movies