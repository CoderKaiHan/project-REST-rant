const React = require('react');
const Def = require('../default');

function new_form(){
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form action="/places" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input id="name" className="form-control" name="name" type="text" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input id="pic" className="form-control" name="pic" type="url" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input id="city" className="form-control" name="city" type="Text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input id="state" className="form-control" name="state" type="Text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input id="cuisines" className="form-control" name="cuisines" type="Text" required />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    );
}

module.exports = new_form;