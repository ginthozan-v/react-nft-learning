import React from 'react'
import SkeletonCard from '../skeletons/SkeletonCard'
import CollectionCard from './CollectionCard'
import './PunkList.css'
const PunkList = ({ punkListData, selectPunk }) => {
    console.log(punkListData)
    return (
        <div className='punkList'>
            {punkListData.length > 0 ? punkListData.map(punk => (
                <div onClick={() => selectPunk(punk)}>
                    <CollectionCard
                        key={punk.token_id}
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_original_url} />
                </div>
            )) : [1, 2, 3, 4, 5, 6].map(n => <SkeletonCard key={n} />)}

        </div>
    )
}

export default PunkList
