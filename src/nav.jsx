import GeeksFoodLogo from './assets/GeeksFoodLogo.svg'
import './nav.css'
import Button from './button.jsx'
function NavSection(){
   return  <>
    <div className="nav-container">
    <div className="main-logo">
        <img src={GeeksFoodLogo} alt="" />
        <h2>GeeksFoods</h2>
    </div>
     <div>
        <ul className="list-items">
            <li>Home</li>
            <li>Quote</li>
            <li>Resturants</li>
            <li>Foods</li>
            <li>Contact</li>
        </ul>
     </div>
     <Button BtnName="Get Started"/>
    </div>
    

    </>
}
export default NavSection;