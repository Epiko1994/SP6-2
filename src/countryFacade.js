import React, {useState, useEffect} from "react";

const countryFacade = () => {

  const getLabels = () => {
    //TODO: Get Labels from server
    const [labels, setLabels] = useState("");
    
  }


const getCountries = () => {
      //TODO: Get Countries from server
      const [country, setCountry] = useState("");
      
      var opts = {
        headers: {
          "Content-type": "application/json",
          'Accept': 'application/json',
        }
      }
      fetch("http://localhost:3333/countries")
      .then(res => res.json())
      .then(data => setCountry(data.value))
      .catch(err => console.log(err))

      return (
        <div>
          <tbody>
            <tr>
              <td> {country.Name} </td>
            </tr>
          </tbody>
        </div>
      )
};
  
  return {
    getLabels,
    getCountries
  }
}

export default countryFacade();