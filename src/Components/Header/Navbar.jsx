import React from 'react'
import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {

    const dropdowns = [
        {
            title: "Home",
            type: "image",
            width: "w-[800px]", // Custom width for Home
            items: [
                {
                    label: "Welcome",
                    link: "/welcome",
                    image: "/blog3.jpg",
                },
                {
                    label: "About Us",
                    link: "/about",
                    image: "/blog4.jpg",
                },
                {
                    label: "Contact",
                    link: "/contact",
                    image: "/blog5.jpg",
                },
                {
                    label: "Gallery",
                    link: "/gallery",
                    image: "/fp6.jpg",
                },
                {
                    label: "Gallery",
                    link: "/gallery",
                    image: "/fp6.jpg",
                },
                {
                    label: "Gallery",
                    link: "/gallery",
                    image: "/fp6.jpg",
                },
            ],
        },
        {
            title: "Pages",
            width: "w-48", // Narrower dropdown
            items: [
                { label: "Contact", link: "/contact" },
                { label: "Gallery", link: "/gallery" },
                { label: "Services", link: "/services" },
            ],
        },
        {
            title: "Donation",
            width: "w-40", // Even narrower
            items: [
                { label: "Make a Donation", link: "/donate" },
                { label: "Our Causes", link: "/causes" },
            ],
        },
        {
            title: "Shop",
            width: "w-64", // Wider dropdown
            items: [
                { label: "Products", link: "/products" },
                { label: "Cart", link: "/cart" },
                { label: "Checkout", link: "/checkout" },
            ],
        },
        {
            title: "Blog",
            width: "w-56", // Medium width
            items: [
                { label: "Latest Posts", link: "/posts" },
                { label: "Categories", link: "/categories" },
                { label: "Archives", link: "/archives" },
            ],
        },
    ];

    return (
        <div>
            <div className='flex justify-around items-center bg-white py-3'>
                <div className='flex justify-start items-center gap-2'>
                    <img src="/love.png" alt="" className='w-12 h-12' />
                    <p className='font-bold text-2xl'>D-Club</p>
                </div>
                <div className='flex justify-start items-center gap-8'>
                    {dropdowns.map((dropdown, index) => (
                        <Dropdown
                            key={index}
                            title={dropdown.title}
                            items={dropdown.items}
                            type={dropdown.type}
                            width={dropdown.width} // Pass custom width
                        />
                    ))}
                </div>
                <div>
                    <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-md'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar