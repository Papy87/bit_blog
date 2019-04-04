import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import { PostPage } from '../Home/PostPage';
import { About } from '../About/About';
import { AuthorPage } from '../Authors/AuthorPage';
import { PostDetail } from '../Home/PostDetail';
import { AuthorDetail } from '../Authors/AuthorDetail';


class Main extends Component {
    render() {
        return (

            <>
                <Switch>
                    <Route path="/authors/:id" component={AuthorDetail} />
                    <Route path="/posts/:id" component={PostDetail} />
                    <Route path="/authors" component={AuthorPage} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={PostPage} />
                </Switch>


            </>

        )
    }


}
export { Main }
