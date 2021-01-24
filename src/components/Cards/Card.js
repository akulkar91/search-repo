/* Cards is an individual component which could take an object as an input to display some information in the DOM */
const mock = require('./reponse.json');

const Card = ({
    repo = mock[0]
}) => {
    const {
        name,
        owner,
        description
    } = repo;
    return (
        <div className="card">
            <div className="card-wrapper">
                <div className="title-card">
                    <img src={owner.avatar_url} alt="Avatar"></img>
                    <h3>{name}</h3>
                </div>
                <div className="card-body">
                    <p className="description">
                        <b>Description:</b> {description}
                    </p>
                    <p className="url">
                        <b>Repo link:</b>
                        <a href={owner.html_url} target="_blank"> {owner.html_url} </a>
                    </p>
                </div>
            </div>            
        </div>
    );
}
 
export default Card;