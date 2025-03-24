import React from 'react'
import  {X} from 'lucide-react'

interface Drawer2Page {
    show : boolean,
    setShow : ()=> void
}
function Drawer({show , setShow} : Drawer2Page) {
    return (
        <>
         {show && (
        <div 
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-40 overflow-hidden"
          onClick={setShow}
        />
      )}
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full overflow-hidden bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${show ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <div className='flex justify-between items-center mb-6'>  
        <h2 className="text-xl font-bold mb-4">Menu</h2>
          {/* Close Button */}
          <button 
            onClick={setShow}
            className="absolute top-4 left-[50%] p-1 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
          </div>
          {/* Drawer Content */}
          <div className="mt-8">
            
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="block py-2 hover:text-blue-500">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 hover:text-blue-500">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 hover:text-blue-500">Services</a>
                </li>
                
              </ul>
            </nav>
          </div>
        </div>
      </div>
        </>
      );
}

export default Drawer