
import React from 'react';
import { toast } from 'react-toastify';

function TagInput({tags,setTags}) {

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
          if(tags.length === 3){
            toast.error('Tag limit exceeds !!!');
            return;
          }
          setTags([...tags,e.target.value]);
          e.target.value = '';
        }
      }
    
      const removeTag = (index) =>{
        setTags(tags.filter((tag,i) => i !== index));
      }

    return (
        <div className='w-full mt-2'>
            <ul className='flex border px-2 border-slate-300 items-center h-[40px]'>
            {
              tags.map((tag,i) => (
                <li className='mr-2 bg-slate-200 px-2 py-[1px] border shadow w-auto' key={i}>
                  {tag} <span className='text-slate-400 cursor-pointer ml-1 hover:text-slate-600'
                          onClick={() => removeTag(i)} 
                        >
                          <i class="fa-solid fa-xmark"></i>
                        </span>
                </li>
                )
              )
            }
            <input 
              type="text"
              id='tags'
              placeholder='Add Tags (max. 3)'
              required
              onKeyUp={handleKeyPress}
              className='focus:outline-none' />
          </ul>
        </div>
    )
}

export default TagInput;