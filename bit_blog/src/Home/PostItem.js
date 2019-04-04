import React from "react"

const PostItem = (props) => {


    const singlepost = props.onepost
    return (
        <>
            <div className="row">
                <div className="col s12 ">
                    <div className="card #2196f3 blue">
                        <div className="card-content white-text">
                            <h2 className="card-title left-align white-text">{singlepost.title}</h2>
                            <p className="left-align">{singlepost.body}</p>
                        </div>

                    </div>
                </div>
            </div>



        </>
    )

}
export { PostItem }