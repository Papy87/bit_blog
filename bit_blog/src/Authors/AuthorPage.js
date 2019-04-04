import React from "react"
import { AutorList } from "./AuthorLIst"
import { authorService } from "../services/AuthorsFetch"


class AuthorPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authorlist: []
        }
    }

    componentDidMount() {
        authorService.fetchAuthors()
            .then((author) => {
                this.setState({
                    authorlist: author
                })


            })





    }




    render() {
        return (
            <>
                <h1>Authors  {this.state.authorlist.length}</h1>
                <AutorList authorslist={this.state.authorlist} />

            </>
        )
    }
}
export { AuthorPage }