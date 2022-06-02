import {useState} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {name: 'Mambo\'s', stars: 4, price: 2, location: 'French Quarter', id: 1},
        {name: 'Commander\'s Palace', stars: 5, price: 4, location: 'Garden District', id: 2},
        {name: 'Oceana Grill', stars: 4, price: 2, location: 'French Quarter', id: 3}
    ]);
    
    return (
        <div className="home">
            {blogs.map((entry) => (
                <div className="entry-preview" key={entry.id}>
                    <h2>{entry.name}</h2>
                    <p>Located in {entry.location}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;