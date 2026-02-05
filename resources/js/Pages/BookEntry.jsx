
import FrontLayout from '@/Layouts/FrontLayout'
import React from 'react'
import '../../assets/css/style.css'
import '../../assets/css/bootstrap.min.css'
import '../../assets/lib/easing/easing.min.js'
import '../../assets/lib/waypoints/waypoints.min.js'
import '../../assets/lib/owlcarousel/owl.carousel.min.js'
import { Link, usePage } from '@inertiajs/react'
function BookEntry() {
    return (
        <>
            <FrontLayout>


                <div>

                    {/* About Start */}
                    <div className="container-fluid py-5">
                        <div className="container">
                            <h3>Bookig Entry</h3>

                            <form action="">
                                <input type="text" name='rooms_id' placeholder='Enter room Id' /><br /> <br />
                                <input type="text" name='room_nos_id' placeholder='Enter room Number Id' /><br /> <br />
                                <input type="text" name='guest_name' placeholder='Enter Name' /> <br /> <br />
                                <input type="email" name='guest_email' placeholder='Enter Email' /><br /> <br />
                                <input type="phone" name='phone' placeholder='Enter Phone' /><br /> <br />
                                <input type="date" name='check_in' placeholder='Enter check_in Date' /><br /> <br />
                                <input type="date" name='check_out' placeholder='Enter check_out Data' /><br /> <br />
                                <input type="number" name='nights' placeholder='Enter nights' /><br /> <br />
                                <input type="text" name='total_price' placeholder='Enter total_price' /><br /> <br />

                            </form>

                        </div>
                    </div>
                    {/* About End */}

                </div>


                id
                rooms_id
                room_nos_id
                guest_name
                guest_email
                phone
                check_in
                check_out
                nights
                total_price
                status

            </FrontLayout>

        </>
    )
}

export default BookEntry