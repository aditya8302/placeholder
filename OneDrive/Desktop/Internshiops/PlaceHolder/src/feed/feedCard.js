import React from 'react';
import './FeedCard.css';
import { db } from '../firebase';
import {doc,updateDoc} from 'firebase/firestore';

const FeedCard = (props) => {
    const handleClick=async ()=>{
      // const q = query(collection(db, "food"), where("id", "==", props.id));

      //   const querySnapshot = await getDoc(q);
      //   let docID = '';
      //   querySnapshot.forEach((doc) => {
      //     docID = doc.id;
      //   });
        // console.log(user);
        console.log("heyey");
        const user = doc(db, "food", props.id);
        console.log(user);

        // Set the "capital" field of the city 'DC'
        await updateDoc(user, {
            status:'closed'
        }).then((res)=>window.location="/");
      }
  return (
    <div className='FeedCard'>
        <div className='feedcard-data'>
            <div className='feedcard-resturant'>{props.resturantname}</div>
            <div className='feedcard-resturant'>{props.name}</div>
            <div className='feedcard-resturant'>{props.quantity}</div>
            <div className='feedcard-resturant'>{props.type}</div>
        </div>
            <button className= {`feedcard-button ${props.status}`} type="submit" onClick={()=>handleClick()}>
                Take food
            </button>
    </div>
  )
}

export default FeedCard;