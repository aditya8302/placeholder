import React,{useEffect,useState} from 'react'
import { collection ,getDocs} from 'firebase/firestore';
import {db} from "../firebase";
import Navigation from '../navigation/navigation';
import FeedCard from './feedCard';
import './feed.css';

const Feed=()=>{
    const [food, setfood] = useState([]);

  useEffect( () => {
    getDocs(collection(db,'food')).then((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      console.log(postData);
      setfood(postData);
    });
  }, []);
    
    return (
        <section id="feed">
            <Navigation />
            <div className='feed-heading'>Available Food</div>
            <div className='feed-grid'>
            {food.map((item, index) => (
              item.status==='active'?
              <FeedCard
              id={item.id}
                key={index}
                resturantname={item.resturantname}
                name={item.name}
                type={item.type}
                quantity={item.quantity}
                status={item.status}
              />:<></>
            ))}
            </div>
        </section>
    );
}
export default Feed;    