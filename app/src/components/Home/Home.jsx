import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import NavBar from "../NavBar/NavBar.jsx";
import { characters } from '../../redux/actions'
import s from './home.module.css'
const MyComponent = React.lazy(() => import('../Card/Card.jsx'));

function ListItem({ item }) {
  return (
    <div className="list-item">
      <h3>{item.name}</h3>
      <p>{item.image}</p>
    </div>
  );
}

function List({ items }) {
  const [visibleItems, setVisibleItems] = useState([]);

  return (
    <div className="list">
      {visibleItems.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
}



export default function Home() {
  const dispatch = useDispatch()
  const allCharacters = useSelector(s => s.characters)

  useEffect(() => {
    //Si no hay personajes, los pido
    if (!allCharacters.length) {
      dispatch(characters())
    }
  }, [])


  return (
    <div className={s.containerAll}>
      <NavBar />
      <div className={s.containerCards}>
        {/* {
          allCharacters.length && allCharacters.map(e => <Card key={e._id} name={e.name} image={e.image} />)
        } */}
        <Suspense fallback={<div>Loading...</div>}>
          {allCharacters.length && allCharacters.map(e => <MyComponent key={e._id} name={e.name} image={e.image} />)}
        </Suspense>
      </div>
    </div>
  )
}


