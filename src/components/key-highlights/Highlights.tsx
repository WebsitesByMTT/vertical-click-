import React from 'react';
import Award from '@/assets/icons/award.png';
import Battery from '@/assets/icons/battery.png';
import Tools from '@/assets/icons/tools.png';
import Views from '@/assets/icons/views.png';
import Engagement from '@/assets/icons/Icon (1).png';
import Trend from '@/assets/icons/Icon.png';
import Image from 'next/image';

function Highlights() {
    const hitems = [
        {
            icon: Battery,
            msg: 'Creativity-driven approach',
        },
        {
            icon: Views,
            msg: 'Data-backed insights',
        },
        {
            icon: Engagement,
            msg: 'High audience engagement',
        },
        {
            icon: Trend,
            msg: 'Staying ahead of trends',
        },
        {
            icon: Award,
            msg: 'Award-winning solutions',
        },
        {
            icon: Tools,
            msg: 'Cutting-edge tools',
        },
    ];

    return (
        <div className="px-4 w-auto md:w-[70vw] mx-auto ">
            <h2 className='text-xl md:text-xl py-4 pb-8 font-semibold mx-auto'> KEY HIGHLIGHTS </h2>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
                {hitems.map((item, index) => (
                    <div key={index} className="px-6 md:px-4 py-2 md:py-6 rounded-md bg-violet-100 ">
                        <Image src={item.icon} alt={item.msg} width={50} height={50} className='w-6 md:w-8  pb-4 md:pb-2'/>
                        <span className="text-xs md:text-md font-normal md:font-bold mt-2 ">{item.msg}</span>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Highlights;
