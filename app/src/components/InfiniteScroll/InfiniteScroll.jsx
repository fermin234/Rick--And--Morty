import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from '../Card/Card.jsx'
import s from './InfiniteScroll.module.css'
import { fetchMoreData } from "../../redux/actions";

export default function ScrollInfinite() {
  const dispatch = useDispatch()
  const characters = useSelector(s => s.items)

  useEffect(() => {
    dispatch(fetchMoreData(characters))
  }, [])

  return (
    <>
      <InfiniteScroll
        dataLength={characters.length}
        next={() => dispatch(fetchMoreData(characters))}
        hasMore={true}
        loader={<div>Cargando...</div>}
      >
        <div className={s.containerAll}>
          {
            characters.length ? characters.map(e => <Card key={e._id} id={e._id} name={e.name} image={e.image} />) : ""
          }
        </div>
      </InfiniteScroll>
    </>
  )
}