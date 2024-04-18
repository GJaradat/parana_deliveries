import { useState } from "react";

const DeliveryForm = ({postDelivery}) => {
    
    const [flatNumber, setFlatNumber] = useState(0);
    const [streetName, setStreetName] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [postcode, setPostcode] = useState("");

   
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newDelivery = {
            flatNumber,
            streetName,
            city,
            country,
            postcode
        }
        postDelivery(newDelivery);
        setFlatNumber(0);
        setStreetName("");
        setCity("");
        setCountry("");
        setPostcode("");
    }
    
    return (  
        <>

            <form onSubmit={handleFormSubmit}>
                <label htmlFor="address">House/Flat Number:</label>
                <input 
                    id="flat-number"
                    type="number"
                    name="flat-num"
                    onChange={(e)=>{setFlatNumber(e.target.value)}}
                />
                <label htmlFor="address">Street Name:</label>
                <input 
                    id="street-name"
                    type="text"
                    name="street"
                    onChange={(e)=>{setStreetName(e.target.value)}}
                />
                <label htmlFor="address">City</label>
                <input 
                    id="city"
                    type="text"
                    name="city"
                    onChange={(e)=>{setCity(e.target.value)}}
                />
                <label htmlFor="address">Country:</label>
                <input 
                    id="country"
                    type="text"
                    name="country"
                    onChange={(e)=>{setCountry(e.target.value)}}
                />
                <label htmlFor="address">Postcode:</label>
                <input 
                    id="postcode"
                    type="text"
                    name="postcode"
                    onChange={(e)=>{setPostcode(e.target.value)}}
                />
                <input 
                    type="submit"
                    value="Add Delivery"
                />

            </form>
        </>
    );
}
 
export default DeliveryForm;