import FrontLayout from '@/Layouts/FrontLayout'
import React from 'react'
import '../../assets/css/style.css'
import '../../assets/css/bootstrap.min.css'
import '../../assets/lib/easing/easing.min.js'
import '../../assets/lib/waypoints/waypoints.min.js'
import '../../assets/lib/owlcarousel/owl.carousel.min.js'
import { Link, usePage } from '@inertiajs/react'



function Book(props) {
    const { bookings } = usePage().props;
    return (
        <>
            <FrontLayout>


                <div>

                    {/* About Start */}
                    <div className="container-fluid py-5">
                        <div className="container">
                            <h1>Booking List </h1> <span className='float-end'><Link href = '/book/create'>New Book</Link></span>
                            <table className='table table-borderd'>
                                <tr>
                                    <th>ID</th>
                                    <th>Guest Name</th>
                                    <th>Guest Email</th>
                                </tr>
                                {bookings.map(({ id, guest_name, guest_email }) => (



                                    <tr>
                                        <td>{id}</td>
                                        <td>{guest_name}</td>
                                        <td>{guest_email}</td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>
                    {/* About End */}

                </div>


            </FrontLayout>
        </>
    )
}

export default Book