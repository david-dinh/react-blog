import { Link } from "react-router-dom";

const BlogList = ({entries, title}) => {
    return (
        <div className="entry-list">
            <h2>{title}</h2>
            {entries.map((entry) => (
                <div className="entry-preview" key={entry.id}>
                    <Link to={`/blogs/${entry.id}`}>
                    <h2>{entry.name}</h2>
                    <p>Located in {entry.location}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;