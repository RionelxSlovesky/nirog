import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <>
            <section className='Hero'>
                <div className='pad'>
                    <h2 className='h2 mb-0'>Revolutionizing healthcare through digital innovation - </h2>
                    <h2 className='h2 mb-3'>empowering patients and providers alike.</h2>
                    <p className='Hero-desc lead'>At Nirog, we are dedicated to digitalizing the healthcare industry through innovative technology solutions. Our mission is to transform the healthcare landscape and improve the lives of people in Bangladesh. </p>
                    <p>We will be launching very soon!</p>
                </div>
            </section>

            <section className='services bg-primary'>
                <div className='pad text-center'>
                    <h3 className='h4 mb-5 text-light'>Here are some of our services you can look forward to:</h3>
                    <div className="card-group">
                        <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">ePrescription</h5>
                                <p className="card-text">It is hectic to carry paper-based prescriptions, and they are also vulnerable to wear and tear. Our goal is to completely replace it with a digitized version which can be used anywhere, anytime!</p>

                            </div>
                        </div>
                        <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">ChatBot</h5>
                                <p className="card-text">Our AI powered ChatBot will not only guide you, but also suggest you services based on your circumstances. </p>

                            </div>
                        </div>
                        <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">eDiagnosis</h5>
                                <p className="card-text">This feature is still in RnD, but soon we will be launching our eDiagnosis service. Through pictures of X-rays, our AI powered eDiagnosis will be able to detect various issues (we recommend a follow up doctor's checkup and only use eDiagnosis for presumption of the problem).</p>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>

    );
};

export default Home;