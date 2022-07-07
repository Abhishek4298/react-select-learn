import React, { useState, useCallback } from 'react'
import AsyncCreatableSelect from 'react-select/creatable'
import makeAnimated from 'react-select/animated'
import './App.css'

function App() {
	const [value, setValue] = useState()
	const [options, setOptions] = useState([
		{
			'id': 1,
			'label': 'React',
			'value': 'react',
		},
		{
			'id': 2,
			'label': 'Node',
			'value': 'node',
		},
		{
			'id': 3,
			'label': 'Aws',
			'value': 'aws',
		},
	])

	const animatedComponents = makeAnimated()
	const handleChange = useCallback((inputValue) => setValue(inputValue), [])

	const handleCreate = useCallback(
		(inputValue) => {
			const newValue = { value: inputValue.toLowerCase(), label: inputValue }
			setOptions([...options, newValue])
			setValue([...options, newValue])
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
			<h1>React APP on Heroku</h1>
			<hr />
			<h2>Languages known by Abhishek</h2>
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
				<hr />

				<img
					src='https://railsfactory.com/assets/images/reactjs-img.png'
					alt='test Img'
				/>
			</div>
			<hr />
		</>
	)
}

export default App
