import React, { Component } from 'react'
import Buttons from './Buttons';

export class Hero extends Component {
    render() {
        return ( 
            <div className="bg-gray-100 flex">
                <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full sm:w-8/12 md:w-1/2 lg:py-24 lg:px-12">
                    <div className="xl:max-w-lg xl:ml-auto">
                        <img className="h-10" src="/img/logo.svg" alt="Workation" />
                        <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-72 sm:w-full sm:object-cover sm:object-center sm:hidden" src="/img/beach-work.jpg" alt="woman on beach" />
                        <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 md:text-4xl lg:text-3xl xl:text-4xl">
                            You can work from anywhere. <span className="text-brand-blue lg:block">Take advantage of it</span>
                        </h1>

                        <p className="mt-2 text-gray-600 sm:mt-4 md:text-xl">
                            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice
                            weather even when you're not on vacation.
                        </p>
                        <div className="mt-4 sm:mt-6">
                            <Buttons 
                                    link="/"
                                    title="Book Your Escape"
                                    utilClasses="btn-indigo bg-brand-blue md:mr-2 w-full md:w-auto text-white shadow-lg md:text-base" />
                            <br className="md:hidden" />                            
                            <Buttons 
                                link="/"
                                title="Learn More"
                                utilClasses="btn-gray w-full md:w-auto shadow-lg md:text-base" />
                        </div>
                    </div>
                </div> 
                <div className="hidden sm:block sm:w-4/12 md:w-1/2 sm:relative">
                    <img className="absolute inset-0 w-full h-full object-cover object-center" src="/img/beach-work.jpg" alt="woman on beach" />
                </div>
            </div>
        )
    }
}

export default Hero
