const React = require('react');
const Def = require('../default.jsx');

function comment_form (data) {
    return (
        <Def>
          <main>
            <h1>Leave your comment here</h1>
            <form action={`/places/${data.place.id}/comment`} method="POST">
                <div className='col-sm-6'>    
                    <label htmlFor="author">Your Name</label>
                    <input 
                    id="author" 
                    className="form-control" 
                    name="author" 
                    type='text' 
                    required />
                    <label htmlFor="content">Your Comment</label>
                    <input id="content" 
                    className="form-control" 
                    name="content" 
                    type="textarea"  />
                    <label htmlFor="stars">Star Rating</label>
                    <input 
                    id="stars" 
                    className="form-control" 
                    name="stars" 
                    type="Number" 
                    step="0.5"
                    /> 
                    <label htmlFor="rant">Rant</label>
                    <input id="rant" 
                    className="form-control" 
                    name="rant" 
                    type="Checkbox" 
                    />
                </div>
                <input 
                className="btn btn-primary" 
                type="submit" 
                />
            </form>
          </main>
        </Def>
    )
}

module.exports = comment_form;
