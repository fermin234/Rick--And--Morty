import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from '../Card/Card.jsx'
import s from './InfiniteScroll.module.css'
import { fetchMoreData, resetScroll } from "../../redux/actions";

export default function ScrollInfinite() {
  const dispatch = useDispatch()
  const items = useSelector(s => s.items)
  const filteredItems = useSelector(s => s.filteredItems)

  useEffect(() => {
    return () => {
      dispatch(resetScroll())
    }
  }, [])

  return (
    <>
      <InfiniteScroll
        dataLength={items.length}
        next={() => dispatch(fetchMoreData(items))}
        hasMore={items.length === filteredItems.length || filteredItems.length === 0 ? false : true}
        loader={<div>Loading...</div>}
      >
        <div className={s.containerAll}>
          {
            items.length ? items.map(e => <Card key={e._id} id={e._id} name={e.name} image={e.image} origin={e.origin.name} location={e.location.name} species={e.species} status={e.status} gender={e.gender} />) : ""
          }
        </div>
      </InfiniteScroll>
    </>
  )
}