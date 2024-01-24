const React = require('react');
const Def = require('./default');

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/a_table_of_breakfast_food.jpg" alt="A table of breakfast food." />
                    <div>
                        Photo by <a href="https://unsplash.com/@brookelark?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brooke Lark</a> on <a href="https://unsplash.com/photos/assorted-fruits-on-white-ceramic-bowls-IDonmDWrXO8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>

        </Def>
    );
}

module.exports = home;
