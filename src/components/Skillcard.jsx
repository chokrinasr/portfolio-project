import React from 'react'

const skillcard = ({img,link}) => {
    return (
        <div class="col-sm-6 col-md-4 col-lg-3 item">
            <img src={img} alt="" className='sk-card-img' />
        </div>
    )
}

export default skillcard
