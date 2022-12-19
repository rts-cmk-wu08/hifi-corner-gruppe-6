import React, { useContext } from 'react'
import { CompareContext } from '../../Contexts/CompareContext'
import { useQuery } from 'react-query'

export default function CompareBox() {

    const compareProducts = useQuery(['products'], () => {
        return 
    })


    const { compareContext, setCompareContext } = useContext(CompareContext)
    console.log(compareContext)

    return (
        <div className='compareBox'>
            <h1>CompareBox</h1>
        </div>
    )
}