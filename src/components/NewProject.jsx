import { useRef } from 'react';
import Input from './Input.jsx';

const NewProject = ({onAdd}) => {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value

        // Validation ...
        if (enteredTitle.length === 0) {
            alert('Please enter a title')
            return
        }

        if (enteredDescription.length === 0) {
            alert('Please enter a description')
            return
        }

        if (enteredDueDate.length === 0) {
            alert('Please enter a due date')
            return
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        })

    }

    return (
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li>
                    <button className='text-stone-800 hover:text-stone-950'>Cancel</button>
                </li>
                <li>
                    <button 
                        className='bg-stone-800 py-2 px-6 rounded-md text-stone-50 hover:bg-stone-950'
                        onClick={handleSave}
                    >Save</button>
                </li>
            </menu>
            <div>
                <Input ref={title} label='Title' />
                <Input ref={description} label='Description' textarea />
                <Input ref={dueDate} label='Due Date' />
            </div>
        </div>
    )
};

export default NewProject;
