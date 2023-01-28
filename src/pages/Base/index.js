import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

import api from '../../api';

const Base = () => {
  
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [photo, setPhoto] = useState(null);

  const navigate = useNavigate();
  
  const getPosts = async () => {
    const { data } = await api.getPost();
    
    setPosts(data);
  }

  const getPostWithId = async (id) => {
    const response = await api.getPostWithId(id);
    await getImage();
    //
    setPost(response.data);
  }

  const getImage = async () => {
    const { data } = await api.getImage();
    const blobData = new Blob([data]);
    const result = URL.createObjectURL(blobData);
    setPhoto(result);
  }

  const goToDetail = () => navigate('/detail');

  const goToHome = () => navigate({
    pathname: '/home',
    search: createSearchParams({
      id: 5,
      name: 'Budiawan',
      age: 55
    }).toString()
  });

  useEffect(() => {
    // UI sudah ter-render
    // componentDidMount

    getPosts();

    return () => {
      // componentWillUnmount
    }
  }, []);

  useEffect(() => {
    // componentDidUpdate
  }, [post]);
    
  return (
    <div className="mt-2 container-fluid">
      <div className="row">
        <div className="col">
          <Card onClick={() => getPostWithId(1)}>
            <Card.Body>
              <p>1</p>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card onClick={() => getPostWithId(2)}>
            <Card.Body>
              <p>2</p>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card onClick={() => getPostWithId(3)}>
            <Card.Body>
              <p>3</p>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Card className="mt-2 w-50">
          <Card.Img variant="top" src={photo} />
          <Card.Body>
            {/* NULLABLE */}
            <h3>{post?.id}. {post?.title}</h3>
            <p>{post?.body}</p>
          </Card.Body>
        </Card>
      </div>

      <div className="mt-5 d-flex">
        <Button
          variant="primary"
          className="w-100 me-1"
          onClick={goToDetail}
        >
          Go To Detail
        </Button>

        <Button
          variant="primary"
          className="w-100 ms-1"
          onClick={goToHome}
        >
          Go To Home
        </Button>
      </div>
    </div>
  )
}

export default Base;