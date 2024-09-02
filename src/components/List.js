import React from 'react'

function List(props) {
    // conditional rendering
    const cars = props.cars.filter(i => i.isActive);

    const carList = cars.map((car) => (
        <p>
            {car.id}, {car.brand}, {car.color}, {car.isActive}
        </p>
    ));

    return (
        <>
            {carList}
        </>
    )
}  

export default List;