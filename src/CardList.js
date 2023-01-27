import React from 'react'
import  Card from './Cards'

const CardList = ( {robots}) => {

        return (
            <div >
            <div className='row'>
                <div className='d-flex flex-wrap'>
                {
                    robots.map((user,i) => {
                        return ( 
                            <div className='col-lg-2'>
                            <Card key={i} id={robots[i].id} name={robots[i].name} age={robots[i].age} />
                            </div>
                        )
                    })
                }
                </div>
                </div>
            </div>
        )
}

export default CardList