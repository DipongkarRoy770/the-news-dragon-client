import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle ,FaGithub,FaFacebookF ,FaTwitter,FaInstagram} from 'react-icons/fa';
import Qzone from "../qzone/Qzone";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <div>
        <Button variant="outline-success"><FaGoogle></FaGoogle>Login with google</Button>
      </div>
      <div className="mt-1">
        <Button variant="outline-success"><FaGithub></FaGithub>Login with github</Button>
      </div>
      
      <ListGroup className="mt-3">
        <ListGroup.Item><FaFacebookF></FaFacebookF> Facebook</ListGroup.Item>
        <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
        <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
      </ListGroup>
      <Qzone></Qzone>
    </div>
  );
};

export default RightNav;
