import { Link } from '@inertiajs/react'
import React from 'react'

function Header() {
  return (
    <>
      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
  <div className="container">
    <div className="row">
      <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
        <div className="d-inline-flex align-items-center">
          <Link className="text-decoration-none text-body pe-3" href="#!"><i className="bi bi-telephone me-2" />+012
            345 6789</Link>
          <span className="text-body">|</span>
          <Link className="text-decoration-none text-body px-3" href="#!"><i className="bi bi-envelope me-2" />info@example.com</Link>
        </div>
      </div>
      <div className="col-md-6 text-center text-lg-end">
        <div className="d-inline-flex align-items-center">
          <Link className="text-body px-2" href="#!">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link className="text-body px-2" href="#!">
            <i className="fab fa-twitter" />
          </Link>
          <Link className="text-body px-2" href="#!">
            <i className="fab fa-linkedin-in" />
          </Link>
          <Link className="text-body px-2" href="#!">
            <i className="fab fa-instagram" />
          </Link>
          <Link className="text-body ps-2" href="#!">
            <i className="fab fa-youtube" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
 <div class="container-fluid sticky-top bg-white shadow-sm">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <Link href="index.html" class="navbar-brand">
                    <h1 class="m-0 text-uppercase text-primary"><i class="fa fa-clinic-medical me-2"></i>Medinova</h1>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <Link href="index.html" class="nav-item nav-link active">Home</Link>
                        <Link href="/about" class="nav-item nav-link">About</Link>
                        <Link href="service.html" class="nav-item nav-link">Service</Link>
                        <Link href="price.html" class="nav-item nav-link">Pricing</Link>
                        <div class="nav-item dropdown">
                            <Link href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div class="dropdown-menu m-0">
                                <Link href="blog.html" class="dropdown-item">Blog Grid</Link>
                                <Link href="detail.html" class="dropdown-item">Blog Detail</Link>
                                <Link href="team.html" class="dropdown-item">The Team</Link>
                                <Link href="testimonial.html" class="dropdown-item">Testimonial</Link>
                                <Link href="appointment.html" class="dropdown-item">Appointment</Link>
                                <Link href="search.html" class="dropdown-item">Search</Link>
                            </div>
                        </div>
                        <Link href="contact.html" class="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    </>
  )
}

export default Header