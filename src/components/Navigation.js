import { NavLink } from "react-router-dom";

function navigation() {
    return (
        
        <div className="navigation">
            <nav>
                <NavLink to='/'>
                    <div className="logo"></div>
                </NavLink>
                
                    <ul>
                        <NavLink to='/Collections'><li className="navlist">Collection</li></NavLink>
                        <NavLink to='/ResearchWallet'><li className="navlist">Research Wallet</li></NavLink>
                        <NavLink to='/PredictPage'><li className="navlist">Predict Tools</li></NavLink>
                    </ul>
            </nav>
        </div>
    );
  }
  
export default navigation;
