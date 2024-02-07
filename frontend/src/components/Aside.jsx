
import React from 'react';

const category = ['Programming',
        'Data Science',
        'Technology',
        'Self Improvement',
        'Writing',
        'Relationships',
        'Machine Learning',
        'Productivity',
        'Politics'];

function Aside() {
    return (
        <div className='w-1/3 hidden md:flex flex-col justify-between sticky top-[15vh]'>
          <div>
            <h1 className='font-bold'>
              Discover more of what matters to you
            </h1>
            <div className='w-full mt-4 flex justify-start flex-wrap px-2'>
              {
                category.map((cat,i) => <div key={i} className='px-4 py-2 rounded-full bg-gray-100 my-1 mx-2 text-sm'>{cat}</div>)
              }
            </div>
          </div>
        </div>
    )
}

export default Aside;