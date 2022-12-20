import axios from "axios";
import { useEffect, useState } from "react";
import Navigation from '../components/Navigation';

const baseURL = "http://localhost:8000/predict"

function PredictPage() {
    
    const [data, setData] = useState([]);
    const [searchID, setSearchID] = useState('0');
    const [prediction, setPrediction] = useState('');
    

    useEffect(() => {
      axios.get('https://api.ebisusbay.com/fullcollections?address=0xa996aD2b9f240F78b063E47F552037658c4563d1&pageSize=8888')
      .then((res) => setData(res.data.nfts))}, [])


    return (
      <div>
        <Navigation />
        <div className='predict_page'>
        {/* PRESENTATION */}
        <div className="presentation">
          <h3>What is a Predict Tools ?</h3>
          <p><span>Predict Tools</span> is a machine learning program that
           analyzes data and sales on the secondary market and predicts the price of your NFT based to several criteria:<br/><span>Trait, Rank, Floor, ect..</span><br/>
           For the moment the program use data of Argonauts, but an update will take place soon to add new collections.</p>
        </div>
        {/* INPUT */}
        <div className="input">
        <label>Argonauts # </label>
        <input placeholder="ID :" type='text' onChange={(e) => {
          var e_set = e.target.value - 1
          if(e.target.value === ""){
            setSearchID(0)
          }
          else
          setSearchID(e_set)
          setPrediction("__")
        }}/>
        </div>
        <div style={{width: "300px"}} className="card">
            <img className="nft" src={(data[searchID] !== undefined ? data[searchID].image : "https://media.tenor.com/hlKEXPvlX48AAAAC/loading-loader.gif")} alt='test'/>
            <div className="container__info">
                <span>Rank : {(data[searchID] !== undefined ? data[searchID].rank : "***")} </span>
            </div>
            <div className="container__profile">
              <img src="https://cdn.ebisusbay.com/img/collections/argonauts/avatar.webp" alt="logo_argonauts" />
              <div className="container__profile__text">
                  <h2>{(data[searchID] !== undefined ? data[searchID].name : "********")}</h2>
                  <p>by <b>Argonauts</b></p>
              </div>
              <button onClick={() => {
                var type = { "Terrestrial": "4", "Galaxy": "3", "Celestial":"2","Spirit":"1"}
                axios.post(baseURL,{"nftID":data[searchID].id,"rank":data[searchID].rank,"traitCount":data[searchID].attributes[8].value,"archetype":type[data[searchID].attributes[0].value],"floor":700})
                .then((res) => setPrediction(res.data))
                .catch(err => console.log(err));
                }}>
                Predict
              </button>
            </div>
        </div>
        {(isNaN(prediction["Prédicton"]) ? <p className="prediction" style={{color: "red"}}>Click on predict input ↗️</p> : <p className="prediction">Best price is : {Math.floor(prediction["Prédicton"])} cro</p>)}
        {/* <p className="prediction">Best price is : {Math.floor(prediction["Prédicton"])} cro</p> */}
      </div>
      </div>
      
      
    );
  }
  
export default PredictPage;