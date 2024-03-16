import React from 'react'

export const SignIn = () => {
  return (
    <>
    <main className="main" id="top">
      <div className="container-fluid px-8">
        <div className=" min-vh-100 flex-center g-0">
          <div className="py-3 position-relative"><img className="bg-auth-circle-shape" src="../../../assets/img/icons/spot-illustrations/bg-shape.png" alt="" width="250" /><img className="bg-auth-circle-shape-2" src="../../../assets/img/icons/spot-illustrations/shape-1.png" alt="" width="150" />
            <div className="card overflow-hidden z-index-1">
              <div className="card-body p-0">
                <div className="row g-0 h-100">
                  <div className="col-md-7 ">
                    <div className="py-5 px-4 px-md-5">
                        <h4 className='fw-bold'>Connectez-vous à votre compte</h4>
                        <h5>Veuillez saisir vos identifiants pour accéder à votre compte</h5>
                        <div className="d-flex">
                            <a href="#">Connexion</a>
                            <a href="#">Inscription</a>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-5 text-center bg-card-gradient">
                    <div className="position-relative p-4 pt-md-5 pb-md-7 light">
                      <div className="bg-holder bg-auth-card-shape"></div>
                      <div className="z-index-1 position-relative"><a className="link-light mb-4 font-sans-serif fs-4 d-inline-block fw-bolder" href="../../../index.html">falcon</a>
                        <p className="opacity-75 text-white">With the power of Falcon, you can now focus only on functionaries for your digital products, while leaving the UI design on us!</p>
                      </div>
                    </div>
                    <div className="mt-3 mb-4 mt-md-4 mb-md-5 light">
                      <p className="text-white">Don't have an account?<br /><a className="text-decoration-underline link-light" href="register.html">Get started!</a></p>
                      <p className="mb-0 mt-4 mt-md-5 fs--1 fw-semi-bold text-white opacity-75">Read our <a className="text-decoration-underline text-white" href="#!">terms</a> and <a className="text-decoration-underline text-white" href="#!">conditions </a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
