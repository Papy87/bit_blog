import React, { Component } from 'react';
import { postDetail } from "../services/PostsService"
import { Link } from "react-router-dom"
import { authorService } from "../services/AuthorsFetch"



class PostDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: [],
            author: {}


        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        postDetail.fetchPost(id)
            .then((post) => {
                console.log(post)
                this.setState({
                    post
                })

            })

        authorService.fetchAutor(id)
            .then((author) => {
                this.setState({
                    author
                })
            })



    }
    render() {
        const post = this.state.post;
        const author = this.state.author;
        return (
            <>
                <div class="row">
                    <div class="col-12 ">
                        <div class="card blue darken-1">
                            <Link to="/" className="left white-text">Back</Link>
                            <div class="card-content white-text">
                                <h3 class=" bold">{post.title}</h3>
                                <h4><Link to={`/authors/${author.id}`} className="white-text">{author.name}</Link></h4>
                                <p>{post.body}</p>
                            </div>
                            <div class="card-action white-text">
                                <p>{} more posts from same author</p>
                                <a href="#">This is a link</a>
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>


            </>


        )

    }


}

export { PostDetail }