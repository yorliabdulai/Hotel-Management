'use client'

import React, { FC } from "react";
import CountUpNumber from "../countUpNumber/countUpNumber";

type Props = {
    heading1: React.ReactNode
    section2: React.ReactNode
}

const ClientComponent: FC<Props> = props => {
const {heading1, section2} = props
    return (
        <section className="flex px-4 items-center gap-12 container mx-auto">
          <div className="py-10 h-full">
          {heading1}
            
           <div className="flex justify-between mt-12">
             <div className="flex gap-3 justify-between flex-col items-center">
                <p className="text-xs lg:text-xl text-center">Basic Room</p>
                <CountUpNumber duration={3000} endValue={200}/>
             </div>
             <div className="flex gap-3 justify-between flex-col items-center">
                <p className="text-xs lg:text-xl text-center">Luxury Room</p>
                <CountUpNumber duration={3000} endValue={200}/>
             </div>
             <div className="flex gap-3 justify-between flex-col items-center">
                <p className="text-xs lg:text-xl text-center">Suite</p>
                <CountUpNumber duration={3000} endValue={200}/>
             </div>
           </div>
          </div>
          {/* Images */}
          {section2}
        </section>
    )
}
export default ClientComponent;