import React from 'react'

const Home = () => {
    return (
        <div className="p-5 text-center bg-blue-200">
          <div className="bg-amber-50 w-md mx-auto ">
            <h1 className="text-2xl font-bold">To-Do Task</h1>
            <div className="flex gap-3 p-5">
              <input type="text" placeholder="enter task" className="w-full border-2 border-blue-700 " />
              <button className="px-4 py-2 bg-blue-700  text-white">add</button>
            </div>
    
          </div>
          </div>
    
      );
}

export default Home
