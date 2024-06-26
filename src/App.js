import {Link, Outlet} from "react-router-dom"
const App = () =>{
    return(
        <div className="App">
                <nav>
                    <Link to='/Movies'>Movies</Link>
                </nav>
            <Outlet />

        </div>
    )
}
export default App;