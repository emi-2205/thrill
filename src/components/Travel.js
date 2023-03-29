import { useState, useEffect } from "react";
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

export const Travel = () => {

  const [travelList, setTravelList] = useState([]);
  const travelCollection = collection(db, 'travel');

  useEffect(() => {
    const getTraveList = async () => {
      try {
        const data = await getDocs(travelCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTravelList(filteredData);
        console.log(travelList);
      } catch (err) {
        console.error(err);
      }
    };

    getTraveList();
  }, [travelList])

  return (
    // <div>
    //   {travelList.length > 0 && (
    //     <h1>{travelList[0].id}</h1>
    //   )}
    // </div>
    <div style={{display: 'flex', justifyContent: 'center'}} >
    <table>
      <thead>
        <tr>
          <th>User's email</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {travelList.map((travel) => (
          <tr key={travel.id}>
            <td>{travel['user-email']}</td>
            <td>{travel.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
