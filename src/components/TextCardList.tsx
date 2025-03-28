import React from 'react'


interface Item {
    headerText: string;
    upperText: string;
    checkList: string[];
    bottomText: string;
  }

type TextCardListProps ={TextCardItems :  Item[] , title : string}
const  TextCardList : React.FC<TextCardListProps> = ({TextCardItems , title}) =>{
  return (
    <section>
        <h3 className="py-1 text-center text-3xl font-medium uppercase sm:py-0 sm:text-xl md:text-2xl lg:text-4xl">
        {title}
      </h3>
      <div className="container mx-auto  py-8 bg-[#FFFBFA]">
      <div className="flex flex-col gap-2 md:gap-8">
        {TextCardItems.map((item, index) => (
          <div 
            key={index} 
            className=" rounded-lg overflow-hidden"
          >
            <div className={`p-4 ${(index+1) == TextCardItems.length ? '' : 'border-b'} md:border-none md:p-6`}>
              <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                  <h3 className=" text-lg md:text-2xl font-medium text-black uppercase md:text-center">
                    {item.headerText}
                  </h3>
                </div>
                <div className="flex-1 mx-auto py-1">
                  <p className="text-gray-600 mb-4 break-words">
                    {item.upperText}
                  </p>
                  <ul className="space-y-2">
                    {item.checkList.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-gray-700"
                      >
                         <span className='px-2'>✅</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {
                    item.bottomText && (
                        <p className="text-gray-600 mb-4 break-words">
                    {item.upperText}
                  </p>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default TextCardList