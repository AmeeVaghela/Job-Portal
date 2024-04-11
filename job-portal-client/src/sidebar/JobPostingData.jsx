import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({ handleChange }) => {
    const now = new Date();
    //console.log(now)
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);
    //convert date tostring
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().split(0, 10)
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().split(0, 10)
    const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().split(0, 10)
    return (
        <div>
            <h4 className='text-lg font-lg mb-2'>Date of posting</h4>
            <div>
                <label className='sidebar-label-container'><input type="radio" name='test' id='test' value="" onChange={handleChange} /><span className='checkmark'></span>All time</label>
                <InputField handleChange={handleChange} value={twentyFourHoursAgo} title="Last 24 Hours" name="test" />
                <InputField handleChange={handleChange} value={sevenDaysAgo} title="Last 7 days" name="test" />
                <InputField handleChange={handleChange} value={ThirtyDaysAgo} title="Last 30 Month" name="test" />

            </div>
        </div>
    )
}

export default JobPostingData
