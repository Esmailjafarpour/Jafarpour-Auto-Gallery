import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useRouter } from 'next/router';

const SearchBar = () => {

     const [allState, setAllState] = useState({
          minPrice : '',
          maxPrice : ''
     });

     const router = useRouter();
     const searchHandler = () => {
          if (allState.minPrice && allState.maxPrice) {

               router.push(`/filter/${allState.minPrice}/${allState.maxPrice}`)

          }else {
               alert("Please Enter minimum and maximum Price!")
          }
     }

     return (
          <div className={styles.container}>
               <div>
                    <input placeholder="Inter min-price" 
                         value={allState.minPrice} 
                         onChange={(event)=> setAllState({...allState,minPrice : event.target.value})}
                    />
                    <input placeholder="Inter max-price" 
                         value={allState.maxPrice} 
                         onChange={(event)=> setAllState({...allState,maxPrice : event.target.value})}
                    />
               </div>
               <button onClick={searchHandler}>Search</button>
          </div>
     );
}

export default SearchBar;
