import React from 'react'

export const Contacts = () => {
  return (
    <div className='container m-auto min-h-vh' style={{height : "100vh"}}>
        <div className='bg-secondary h-20'>
            j
        </div>
        <div className='h-100 d-flex'>
            <div className='bg-danger h-100 col-12 d-none d-md-block col-md-3'>h</div>
            <div className='bg-success h-100 col-12 col-md-9 py-4'>
                <div className='container py-2 bg-dark'>
                    <div className='px-1 d-flex gap-'>
                        <div className='card bg-success p-2 d-flex justify-content-center align-items-center'>
                            <div className='bg-danger rounded-pill' style={{ height: "40px", width : "40px" }}>
                                              
                            </div>
                            <p className='text-light text-sm'>Mouhamed lamotte</p>
                        </div>
                        <div className='card bg-success p-2 d-flex justify-content-center align-items-center'>
                            <div className='bg-danger rounded-pill' style={{ height: "40px", width : "40px" }}>
                                              
                            </div>
                            <p className='text-light text-sm'>Mouhamed lamotte</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
