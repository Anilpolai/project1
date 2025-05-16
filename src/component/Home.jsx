import React from 'react'

function Home() {
    return (
        <>
            <div className="hero">
                <div className="card text-bg-dark">
                    <img src="https://media.istockphoto.com/id/1067448968/photo/full-length-body-size-portrait-of-careless-carefree-trendy-stylish-elegant-chic-lady-wearing.jpg?s=612x612&w=0&k=20&c=B9wMreW5hjoek8dUEtMGIKL_SGmOd-fX6TIfYhzPne8=" className="card-img" alt="..." height={600} />

                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">
                                CHECK OUT ALL THE TRANDS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;