import React, { Component } from 'react';
import { PostList } from "./PostList"
import { postDetail } from "../services/PostsService"

class PostPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postDetail.fetchPosts()
            .then((posts) => {
                this.setState({
                    posts
                })
            })
    }

    render() {
        return <PostList posts={this.state.posts} />;
    }


}
export { PostPage }