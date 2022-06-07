import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const [name, setName] = useState('');
    const [stars, setStars] = useState('1');
    const [price, setPrice] = useState('1');
    const [location, setLocation] = useState('');
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const entry = {name, stars, price, location};

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(entry)
        }).then(() => {
            console.log('New restaurant added');
            setIsPending(false);
            navigate("/");
        })
    }
    
    return (
        <div className="create">
            <h2>Add a new Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <label>Restaurant Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Stars:</label>
                <select
                    value={stars}
                    onChange= {(e) => setStars(parseInt(e.target.value))}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label>Price:</label>
                <select
                    value={stars}
                    onChange= {(e) => setPrice(parseInt(e.target.value))}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label>Location:</label>
                <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                {!isPending && <button>Add Restuarant</button>}
                {isPending && <button disabled>Adding Restuarant...</button>}
            </form>
        </div>
    );
}
 
export default Create;