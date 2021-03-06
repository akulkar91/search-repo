/* Cards is an individual component which could take an object as an input to display some information in the DOM */
const mock = require('./reponse.json')

const Card = ({ repo = mock[0] }) => {
  const { name, owner, description, svn_url } = repo
  return (
    <div className='card' data-testid={repo.id}>
      <div className='card-wrapper'>
        <div className='title-card'>
          <img src={owner.avatar_url} alt='Avatar'></img>
          <h3 title={name}>{name}</h3>
        </div>
        <div className='card-body'>
          <p className='description' title={description}>
            <b>Description:</b> {description}
          </p>
          <p className='url'>
            <b>Repo link:</b>
            <a href={svn_url} target='_blank' rel='noreferrer'>
              {' '}
              {svn_url}{' '}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
