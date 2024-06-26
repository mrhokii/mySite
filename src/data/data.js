let Movies= [
    {
        name: "movie1",
        id: "01",
        score : "87",
        lorem : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, modi.",
        img : "https://images.khabaronline.ir//images/2013/7/Edge%20of%20Tomorrow.jpg"
    },
    {
        name: "Venom",
        id: "02",
        score : "77",
        lorem : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, modi.",
        img : "https://www.mizan.news/wp-content/uploads/2022/01/3240330_612.jpg"
    },
    {
        name: "Baskin",
        id: "03",
        score : "97",
        lorem : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, modi.",
        img : "https://cdn.zoomg.ir/2015/12/baskin_xlg.jpg"
    },
    {
        name: "movie4",
        id: "04",
        score : "65",
        lorem : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, modi.",
        img : "https://static.cdn.asset.filimo.com/flmt/mov_29583_250-b.jpg?width=800&quality=85&secret=1DVhfnhe6FdnV78nvUM6QQ"
    },
    {
        name: "oppenheimer",
        id: "05",
        score : "88",
        lorem : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, modi.",
        img : "https://upload.wikimedia.org/wikipedia/fa/4/4a/Oppenheimer_%28film%29.jpg"
    },
    {
        name: "The Gangster The Cop The Devil",
        id: "06",
        score : "96",
        lorem : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, modi.",
        img : "https://static.cdn.asset.filimo.com/flmt/mov_24451_1-b.jpg?width=800&quality=85&secret=BDPLaXdYoHrvKPfnQAS12g"
    }
]

export const getMovies = () =>{
    return Movies;
}
export const getMovie = (id) =>{
    return Movies.find(Movie => Movie.id === id)
}