import { useState } from 'react'
import Creatable from 'react-select/creatable'
import './App.css'

function App() {
	const [tagInputValue, setTagInputValue] = useState('')
	const [tagValue, setTagValue] = useState('')

	const handleChange = (field, value) => {
		switch (field) {
			case 'tags':
				setTagValue(value)
				break
			default:
				break
		}
	}

	const handleKeyDown = (event) => {
		if (!tagInputValue) return
		switch (event.key) {
			case 'Enter':
			case 'Tab':
				setTagValue([...tagValue, createOption(tagInputValue)])
				setTagInputValue('')
				event.preventDefault()
				break
			default:
				break
		}
	}

	const createOption = (label) => ({
		label,
		value: label,
	})

	const handleInputChange = (value) => {
		setTagInputValue(value)
	}

	return (
		<>
			<h2>Hello third Creatable MultiSelect</h2>
			<div className='input'>
				<label>Ingredients</label>
				<Creatable
					isClearable
					isMulti
					components={{ DropdownIndicator: null }}
					inputValue={tagInputValue}
					menuIsOpen={false}
					onChange={(value) => handleChange('tags', value)}
					placeholder='Type something and press enter...'
					onKeyDown={handleKeyDown}
					onInputChange={handleInputChange}
					value={tagValue}
				/>
			</div>

			<hr />
			{tagValue.length
				? tagValue.map((elem, i) => {
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
