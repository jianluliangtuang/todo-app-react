import React from 'react'

const Home = () => {



    return (
        <div className="p-5 text-center bg-blue-200">
          <div className="bg-amber-50 w-md mx-auto ">
            <h1 className="text-2xl font-bold">To-Do Task</h1>
            <div className="flex gap-3 p-5">
              <input type="text" placeholder="Enter Task" className="w-full border-2 border-blue-600 ps-3 " />
              <button className="px-4 py-2 bg-blue-700  text-white">add</button>
            </div>
          <div className='p-5 '>
            <div className='p-2 bg-blue-100 text-start flex justify-between rounded'>
                <input type="text" className="w-full outline-0 "/>
            <button className="px-3 py-1 bg-blue-700 flex font-medium me-1  text-red-500">x</button>
            </div>
         </div>
          </div>
          </div>
    
      );
}

export default Home
