import React from "react"
import { Link } from "react-router-dom"

import { PostItem } from "./PostItem";

const PostList = (props) => {
    const postArr = props.posts.map((element) => {
        return (
            <Link key={element.id} to={`/posts/${element.id}`}>
                <PostItem key={element.id} onepost={element} />
            </Link>
        )
    })
    return postArr
}
export { PostList }