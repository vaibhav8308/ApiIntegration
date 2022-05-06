import React, { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip';
import "./home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Card,Button } from 'react-bootstrap'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
function Liked() {
  const [like, setLike] = useState([]);
  const [isFlip, setIsFlip] = useState(false)



  const handleUnLike = (like) => {
    const cards = localStorage.getItem('likeCard');
    if (cards) {
      const newLike = JSON.parse(cards);
      const unLike = newLike.filter((ele) => ele.id !== like.id);
      localStorage.setItem('likeCard', JSON.stringify(unLike));
      setLike(unLike)
      return;
    }
  };


  const addUnlike = (like) => {
    const unlikeCard = localStorage.getItem('removeCard')
    if (unlikeCard) {
      const addTolike = JSON.parse(unlikeCard)
      const allItems = addTolike.concat([like])

      localStorage.setItem('removeCard', JSON.stringify(allItems))

    }





  }


  useEffect(() => {
    const cards = localStorage.getItem('likeCard');
    if (cards) {

      setLike(JSON.parse(cards));
    }
  }, []);

  const handleFlip = () => {

    setIsFlip(!isFlip)


  }
  return (
    <div className='main' >

      {/*{like.map((ele) => (
        <div className='main-Container' >
          <div className="card">
            <ReactCardFlip isFlipped={isFlip} flipDirection="horizontal">
              <div onClick={handleFlip}>
                <img src={ele.image} alt="Avatar" />

              </div>

              <div onClick={handleFlip} >
                <h3>Name:{ele.name}</h3>
                <h3>Status:{ele.status}</h3>
                <h3>Gender:{ele.gender}</h3>
                <h3>Species:{ele.species}</h3>

              </div>

            </ReactCardFlip>

          </div>
          <button onClick={() => {handleUnLike(ele); addUnlike(ele);}} >Unlike</button>
        </div>

      ))}*/}
      {like.map((ele) => (
        <div className='flip-card'>
          <Card style={{ width: '18rem' }} className='flip-card-inner' >

            <Card.Body className='flip-card-front'>
              <Card.Img variant="top" src={ele.image} />


              <FontAwesomeIcon icon={faThumbsDown} className="fa-2x" onClick={() => {handleUnLike(ele); addUnlike(ele);}} />
            </Card.Body>
            <Card.Body className='flip-card-back'>
              <Card.Title> Name : {ele.name}</Card.Title>
              <Card.Text>
                Status : {ele.status}
              </Card.Text>
              <Card.Text>
                Gender : {ele.gender}
              </Card.Text>
              <Card.Text>
                Species : {ele.species}
              </Card.Text>
              <FontAwesomeIcon icon={faThumbsDown} className=" fa-2x" onClick={() => {handleUnLike(ele); addUnlike(ele);}} />
            </Card.Body>
          </Card>
        </div>))}
    </div>



  )
}

export default Liked