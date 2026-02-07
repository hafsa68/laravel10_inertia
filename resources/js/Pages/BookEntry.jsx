
import FrontLayout from '@/Layouts/FrontLayout'
import React from 'react'
import '../../assets/css/style.css'
import '../../assets/css/bootstrap.min.css'
import '../../assets/lib/easing/easing.min.js'
import '../../assets/lib/waypoints/waypoints.min.js'
import '../../assets/lib/owlcarousel/owl.carousel.min.js'
import { Link, useForm, usePage } from '@inertiajs/react'


function BookEntry() {
    const { data, setData, errors, post } = useForm({


        rooms_id: "",
        room_nos_id: "",
        guest_name: "",
        guest_email: "",
        phone: "",
        check_in: "",
        check_out: "",
        nights: "",
        total_price: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
       
        postMessage(route("posts.store"));
    }

    return (
        <>
            <FrontLayout>


                <div>

                    {/* About Start */}
                    <div className="container-fluid py-5">
                        <div className="container">
                            <h3>Bookig Entry</h3>

                            <form action="" onSubmit={handleSubmit}>
                                <input type="text" name='rooms_id' placeholder='Enter room Id' value={data.rooms_id} onChange={(e) => setData("rooms_id", e.target.value)} /><br /> <br />
                                <input type="text" name='room_nos_id' placeholder='Enter room Number Id' value={data.room_nos_id} onChange={(e) => setData("room_nos_id", e.target.value)} /><br /> <br />
                                <input type="text" name='guest_name' placeholder='Enter Name' value={data.guest_name} onChange={(e) => setData("guest_name", e.target.value)} /> <br /> <br />
                                <input type="email" name='guest_email' placeholder='Enter Email' value={data.guest_emaile} onChange={(e) => setData("guest_email", e.target.value)} /><br /> <br />
                                <input type="text" name='phone' placeholder='Enter Phone' value={data.phone} onChange={(e) => setData("phone", e.target.value)} /><br /> <br />
                                <input type="date" name='check_in' placeholder='Enter check_in Date' /><br /> <br />
                                <input type="date" name='check_out' placeholder='Enter check_out Data' /><br /> <br />
                                <input type="number" name='nights' placeholder='Enter nights' /><br /> <br />
                                <input type="number" name='total_price' placeholder='Enter total_price' /><br /> <br />
                                <button className='btn btn-primary'>SAVE</button>
                            </form>

                        </div>
                    </div>
                    {/* About End */}

                </div>




            </FrontLayout>

        </>
    )
}

export default BookEntry