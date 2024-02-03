const React = require('react');
const Def = require('../default');

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <h3>Rating</h3>
            <p>Not Rated</p>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <img src={`${data.place.pic}`} alt={`${data.place.name}`} />
            <h3>Located in {data.place.city}, {data.place.state}</h3>
            <h3>Comments</h3>
            <p>No comments yet!</p>
            <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                Edit
            </a>
            <form action={`/places/${data.id}?_method=DELETE`} method='POST'>
                <input type="submit" value={`Delete`} className='btn btn-danger'/>
            </form>
          </main>
        </Def>
    );
}

module.exports = show
