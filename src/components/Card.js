var collections = { 
    "0x0085015ecdAD34078CEB82C6FA84B3d2BAbfE5b0" : "redefinedbulls" , 
    "0x06596eD89aC4609DE47A21aF7E36b38b2dF57C26" : "vvs-miner-mole",
    "0x19317B3fc2F1Add6b7E17a0A03A5a269Ed5ce48b" : "beta-mascots",
    "0x47C4184a9c5Ad620D5243c850A33833a3Cd010f5" : "degen-ape-cronos-club",
    "0x8Dd9975c78423480a6188F55B0767fbF4478b001" : "boomer-squad-boom-rooms",
    "0xE1049178296ce004996AFb16B0816c5A95aC8482" : "bored-candy",
    "0x51112Bf32B9a1C64716DF2e6b82e63a04Bd384Fd" : "trooprz",
    "0xb650279e3d726B0c75C984cAA55341cB87A7F501" : "boomer-squad",
    "0xa996aD2b9f240F78b063E47F552037658c4563d1" : "argonauts",
    "0x4ab89f361a7db22beee8df47630c52b9167f7bb7" : "bob-adventures-2",
    "0x50a6aA29b9E99c9B8b81069a12EeFeDAC85919B7" : "cronos-apes",
    "0x5Cb9a12d31CF751ACc58B12B47cc4E093A6AB580" : "cronos-apes"
  }

function Card(props) {
    var divStyle = {
        backgroundImage: 'url(' + props.image + ')',
        width: '300px'
      };

    return (
        <div style={divStyle} class="card">
            <div class="container__info">
                <span>Rank : {(props.rank !== undefined) ? props.rank : "🤕"}</span>
            </div>
            <div class="container__profile">
                <img src={"https://cdn.ebisusbay.com/img/collections/" + collections[props.collection] + "/avatar.webp"} alt={props.name} />
                <div class="container__profile__text">
                    <h2>{props.name}</h2>
                    <p>by <b>{collections[props.collection]}</b></p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Card;
