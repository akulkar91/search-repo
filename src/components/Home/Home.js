import { useEffect, useState } from 'react'
import { useFetch } from '../../customHooks/useFetch'
import Card from '../Cards/Card'
import SearchBar from '../SearchBar/SearchBar'

const mock = require('../Cards/reponse.json') // mock data
const Home = () => {
  const { response = mock, loading, message,fetchData } = useFetch({
    api: () => getUrl(),
  })

  const [user, setUser] = useState('');
  const getUrl = () => {
    const url = `https://api.github.com/users/${user}/repos`
    return url
  }
  useEffect(() => {})
  return (
    <div className='home'>
      <SearchBar
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder={'user name'}
        callBack={fetchData}
      />
      {/* Implement cards component to display list of repositories. One card per one repo */}
      {loading && (
        <div>
          Loading...<i class='fa fa-spinner' aria-hidden='true'></i>
        </div>
      )}
      {(!loading && response.length <= 0 || !user) && <h3>{message}</h3>}
      <section className='list-of-cards'>
        {response.map((repo, idx) => (
          <Card key={`card_${idx}`} repo={repo} />
        ))}
      </section>
    </div>
  )
}

export default Home
