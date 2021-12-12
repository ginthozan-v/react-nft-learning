import React from 'react'
import './Main.css'

import InstagramIcon from '../assets/owner/instagram.png'
import TwitterIcon from '../assets/owner/twitter.png'
import MoreIcon from '../assets/owner/more.png'
import SkeletonMain from '../skeletons/SkeletonMain'
import SkeletonElement from '../skeletons/SkeletonElement'

const Main = ({ activePunk }) => {

    return (
        <div className='main'>
            <div className='mainContent'>
                {activePunk ?
                    <div className='punkHighLight'>
                        <div className='punkContainer'>
                            <img className='selectedPunk' src={activePunk?.image_original_url} alt="nftImg" />
                        </div>
                    </div>
                    : <SkeletonElement type='thumbnail' />}
                <div className='punkDetails'>
                    {activePunk ? <div className='title'>
                        {activePunk?.name} <div className='id'> •#{activePunk?.token_id}</div>
                    </div> : <SkeletonElement type="Bigtitle" />}

                    <span className='punkDetails__bottom'>
                        <div className='ownerDetails'>

                            {activePunk ?
                                <img src={activePunk?.owner.profile_img_url} alt="" /> : <SkeletonElement type='avatar' />}
                            <div>
                                {activePunk ?
                                    <div>
                                        <p className='address'>{activePunk?.owner.address}</p>
                                        <p className='username'>@{activePunk?.owner.user.username}</p>
                                    </div> :
                                    <div>
                                        <SkeletonElement type="text" />
                                        <SkeletonElement type="text" />
                                    </div>
                                }

                            </div>
                        </div>
                        <div >
                            {activePunk ?
                                <div className='socialMedia'>
                                    <img src={InstagramIcon} alt="Instagram" />
                                    <img src={TwitterIcon} alt="Twitter" />
                                    <img src={MoreIcon} alt="More" />
                                </div> :
                                <div style={{ display: 'flex', gap: '4' }}>
                                    <SkeletonElement type='avatar' />       <SkeletonElement type='avatar' />       <SkeletonElement type='avatar' />
                                </div>
                            }
                        </div>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Main
