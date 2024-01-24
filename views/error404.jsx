const React = require('react');
const Def = require('./default');

function error404(){
    return(
        <Def>
            <main style={{ textAlign: 'center' }}>
                <h1>404:PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <img src="/images/404_cat.jpg" alt="A shocked blue cat." />
                <div>
                Photo by <a href="https://unsplash.com/@camelieinpic?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">[kaˈmeːli̯ə] ...</a> on <a href="https://unsplash.com/photos/a-black-and-white-photo-of-a-cat-sitting-on-the-floor-RsJvb6OixoA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
            </main>
        </Def>
    );
}

module.exports = error404;