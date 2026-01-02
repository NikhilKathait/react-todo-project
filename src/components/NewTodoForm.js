import React, {useState} from 'react';

function NewTodoForm(props) {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    return (
        <div className='mt-3'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input type='text'
                        className='form-control'
                        placeholder='Enter assignee name'
                        required
                        onChange={(e) => setAssigned(e.target.value)}
                        value={assigned}>
                    </input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea
                        className='form-control'
                        placeholder='Enter todo description'
                        rows={3}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}>
                    </textarea>
                </div>
                <button type='button' 
                    className='btn btn-primary mt-3' 
                    onClick={submitTodo}>
                        Add Todo Item
                </button>
            </form>
        </div>
    )
}

export default NewTodoForm;