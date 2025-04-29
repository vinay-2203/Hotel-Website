import React from 'react';
function Hero() {
    return (
        <div className='container mt-5'>
            <div color='row p-5 mt-5 text-center' style={{ backgroundColor: '#FF0B55', borderRadius: '0.5rem', height: '80px', width: '100%', color: 'white' }}>
                <p className='p-1'>Every journey begins with a desire to explore, but it’s the comfort of where you stay that truly makes the experience unforgettable. From luxury suites to cozy corners, we help you find a space that feels like home — wherever you are.We believe a great stay isn’t just about soft beds and warm lights — it’s about feeling cared for. Whether you're escaping to the mountains, chasing sunsets by the beach, or discovering city life, our curated stays are designed to elevate your every moment.

                </p>
            </div>
            <div className='row mt-5 p-5'>
                <p className='fs-3 text-center'>resort</p>
                <div className='col-6 mt-1'>
                    <img src='/Media/aboutresort.jpg' alt='aboutresort' style={{ width: '100%', borderRadius: '1rem' }}></img>
                </div>
                <div className='col-6 mt-1 p-3 text-center' style={{ backgroundColor: '#D91656', borderTopLeftRadius: '2rem', borderBottomRightRadius: '2rem', color: 'white' }}>
                    <h1>Why Choose a Resort?</h1>
                    <p className='text-center'>A resort is more than just a place to stay — it’s a complete experience. Whether you're looking to relax by a pool with a cocktail in hand, pamper yourself with spa treatments, or enjoy adventure activities with your family, resorts are built to give you everything in one place.</p>
                    <p>Ideal for honeymooners, families, corporate retreats, or anyone looking to switch off from daily life — resorts offer a luxurious escape into comfort, nature, and fun. Whether it’s a beachfront paradise, a hilltop retreat, or a jungle hideaway — there’s a resort to match your vibe.</p>
                </div>
            </div>
            <div className='row mt-5 p-5'>
                <p className='fs-3 text-center'>villa</p>
                <div className='col-6 mt-1 p-3 text-center' style={{ backgroundColor: '#D91656', borderTopLeftRadius: '2rem', borderBottomRightRadius: '2rem', color: 'white' }}>
                    <h1>Why Choose a Villa?</h1>
                    <p className='text-center'>Whether you're planning a romantic escape, a family reunion, or a peaceful solo retreat — a villa offers the perfect blend of luxury, privacy, and freedom. Unlike hotel rooms, villas give you your own space — spacious living rooms, private pools, garden areas, and fully equipped kitchens, so you can feel right at home.</p>
                    <p>Perfect for couples seeking privacy, families who need extra space, or groups who want to stay under one roof — villas turn every stay into a personalized experience. No check-in rush, no noisy neighbors — just comfort, calm, and complete control over your holiday.</p>
                </div>
                <div className='col-6 mt-1'>
                    <img src='/Media/aboutvilla.jpg' alt='aboutresort' style={{ width: '100%', borderRadius: '1rem' }}></img>
                </div>
            </div>
            <div className='row mt-5 p-5'>
                <p className='fs-3 text-center'>Apartment</p>
                <div className='col-6 mt-1'>
                    <img src='/Media/aboutapartment.jpg' alt='aboutresort' style={{ width: '100%', borderRadius: '1rem' }}></img>
                </div>
                <div className='col-6 mt-1 p-3 text-center' style={{ backgroundColor: '#D91656', borderTopLeftRadius: '2rem', borderBottomRightRadius: '2rem', color: 'white' }}>
                    <h1>Why Choose a Apartment?</h1>
                    <p className='text-center'>An apartment offers the perfect blend of comfort, independence, and flexibility for those seeking a home-like atmosphere while traveling. With spacious rooms, a fully equipped kitchen, and often more privacy than a hotel, apartments are ideal for travelers who want to feel settled — whether for a short stay or an extended period.</p>
                    <p>Whether you’re visiting for business or leisure, apartments provide flexibility, space, and a homely atmosphere. Perfect for travelers who want the comfort of a home with the convenience of a hotel.</p>
                </div>
            </div>
            <div className='row mt-5 p-5'>
                <p className='fs-3 text-center'>houseboat</p>
                <div className='col-6 mt-1 p-3 text-center' style={{ backgroundColor: '#D91656', borderTopLeftRadius: '2rem', borderBottomRightRadius: '2rem', color: 'white' }}>
                    <h1>Why Choose a houseboat?</h1>
                    <p className='text-center'>A houseboat offers a one-of-a-kind escape — where water meets luxury, and nature becomes part of your living room. Imagine waking up to the gentle sway of the water, the sunrise reflecting off calm waters, and the sound of birds chirping all around. Renting a houseboat isn't just about staying on water; it's about creating memories in motion, with a truly unique backdrop.</p>
                    <p>Ideal for nature lovers, couples, and small families, houseboats offer an immersive experience in places where land accommodations just can't compare. Float away into tranquility, enjoy spectacular water views, and experience the freedom of the open waters.

                    </p>
                </div>
                <div className='col-6 mt-1'>
                    <img src='/Media/aboutresort.jpg' alt='aboutresort' style={{ width: '100%', borderRadius: '1rem' }}></img>
                </div>
            </div>
        </div>
    );
}

export default Hero;