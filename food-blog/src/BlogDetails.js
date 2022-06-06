import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams()
    const {data, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.name}</h2>
                    <p>Located in {data.location}</p>
                    <p>{"⭐".repeat(data.stars)}</p>
                    <p>{"💲".repeat(data.price)}</p>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;