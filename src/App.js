import { useEffect, useState } from 'react';
import './App.css';
import animalData from './data/data.json';
import Animal from '../src/components/Animal/Animal';

function App() {
	const [animals, setAnimal] = useState([])
	useEffect(()=>{
		setAnimal(animalData);
		console.log(animalData);
	},[])
	return (
		<div className="App" style={{marginLeft:'20px'}}>
			<p style={{fontSize:'30px', fontWeight:'200'}}><span style={{color:'red'}}>FAKE API</span> CREATE USER INFORMATION</p>
			{
				animals.map(animalItem => <Animal animalItem={animalItem}></Animal> )
			}
		</div>
	);
}
export default App;
