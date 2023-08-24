import React from 'react'

function FooterSection() {
    return (
        <footer className="text-center text-white" style={{ "background-color": "#292749" }}>
            <div className="container">
                <section className="mb-5 pt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                distinctio earum repellat quaerat voluptatibus placeat nam,
                                commodi optio pariatur est quia magnam eum harum corrupti
                                dicta, aliquam sequi voluptate quas.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-center mb-5">
                    <a href="/admindashboard" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/admindashboard" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/admindashboard" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="/admindashboard" className="text-white me-4">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="/admindashboard" className="text-white me-4">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="/admindashboard" className="text-white me-4">
                        <i className="fab fa-github"></i>
                    </a>
                </section>
            </div>

            <div
                className="text-center p-3"
                style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
            >
                © {new Date().getFullYear()} Copyright :
                <a className="text-white text-decoration-none fs-5" href="/admindashboard"
                > carX admin</a
                >
            </div>
        </footer>
    )
}

export default FooterSection