import { useEffect, useState } from "react";
import Card from "./Card";

function ListNFTs(props) {
  const [data, setData] = useState();

  useEffect(() => {
    setData(props.data);
  }, [props.data])

    return (
      <div className="listNFTs">
        <h3>Liste NFT's</h3>
        <p>Erc721 : {(data !== undefined) ? data.erc721.length : "error" }</p>
        <p>Erc1155 : {(data !== undefined) ? data.erc1155.length : "error" }</p>
        <ul>
          {(data !== undefined) ? data["erc721"].map((e) => <li><Card name={e.name} image={e.image} rank={e.rank} collection={e.nftAddress}/></li> ) : <li>Error data ...</li>}
        </ul>

      </div>
    );
  }
  
  export default ListNFTs;