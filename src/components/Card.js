 import React from 'react';
 
 const Card = props => {
    const { city, averagePrice, propertyCount, imageUrl, imageAlt } = props.destination;
    const link = '/' + city.toLowerCase();

     return (
         <div className="w-full sm:w-6/12 lg:w-4/12 sm:px-2 mb-6">
             <div className="flex items-stretch h-full rounded-lg bg-white shadow-lg overflow-hidden">
                 <img className="min-h-full w-32 flex-shrink-0 object-cover object-center" src={imageUrl} alt={imageAlt} />
                 <div className="px-4 sm:px-6 py-4 sm:w-auto">
                     <h3 className="text-lg font-semibold text-gray-800">{city}</h3>
                     <p className="text-gray-600 text-sm sm:text-base">${averagePrice} / night average</p>
                     <div className="mt-4">
                         <a href={link} className="text-indigo-500 hover:text-indigo-400 font-semibold text-xs">Explore {propertyCount} properties</a>
                     </div>
                 </div>
             </div>
         </div>
     )
 }
 
 export default Card;
 