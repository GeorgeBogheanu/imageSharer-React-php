import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost/websites/backend/apiPosts.php')
      .then(response => response.json())
      .then(data => {setPosts(data.reverse());})
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <div className='row row-cols-3'>
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="post card m-2" style={{ width: "18rem" }}>
              <img src={`http://localhost/websites/backend/${post.image.replace(/#/g, '%23')}`} className="card-img-top" alt={post.name} />
              <div className="card-body">
                <h5 className="card-title">{post.name}</h5>
                {post.description ? (
                  <p className="card-text text-truncate">{post.description}</p>
                  ) : (
                    <p className="card-text">No description available</p>
                  )}
                <Link className="btn btn-primary" 
                  to={`/details/${encodeURIComponent(JSON.stringify(post))}`}>
                      More Details
                </Link>
                <button className='btn btn-outline-danger ms-4' type='button'>{post.likes_count ?? 0}❤</button>
              </div>
            </div>
          ))
          ) : (
            <p>Loading...</p>
          )}
      </div>
    </div>
  );
};

export default Home;
