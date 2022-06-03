const BlogList = ({entries, title, handleDelete}) => {
    return (
        <div className="entry-list">
            <h2>{title}</h2>
            {entries.map((entry) => (
                <div className="entry-preview" key={entry.id}>
                    <h2>{entry.name}</h2>
                    <p>Located in {entry.location}</p>
                    <button onClick={() => handleDelete(entry.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;