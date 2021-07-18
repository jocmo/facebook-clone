import Image from 'next/image'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid'

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';

import HeaderIcon from './HeaderIcon'

function Header() {
    return (
        <div className="flex">
            {/* <h1>I am a header component</h1> */}
            {/* Left */}
            <div className="flex ml-2 items-center">
                <Image src="https://links.papareact.com/5me"
                    width="40"
                    height="40"
                    objectFit="fixed"
                />
                <div className="flex bg-gray-100 rounded-full p-2">
                    <SearchIcon className="h-6 text-gray-600"/>
                    <input type="text" placeholder="Search Facebook" className="bg-transparent flex ml-2 outline-none placeholder-bg-100"/>
                </div>
            </div>
            
            {/* Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-2 md:space-x-6">
                    <HeaderIcon Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>
            {/* Right */}
        </div>
    )
}

export default Header
