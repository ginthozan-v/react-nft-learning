import React from 'react'
import SkeletonElement from './SkeletonElement'
import './SkeletonMain.css'

const SkeletonMain = () => {
    return (
        <div className='skeletonMain'>



            <div>
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
            </div>
        </div>
    )
}

export default SkeletonMain
