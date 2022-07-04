import React, { useState, useCallback } from 'react'
import AsyncCreatableSelect from 'react-select/creatable'
import makeAnimated from 'react-select/animated'
import './App.css'

function App() {
	const [value, setValue] = useState()
	const [options, setOptions] = useState([
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'orange', label: 'Orange' },
		{ value: 'berry', label: 'Berry' },
	])
	const animatedComponents = makeAnimated()

	const handleChange = useCallback((inputValue) => setValue(inputValue), [])

	const handleCreate = useCallback(
		(inputValue) => {
			const newValue = { value: inputValue.toLowerCase(), label: inputValue }
			setOptions([...options, newValue])
			setValue(newValue)
		},
		[options],
	)

	const loadOptions = (inputValue, callback) =>
		setTimeout(() => {
			callback(
				options.filter((item) =>
					item.label.toLowerCase().includes(inputValue.toLowerCase()),
				),
			)
		}, 3000)
	return (
		<>
			<h2>Hello Fourth async Creatable MultiSelect</h2>
			<div className='App'>
				<AsyncCreatableSelect
					components={animatedComponents} // animate builtin components
					isMulti
					isClearable
					value={value}
					options={options}
					onChange={handleChange}
					onCreateOption={handleCreate}
					cacheOptions
					loadOptions={loadOptions}
				/>
			</div>
		</>
	)
}

export default App
