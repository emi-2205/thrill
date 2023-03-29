import logo from './logo.svg';
import './App.css';
import { Auth } from './components/auth';
import { Travel } from './components/Travel';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function App() {

  // const [travelList, setTravelList] = useState([]);

  // const travelCollection = collection(db, 'travel');

  // useEffect(() => {
  //   const getTraveList = async () => {
  //     try {
  //       const data = await getDocs(travelCollection);
  //       const filteredData = data.docs.map((doc) =>({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       setTravelList(filteredData);
  //       console.log(travelList);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   getTraveList();
  // }, [travelList])

  return (
    <div className='App'>
      <Auth />
      <Travel />
      <p>hello</p>
    </div>
  );
}

export default App;
