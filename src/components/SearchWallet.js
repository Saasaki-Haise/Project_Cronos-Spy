import {  useState } from "react";
import Profil from "./Profil";

function SearchWallet() {
    const [search, setSearch] = useState('');
    return (
      <div className="searchWallet">
        <form>
          <h1 class="text-center">Search Wallet</h1>
          <div class="input-container">
            <input placeholder="Enter Cronos Adress 0x..." type='text' onChange={(e) => {

              setSearch(e.target.value);
              }}/>
              <label>Wallet Adress</label>		
          </div>
        </form>
        <Profil walletAdress={search}/>
      </div>
    );
  }
  
  export default SearchWallet;