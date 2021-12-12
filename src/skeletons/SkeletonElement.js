import React from 'react'
import Shimmer from './Shimmer';
import './Skeleton.css'

const SkeletonElement = ({ type }) => {
    const classes = `skeleton ${ type }`;

    return <div className={classes}>
        {/* <Shimmer /> */}
    </div>
}

export default SkeletonElement
