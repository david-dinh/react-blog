import { useState } from "react";

const Create = () => {
    const [name, setName] = useState('');
    const [starsCount, setStarsCount] = useState('1');
    const [priceCount, setPriceCount] = useState('1');
    const [location, setLocation] = useState('');
    
    return (
        <div className="create">
            <h2>Add a new Restaurant</h2>
            <form>
                <label>Restaurant Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Stars:</label>
                <select
                    value={starsCount}
                    onChange= {(e) => setStarsCount(e.target.value)}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label>Price:</label>
                <select
                    value={starsCount}
                    onChange= {(e) => setPriceCount(e.target.value)}
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
                <button>Add Restuarant</button>
            </form>
        </div>
    );
}
 
export default Create;