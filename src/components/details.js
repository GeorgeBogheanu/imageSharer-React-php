import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


 const Details = () => {
    const { data= '{}' } = useParams();
    const { id, name, description, image } = JSON.parse(decodeURIComponent(data));
    const [ comments, setComments ] = useState([]);
    const [ commentsVisible, setCommentsVisible ] = useState(true);
    const [ likesCount, setLikesCount ] = useState(0);
    const postId = id;

    
    useEffect(() =>{
        fetch('http://localhost/websites/backend/apiComments.php')
        .then(response => response.json())
        .then(data => {setComments(data.reverse());})
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    const handleCommentSubmit = (e) => {
        e.preventDefault();

        const url = "http://localhost/websites/backend/dbSaveComments.php";
        const nameInput = document.getElementById('name');
        const countryInput = document.getElementById('country');
        const descriptionInput = document.getElementById('floatingTextarea2'); 

        const formData= new FormData();
        formData.append('name', nameInput.value);
        formData.append('country', countryInput.value);
        formData.append('description', descriptionInput.value);
        formData.append('postId', Number(postId));

        axios.post(url, formData)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
        ;
        window.location.reload();
    }
    const toggleComments = () =>{
        setCommentsVisible(!commentsVisible);
    }
    const handleLikes = () =>{
        const url= "http://localhost/websites/backend/updateLikes.php";

        const formData = new FormData();
        formData.append('postId', postId);

        axios.post(url, formData)
            .then(response =>{
                if(response.data.success){
                    console.log("updated!",response.data.message);
                    setLikesCount(likesCount + 1);
                }else {
                    console.error('Error updating likes_count:', response.data.error);
                }
            })
            .catch(error => console.error('Error:', error));
    }

    return(
        <div className="container">
            <h2 className="card-title">{name.toUpperCase()}</h2>
            <div className="row">
                <div className="col-md-6 col-sm-9">
                    <img src={`http://localhost/websites/backend/${image.replace(/#/g, '%23')}`} className="card-img-top"  alt="..." /> 
                </div>
                <div className="col-md-4 col-sm-9 d-flex flex-column align-items-center text-center">
                    {description ? (
                    <p>{description}</p> 
                    ):(
                    <p>No description</p>
                    )}
                    <button className='btn btn-outline-danger btn-sm mt-auto'style={{width: "20%"}} type='button' onClick={handleLikes}>Like!❤</button>
                </div>
            </div>
            <button onClick={toggleComments} className="btn btn-info p-3 m-5 bg-body text-center">Show Comments </button>
            <div className={`commentSection ${commentsVisible ? 'visible' : 'invisible'}`}>
                <ul>
                    {comments
                        .filter(comment => comment.postId === id)
                        .map(comment =>(
                            <li key={comment.id}>
                            <strong>{comment.name} </strong> from {comment.country} said:
                            <p>{comment.description} </p>
                            <p>Posted on: {comment.datePosted} </p>
                        </li>
                    )
                    )}
                </ul>
                <h3>Add a comment!</h3>
                <form onSubmit={handleCommentSubmit}>
                    <input type="hidden" id="postId" name="postId" value={id} />
                    Name: <input className="m-2 form-control inputStyle" type="text" id="name" name="name" required /> <br />
                    Country: <input className="m-2 form-control inputStyle" type="text" id="country" name="country" /> <br />
                    Description: <br />
                    <div className="form-floating">
                        <textarea id="floatingTextarea2" name="description" className="form-control" style={{height: "100px", width: "50%"}} required></textarea>
                        <label htmlFor="floatingTextarea2">Comments</label>
                    </div>
                    <button className="btn btn-success m-3" type="submit">Post</button>
                </form>
            </div>           
        </div>
    );
};

 export default Details;