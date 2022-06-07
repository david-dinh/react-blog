import { useParams, useNavigate} from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams()
    const {data, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method: 'DELETE',
        }).then(() => {
            navigate("/");
        })
    }

    return (
        <div className="entry-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.name}</h2>
                    <p>Located in {data.location}</p>
                    <p>{"⭐".repeat(data.stars)}</p>
                    <p>{"💲".repeat(data.price)}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;