import { useParams } from "react-router-dom";
import {getMovie} from "../data/data"

const Movie = () =>{
    const params= useParams()
    const Movie= getMovie(params.MovieId)
    if(Movie){
        return(
            <div>
                
                <div className="show-item">
                    <div className="item-box">
                        <div className="pic">
                            <img src={Movie.img} alt="" style={{width : "150px" , height : "150px"}}/>
                        </div>
                        <div className="name-m">
                            <p>{Movie.name}</p>
                            <p>{Movie.lorem}</p>
                            <button className="download">Download Movie</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                Movie not found
            </div>
        )
    }
}
export default Movie;