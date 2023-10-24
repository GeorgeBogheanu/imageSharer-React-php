import { useState, useEffect,  } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    const imageInput = document.getElementById('imageInput');
    e.preventDefault();

    if (name.length === 0) {
      alert("Name cannot be blank!");
    } else if (!image) {
      alert("You need to select an image!");
    } else {
      const url = 'http://localhost/websites/backend/dbSavePosts.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('image', image);
      fData.append('description', description);

      try{
        const response = await axios.post(url, fData,{
          headers:{'Content-Type':"multipart/form-data"}
        });
        if(response.data === "Invalid file type.\n"){
          alert("Invalid file type. Please upload a valid image.(eg jpeg, png, gif)");
          imageInput.focus();
          return;
        }
        else{
          navigate("/");
        }
      } catch(error){
        console.log(error.data);
      }
    }
  }

  useEffect(() => {
    const alertUser = (e) => {
      if (image || name.trim() !== '' || description.trim() !== '') {
        const message = "You have unsaved changes. Are you sure you want to leave?";
        e.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", alertUser);

    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, [image, name, description]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>Upload an image</h2>
        <label>Image:</label>
        <input type="file" id="imageInput" className="m-2 form-control inputStyle" name="image" onChange={(e) => setImage(e.target.files[0])} required /> <br />
        <label>Name:</label>
        <input type="text" id="nameInput" className="m-2 form-control inputStyle" name="name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
        <label>Description:</label> <br />
        <div className="form-floating">
          <textarea id="floatingTextarea2" name="description" className="form-control" style={{height: "100px", width: "50%"}} value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          <label htmlFor="floatingTextarea2">Description</label>
        </div>
        <button className="btn btn-success" type="submit" name="submit">Submit</button>
      </form>
    </div>
  );
}

export default Upload;
