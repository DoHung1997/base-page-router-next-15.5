import React from 'react';
import {GLOBE_CSS} from "@/constants";

type PropsType = {}

const HomeContainer: React.FC<PropsType> = (props) => {
    return (
        <div className={"w-full h-full"}>
            <div className={`w-full h-[${GLOBE_CSS.HEIGHT.HOME_NAVBAR_HEIGHT}px] bg-gray-200 flex justify-between items-center`}>
                <div>Search bar</div>
                
                <div>
                    <button>Create note</button>
                    <button>Logout</button>
                </div>
            </div>
            
            <div>Table note</div>
        </div>
    );
};

export default HomeContainer;