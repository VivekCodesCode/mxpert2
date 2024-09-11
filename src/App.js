import './App.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Navbars from './Navbars';
import { Link } from 'react-router-dom';

function App() {
  let [first_data, set_first_data] = useState([]);

  useEffect(() => {
    axios
      .get("https://mxpertztestapi.onrender.com/api/adventure")
      .then((res) => {
        set_first_data(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="sci-fi-container">
    
<div className='upper_imge h-200'>

</div>
      {/* Header Section */}
      <header className="header-section">
        <h1 className="main-title">Science Fiction Stories</h1>
        <div className="filter-buttons">
        <Link to="/Story"> <Button variant="primary" className="filter-btn">Story</Button></Link> 
          <Button variant="warning" className="filter-btn">In Progress</Button>
          <Button variant="success" className="filter-btn">Completed</Button>
          <Button variant="outline-light" className="filter-btn">Clear All</Button>
        </div>
      </header>

      {/* Cards Section */}
      <div className="container card-section">
        <div className="row">
          {first_data.map((val, i) => (
            <div className="col-md-3 my-3" key={i}>
              <Card className="sci-fi-card">
                <Card.Img variant="top" height="200px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHKoe1jcMsgCjF68juBaMDGtvzpjZ1hb9xQ&s" />
                <Card.Body>
                  <Card.Title style={{color:"white"}}>{val.Title}</Card.Title>
                  <Card.Text style={{color:"white"}}>Explore the adventures of the galactic time travelers.</Card.Text>
                  <Button variant="primary" className="explore-btn">Explore</Button>
                  {/* Status Badge */}
                  <div className="status-badge">
                   
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <Button variant="light">Previous</Button>
        <Button variant="light">Next</Button>
      </div>
    </div>
  );
}

export default App;
