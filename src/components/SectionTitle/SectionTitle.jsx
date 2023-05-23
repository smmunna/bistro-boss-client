import React from 'react';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='mx-auto text-center my-12 w-2/4 '>
            <h3 className='md:mb-3'>{subheading}</h3>
            <div className='border-b-2 border-t-2 p-3'>
                <h3 className='text-3xl font-semibold'>{heading}</h3>
            </div>
        </div>
    );
}

export default SectionTitle;
