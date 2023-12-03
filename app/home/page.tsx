import MovieLayout from "../components/MovieVideo";
import Recently from "../components/RecentlyAdded";


export default function HomePage(){
    return(
        <div className="p-5 lg:p-0">
            <MovieLayout/>
            <h1 className="text-3xl font-bold">Recently Added</h1>
            <Recently/>
        </div>
    )
}