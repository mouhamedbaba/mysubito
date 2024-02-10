import BlogCard from "../components/BlogCard"

export const Blog = () => {
    return (
        <div className=" py-4">
            <div className="text-Destination-container text-center">
                <h2 className="text-Destination">
                    Blog
                </h2>
                <div className="divider my-3"></div>
            </div>
            <div className="Blog-row">
                <div className="row m-0 gy-3">
                    <div className="col-md-6 col-lg-3">
                        <BlogCard src="assets/img/blog/blog1.png" />
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <BlogCard src="assets/img/blog/blog2.png" />
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <BlogCard src="assets/img/blog/blog3.png" />
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <BlogCard src="assets/img/blog/blog4.png" />
                    </div>
                </div>
            </div>
        </div>
    
    )
}