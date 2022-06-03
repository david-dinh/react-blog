import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {name: 'Mambo\'s', stars: 4, price: 2, location: 'French Quarter', id: 1},
        {name: 'Commander\'s Palace', stars: 5, price: 4, location: 'Garden District', id: 2},
        {name: 'Oceana Grill', stars: 4, price: 2, location: 'French Quarter', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    
    return (
        <div className="home">
            <BlogList entries={blogs} title="All Restaurants" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;