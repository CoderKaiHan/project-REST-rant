const React = require('react');
const Def = require('../default.jsx');

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form action={`/places/${data.place.id}?_method=PUT`} method="POST">
            <div className="row">
                <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input 
                    id="name" 
                    className="form-control" 
                    name="name" 
                    type='text'
                    value={data.place.name} 
                    required />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="pic">Place Picture(URL)</label>
                    <input id="pic" 
                    className="form-control" 
                    name="pic" 
                    type="url"  />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="city">City</label>
                    <input 
                    id="city" 
                    className="form-control" 
                    name="city" 
                    type="Text" 
                    value={data.place.city} />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="state">State</label>
                    <input id="state" 
                    className="form-control" 
                    name="state" 
                    type="Text" 
                    value={data.place.state} />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input 
                    id="cuisines" 
                    className="form-control" 
                    name="cuisines" 
                    type="Text"
                    value={data.place.cuisines}  
                    required />
            </div>
                <input 
                className="btn btn-primary" 
                type="submit" 
                />
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form;
