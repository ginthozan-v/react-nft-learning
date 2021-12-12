import React from 'react'
import SkeletonElement from './SkeletonElement';
import './SkeletonCard.css'

const SkeletonCard = () => {
    return (
        <div className='skeletonCard'>
            <SkeletonElement type="thumbnail" />
            <SkeletonElement type="title" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />

        </div>
    )
}

export default SkeletonCard
