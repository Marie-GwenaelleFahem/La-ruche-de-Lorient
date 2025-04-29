import React from 'react';

function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-yellow-500 mb-4 animate-bounce">404</h1>
          <h2 className="text-2xl text-gray-700 mb-6">Oups ! On dirait que cette fleur n'a pas encore éclos...</h2>
          <p className="text-gray-600 mb-8">L'abeille que vous cherchez s'est peut-être envolée vers d'autres nectars.</p>
          <div className="relative w-48 h-48 mb-8">
            <div className="absolute w-full h-full rounded-full bg-yellow-300 animate-pulse"></div>
            <img
              src="https://raw.githubusercontent.com/tailwindlabs/heroicons/master/optimized/24/outline/beaker.svg" // Remplace par une image d'abeille ou de ruche
              alt="Abeille perdue"
              className="relative w-full h-full object-contain"
            />
          </div>
          <p className="text-gray-600 mb-4">Mais ne vous inquiétez pas, la ruche est toujours là !</p>
          <a href="/" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            Retour à la Ruche
          </a>
        </div>
      </div>
    );
  }
  
  export default NotFound;