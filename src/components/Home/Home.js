import { useState } from "react";
import { useFetch } from "../../customHooks/useFetch";
import Card from "../Cards/Card";
import SearchBar from "../SearchBar/SearchBar";

const mock = require('../Cards/reponse.json'); // mock data 
const Home = () => {
    const {
        response = mock,
        loading,
        fetchData
    } = useFetch({
        api: () => getUrl(),
    });
    
    const [user,setUser] = useState('');
    const getUrl = () => {
        const url = `https://api.github.com/users/${user}/repos`
        return url;
    }

    return (
        <div className="home">
            <SearchBar
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder={'user name'}
                callBack={fetchData}
            />
            {/* Implement cards component to display list of repositories. One card per one repo */}
            {loading && <div>Loading...<i class="fa fa-spinner" aria-hidden="true"></i></div> }
            <section className="list-of-cards">
                {response.map(repo => <Card repo={repo}/>)}
            </section>
        </div>
    );
}
 
export default Home;