import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export const Account = () => {
	let user = JSON.parse(localStorage.getItem('user'))
	const [id, setId] = useState(user.userDetails.id);
	const [name, setName] = useState(user.userDetails.name);
	const [address, setAddress] = useState(user.userDetails.address);
	const [city, setCity] = useState(user.userDetails.city);
	const [state, setState] = useState(user.userDetails.state);
	const [country, setCountry] = useState(user.userDetails.country);
	const [pincode, setPincode] = useState(user.userDetails.pincode);
	const navigate = useNavigate();

	async function Update() {
		if (name == "") {
			alert("Enter your name")
		}
		else {
			let item = { id, name, address, city, state, country, pincode}
			let result = await fetch("http://127.0.0.1:8000/api/update-user", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(item)
			});
			result = await result.json();
			//console.warn("result",result);
			localStorage.setItem("user", JSON.stringify(result));
			alert("Your account update successful!");
			navigate("/account");
		}
	}

	return (
		<div className="col-sm-6 offset-sm-3">
			{
				localStorage.getItem('user') ?
					<>
						<h4>Welcome {user.userDetails.name}</h4>
						<h5>Your account details are as below</h5>
						Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='form-control mb-3' />
						Adress: <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className='form-control mb-3' />
						City: <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className='form-control mb-3' />
						State: <input type="text" value={state} onChange={(e) => setState(e.target.value)} className='form-control mb-3' />
						Country: <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className='form-control mb-3' />
						Pincode: <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} className='form-control mb-3' />
						<button onClick={Update} className='form-control btn btn-primary'>Update</button>
					</>
					:
					null
			}
		</div>
	)
}

export default Account