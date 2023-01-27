import { useState, useEffect } from "react";
import { apiGetAuthorization } from "../../utils/api/axios";
import "./CheckoutRight.css";


const CheckoutRight = () => {

    const [pickup, setPickUp] = useState("");
    
    const [pickupDetails, setPickupDetails] = useState([])

    const getPickUpCenters = async (e) => {

        e.preventDefault()

        if(pickup === "") return "";
        
        try{
            const {data} = await apiGetAuthorization(`pickup/state/${pickup}`);
            setPickupDetails(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    useEffect(()=>{
        getPickUpCenters()
    }, [])

    return ( 
        <div className="right">
            <div className="checkout-right">
                    <div className="checkout-pickup-text">
                        <h3>Pickup States</h3>
                        <div className="checkout-pickup">
                            <form>
                            <label htmlFor="pickup-stations" >Select a pickup station near you: </label>
                            <select onChange={(e) => setPickUp(e.target.value)} name="pickup" id="">
                                <option value="">Select state</option>
                                <option value="Abia">Abia</option>
                                <option value="Adamawa">Adamawa</option>
                                <option value="Akwa Ibom">Akwa Ibom</option>
                                <option value="Anambra">Anambra</option>
                                <option value="Bauchi">Bauchi</option>
                                <option value="Bayelsa">Bayelsa</option>
                                <option value="Benue">Benue</option>
                                <option value="Borno">Borno</option>
                                <option value="Cross River">Cross River</option>
                                <option value="Delta">Delta</option>
                                <option value="Ebonyi">Ebonyi</option>
                                <option value="Edo">Edo</option>
                                <option value="Ekiti">Ekiti</option>
                                <option value="Enugu">Enugu</option>
                                <option value="Gombe">Gombe</option>
                                <option value="Imo">Imo</option>
                                <option value="Jigawa">Jigawa</option>
                                <option value="Kaduna">Kaduna</option>
                                <option value="Kano">Kano</option>
                                <option value="Katsina">Katsina</option>
                                <option value="Kebbi">Kebbi</option>
                                <option value="Kogi">Kogi</option>
                                <option value="Kwara">Kwara</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Nasarawa">Nasarawa</option>
                                <option value="Niger">Niger</option>
                                <option value="Ogun">Ogun</option>
                                <option value="Ondo">Ondo</option>
                                <option value="Osun">Osun</option>
                                <option value="Oyo">Oyo</option>
                                <option value="Plateau">Plateau</option>
                                <option value="Rivers">Rivers</option>
                                <option value="Sokoto">Sokoto</option>
                                <option value="Taraba">Taraba</option>
                                <option value="Yobe">Yobe</option>
                                <option value="Zamfara">Zamfara</option>
                            </select>
                            <input className="submit" onClick={getPickUpCenters} type="submit" value="Submit"/>
                            </form>
                            <div className="location">
                                {/* <h3>Select your Pickup Centers here </h3> */}
                               {pickupDetails.length > 0 && pickupDetails.map((item, index)=>
                                <label class="container">
                                <input type="radio" checked="checked" name="radio"></input>
                                    <div >
                                            
                                            <form onSubmit={handleSubmit}>
                                                    <ul key={index}>
                                                    
                                                        <p >{item.name}</p>
                                                        <p>{item.location}</p>
                                                        <p>{item.state}</p>
                                                        <p>{item.phone}</p>
                                                        <p>{item.email}</p>
                                                        <p>Delivery fee: ₦{item.delivery}</p>

                                                    </ul>
                                            </form>
                                        </div> 
                                        <div>
                                            
                                        </div>
                                        
                                {/* <span class="checkmark"></span> */}
                                </label>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="payment-method">
                        
                        <button>Pay with Wallet</button>

                    </div>
                </div>
        </div>
     );
}
 
export default CheckoutRight;