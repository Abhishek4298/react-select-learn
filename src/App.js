import { useState } from 'react'
import Creatable from 'react-select/creatable'

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

	const onHandleChange = (field, value) => {
		switch (field) {
			case 'options':
				setNewVal(value)
				break
			default:
				break
		}
	}
	return (
		<>
			<h2>Hello second Creatable MultiSelect</h2>

			<Creatable
				isClearable
				isMulti
				options={options}
				onChange={(values) => onHandleChange('options', values)}
				value={newVal}
			/>
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
