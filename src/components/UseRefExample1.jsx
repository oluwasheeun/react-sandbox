import { useRef, useState } from 'react'

function UseRefExample1() {
	const inputRef = useRef()
	const paraRef = useRef()

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(inputRef.current.value)
		inputRef.current.value = 'Oluwaseun Olukayode'
		inputRef.current.style.color = 'blue'

		paraRef.current.innerText = 'Goodbye'
		paraRef.current.style.color = 'Red'
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name' className='mt-4'>
					Name
				</label>
				<input type='text' id='name' className='form-control mb-2' ref={inputRef} />
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
			<hr />
			<p onClick={() => inputRef.current.focus()} ref={paraRef} />
		</div>
	)
}

export default UseRefExample1
