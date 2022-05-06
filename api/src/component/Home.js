import { useEffect, useState } from 'react'
import React from 'react'
import './home.css'
import ReactCardFlip from 'react-card-flip'
import { Card,Button } from 'react-bootstrap'
import Liked from './Liked'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{ faThumbsUp } from '@fortawesome/free-solid-svg-icons'


function Home() {
  const [character, setCharacter] = useState([])
  //const [isFlip, setIsFlip] = useState(false)
  const [search, setSearch] = useState("")
  const [remove, setRemove] = useState(character)




  const handleLike = (char) => {
    const cards = localStorage.getItem('likeCard');
    if (cards) {
      if (cards.includes(JSON.stringify(char))) {
        alert(" Card already liked")
      } else {
        const newLike = JSON.parse(cards);


        newLike.push(char);
        localStorage.setItem('likeCard', JSON.stringify(newLike));
        alert("cards liked");
      }
      return;
    }
    localStorage.setItem('likeCard', JSON.stringify([char]));
    alert('Card Liked');


  };

  /*const handleFlip = () => {
    
      setIsFlip(true)
    


  }

*/
  const handleRemove = (er) => {
    const allItem = localStorage.getItem("removeCard")
    if (allItem) {
      const addAllItem = JSON.parse(allItem)
      const rem = addAllItem.filter(i => i.id !== er.id)
      localStorage.setItem('removeCard', JSON.stringify(rem))
      setRemove(rem)
      return

    }
    else {
      const rem = character.filter(i => i.id !== er.id)
      localStorage.setItem('removeCard', JSON.stringify(rem))
      setRemove(rem)
    }






  }
  useEffect(() => {
    const allItem = localStorage.getItem("removeCard")

    if (allItem) {
      const addAllTem = JSON.parse(allItem)

      setRemove(addAllTem)

    }



  }, [])




 /* const handleClick = () => {
    setIsFlip(!isFlip)
  }

  const handleRemove=(item)=>{
    if(cards){
      const removeItem = JSON.parse(cards);
      const removeAll = removeItem.filter((ele) => ele.id !== item.id);
     
      setRemove(removeAll)
      return;
    }
  }*/

  useEffect(() => {
    const getData = async () => {
      const allData = await fetch("https://rickandmortyapi.com/api/character")
      const res = await allData.json()
      const data = res.results
      setCharacter(data)


    }
    getData()
  }, [])



  const sortItem = remove.sort((a, b) => {
    if (a.id < b.id) { return -1; }
    if (a.id > b.id) { return 1; }
    return 0;
  }


  )
  const filterCards = sortItem.filter((ele) => {
    return ele.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  })















  return (

    <div className='main-container'>

      <input type="text" placeholder='Search' className='input' onChange={(e) => setSearch(e.target.value)}></input>
      {/*     
      <div className='main'>
        {filterCards.map((ele,i) => (
          <div className='main-Container' key={ele.id} >
            <div className="card">
              <ReactCardFlip isFlipped={isFlip} flipDirection="horizontal">
                <div onClick={() => handleClick(ele)}>
                  <img src={ele.image} alt="Avatar" />

                </div>

                <div onClick={() => handleClick(ele)} >
                  <h3>Name:{ele.name}</h3>
                  <h3>Status:{ele.status}</h3>
                  <h3>Gender:{ele.gender}</h3>
                  <h3>Species:{ele.species}</h3>

                </div>

              </ReactCardFlip>

            </div>
            <button onClick={() => { handleLike(ele); handleRemove(ele);}}>Like</button>
            
          </div>

        ))}


        </div> */}

      {/* <div className='main'>
        {filterCards.map((ele,i) => (
          <div className='flip-card' key={ele.id} >
            <div className="flip-card-inner">
             
                <div className="flip-card-front" >
                  <img src={ele.image} alt="Avatar" />
                
            <button onClick={() => { handleLike(ele); handleRemove(ele);}}>Like</button>
            
      
                </div>

                <div className="flip-card-back" >
                  <h3>Name:{ele.name}</h3>
                  <h3>Status:{ele.status}</h3>
                  <h3>Gender:{ele.gender}</h3>
                  <h3>Species:{ele.species}</h3>
                  </div>
            <button onClick={() => { handleLike(ele); handleRemove(ele);}}>Like</button>
            
          </div>
                </div>

              

            

        ))}


      </div> */}
      <div className='main'>
{filterCards.map((ele)=>(
<div className='flip-card'>
      <Card style={{ width: '18rem' }} className='flip-card-inner' >
        
        <Card.Body className='flip-card-front'>
        <Card.Img variant="top" src={ele.image} />

          
        <FontAwesomeIcon icon={faThumbsUp } className="fa-2x" onClick={() => { handleLike(ele); handleRemove(ele);}}/>
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
          <FontAwesomeIcon icon={faThumbsUp } className=" fa-2x" onClick={() => { handleLike(ele); handleRemove(ele);}}/>
        </Card.Body>
      </Card>
</div>))}
</div>
      
    </div>
  )
}


export default Home