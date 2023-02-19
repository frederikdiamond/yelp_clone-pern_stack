import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState([])
    const [selectedRestaurant, setSelectedRastaurant] = useState(null)

    const addRestaurants = (restaurant) => {
        setRestaurants([...restaurants, restaurant])
    }

    return (
        <RestaurantsContext.Provider value={{ restaurants, setRestaurants, addRestaurants, selectedRestaurant, setSelectedRastaurant }}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}