import { useState } from 'react'
import Select from 'react-select'
import './App.css'

function App() {
	const options = [
		{
			value: 'foo',
			label: 'Foo',
		},
		{
			value: 'bar',
			label: 'Bar',
		},
		{
			value: 'baz',
			label: 'Baz',
		},
	]
	const [newVal, setNewVal] = useState([])
	const onChange = (value) => {
		setNewVal(value)
	}
	return (
		<>
			<h2>Hello First MultiSelect</h2>
			<Select isMulti options={options} onChange={onChange}></Select>
			<hr />
			{newVal.length
				? newVal.map((elem, i) => {
						return (
							<div key={i}>
								<h2>{elem.value}</h2>
							</div>
						)
				  })
				: null}
		</>
	)
}

export default App
