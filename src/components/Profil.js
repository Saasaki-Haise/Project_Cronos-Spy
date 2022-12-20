import axios from "axios";
import { useEffect, useState } from "react";
import ListNFTs from "./ListNFTs";

function Profil(props) {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('https://api.ebisusbay.com/wallets?wallet=' + props.walletAdress + '&pageSize=1000&page=1')
        .then((res) => setData(res.data))
        }
         , [props.walletAdress]
        );


        return (
            <div className="profil">
                <h1>Profil</h1>
                <p>Adress Wallet : {props.walletAdress}</p>
                <ListNFTs data={data.data}/>
            </div>
        );
  }
  
export default Profil;