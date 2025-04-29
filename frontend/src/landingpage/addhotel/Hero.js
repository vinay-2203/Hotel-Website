import React from 'react';
function Hero() {
    return (
        <div className='container-fluid'>
            {/* <div className='row text-center offset-1' style={{ backgroundColor: '#E61E43', width: '80%', borderRadius: '10px' }}>
                <p className='fs-3' style={{ color: 'White' }}>Welcome to Hotel.com</p>
            </div>
            <div className='row text-center offset-3 mt-5' style={{ backgroundColor: '#191E3B', width: '50%', borderRadius: '10px' }}>
                <p className='fs-3' style={{ color: 'White' }}>Add New hotels . . . </p>
            </div>
            <div className='row mt-5'>
                <form>
                    <div class="mb-3">
                        <label for="Title" class="form-label">Title</label>
                        <input type="string" class="form-control" id="Title"/>
                    </div>
                    <div class="mb-3">
                    <label for="Description" class="form-label">Description</label>
                    <textarea class="form-control" id="Description" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="Image" class="form-label">Image</label>
                        <input type="string" class="form-control" id="Image" placeholder='Ente the url of image ...'/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form> */}

            {/* </div> */}

            <div className="hero-section position-relative" style={{ height: '500px' }}>
                <img
                    src="Media/traveller.jpg"
                    alt="Hotel background"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                />

                <div className="overlay-content position-absolute top-0 end-0 h-75 d-flex align-items-center">
                    <div
                        className="bg-white p-4 shadow"
                        style={{
                            width: '350px',
                            borderRadius: '15px',
                            marginRight: '50px',
                        }}
                    >
                        <img src='Media/Hotel.svg' style={{width:'200px', marginRight:'100px'}}/>
                        <h4 className="mb-3">What would you like to list</h4>
                        <p>Reach the guests you want—those who truly value your property—with Expedia Group. Signing up is free, fast, and easy.</p>
                        <button className="btn btn-primary disabled">Add hotels</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;