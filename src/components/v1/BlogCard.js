const BlogCard = ({src}) => {
    return (
            <div className="card p-1 card-hotel h-100 overflow-hidden" >
                <div className="card card-img-top card-img-hotel img-card-blog h-100 w-100 bg-dark text-white overflow-hidden light" >
                    <div className="card-img-top img-card-blog h-100 w-100"><img className="img-card-blog img-fluid h-100 w-100" src={src} alt="Card image" /></div>
                </div>                
                <div className="card-body blur-out-contract">
                    <h6 className="card-title blur-out-contract">Dakar, hotel standford</h6>
                    <p className="card-text form-text mt-4 blur-out-contract">
                    Lorem ipsum dolor sit amet consectetur. At scelerisque posuere a a consequat
sagittis vestibulum. Habitant metus ipsum non viverra feugiat. Diam venenatis sem amet fringilla aliquet. Est ultrices Porta vel sem mauris metus cursus accumsan. Congue aliquam enim at auctor aliquet pharetra. quis vestibulum vel.
                    </p>
                    <div className="d-flex justify-content-end blur-out-contract">
                        <a href="#" className="text-subito text-decoration-none">Read more</a>
                    </div>
                </div>
            </div>
    )
}

export default  BlogCard