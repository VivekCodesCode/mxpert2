import './App.css'; // Use a dedicated CSS file for this page
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Navbars from './Navbars';

function Story() {
  let [first_data, set_first_data] = useState([]);

  useEffect(() => {
    axios
      .get("https://mxpertztestapi.onrender.com/api/adventure/65a92293c30f9199457f4c65")
      .then((res) => {
        console.log(res.data.Brainquest);
        set_first_data(res.data.Brainquest);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="storypage-container">
     
      
      {/* Header with title and buttons */}
      <header className="storypage-header">
        <h1 className="storypage-title">The Lost City of Future Earth</h1>
        <div className="storypage-buttons">
          <Button variant="info" className="storypage-btn">Word Explorer</Button>
          <Button variant="primary" className="storypage-btn">Story Adventure</Button>
          <Button variant="danger" className="storypage-btn">Brain Quest</Button>
        </div>
        <p className="storypage-instructions">
          Drag Pictures to the matching Words, light up correct pairs, shake for a retry
        </p>
      </header>

      {/* Story Cards Section */}
      <div className="storypage-card-section">
        <div className="container d-flex">
            <div className='story_image'>
         <img className='mt-10'width="300px" height="400px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fNmXA4BFc03XvgdZ_my2VQCLI_vxZLKDGg&s'/>
           <p>
            This is a story page of Vivek Sharma<br>
            </br>
            This is a story page.
           </p>
            </div>
          <div className="row">
            {first_data.map((val, i) => (
              <div className="col-md-3 mb-4" key={i}>
                <Card className="storypage-card">
                  <Card.Img 
                    variant="top" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfyD37wZr9J1YgKrV-pcys2aWZ6oju92t6g&s" 
                    className="storypage-card-img" 
                  />
                  <Card.Body>
                    <Card.Title> Question is {val.Question}</Card.Title>
                    <Card.Text style={{color:"white"}}>
                      Some quick example text to build on the card title and make up..
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
            {first_data.map((val, i) => (
              <div className="col-md-3 mb-4" key={i}>
                <Card className="storypage-card">
                  <Card.Img 
                    variant="top" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfyD37wZr9J1YgKrV-pcys2aWZ6oju92t6g&s" 
                    className="storypage-card-img" 
                  />
                  <Card.Body>
                    <Card.Title>Question is {val.Question}</Card.Title>
                    <Card.Text  style={{color:"white"}}>
                      Some quick example text to build on the card title and make up..
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
