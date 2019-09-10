import React, { Component } from 'react';
import Card from './Card';

class CardsList extends Component {
    state = {
        popularDestinations: [
            {
                city: 'Toronto',
                averagePrice: 120,
                propertyCount: 76,
                imageUrl: '/img/toronto.jpg',
                imageAlt: 'Toronto skyline',
            },
            {
                city: 'Malibu',
                averagePrice: 215,
                propertyCount: 43,
                imageUrl: '/img/malibu.jpg',
                imageAlt: 'Cliff in Malibu',
            },
            {
                city: 'Chicago',
                averagePrice: 130,
                propertyCount: 115,
                imageUrl: '/img/chicago.jpg',
                imageAlt: 'Chicago skyline',
            },
            {
                city: 'Seattle',
                averagePrice: 135,
                propertyCount: 63,
                imageUrl: '/img/seattle.jpg',
                imageAlt: 'Seattle skyline',
            },
            {
                city: 'Colorado',
                averagePrice: 85,
                propertyCount: 47,
                imageUrl: '/img/colorado.jpg',
                imageAlt: 'Lake in Colorado',
            },
            {
                city: 'Miami',
                averagePrice: 115,
                propertyCount: 86,
                imageUrl: '/img/miami.jpg',
                imageAlt: 'Beach in Miami',
            },
        ]
    }
    render() {
        const destinations = this.state.popularDestinations;
        const cardslist = destinations.map((destination, index) => {
            return (
                <Card key={index} destination={destination} />
            )
        });

        return (
            <div className="max-w-md sm:max-w-full md:max-w-full lg:max-w-6xl mx-auto px-8 lg:py-24 lg:px-12 py-8">
                <div className="text-center">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 leading-tight sm:mb-4 md:text-3xl lg:text-3xl">
                        Popular destinations</h2>
                    <p className="text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
                </div>
                <div className="flex flex-wrap py-8 sm:-mx-2">
                    { cardslist }
                </div>
            </div>
        )
    }
}

export default CardsList;