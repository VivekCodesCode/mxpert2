import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">MxPertzz</Nav.Link>
      </Nav.Item>
      <Link to="/Story">
      <Nav.Item>
    <Link to="/Story">Story-data</Link> 
      </Nav.Item>
      </Link>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbars;