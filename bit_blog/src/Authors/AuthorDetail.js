import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { authorService } from "../services/AuthorsFetch"



class AuthorDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            author: {}

        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        authorService.fetchAutor(id)
            .then((author) => {
                console.log(author)
                this.setState({
                    author
                })

            })
    }
    render() {

        const Author = this.state.author;
        console.log(Author.address)

        if (!Author.id) {
            return null;
        }

        return (
            <>  <div className="row">
                <Link to="/authors" className="left" >Back</Link>
            </div>
                <div className="col s12">

                    <div className="card horizontal">
                        <div className="card-image">
                            <img src="https://via.placeholder.com/150" alt="" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h5 className="align">{Author.name}</h5><br />
                                <p className="left">username: {Author.username}</p><br />
                                <p className="left">email: {Author.email}</p><br />
                                <p className="left">phone: {Author.phone}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col s12">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content left-align">
                                <h5>ADRESS</h5>
                                <p>Street:   {Author.address.street}</p>
                                <p>City:   {Author.address.city}</p>
                                <p>zipcode:  {Author.address.zipcode}</p>

                            </div>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6615.3547609572615!2d-118.26301337564676!3d34.00081958643358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z0JvQvtGBINCQ0L3RktC10LvQtdGBLCDQmtCw0LvQuNGE0L7RgNC90LjRmNCwLCDQodGY0LXQtNC40ZrQtdC90LUg0JTRgNC20LDQstC1!5e0!3m2!1ssr!2srs!4v1554391465201!5m2!1ssr!2srs" width="100%" height="300" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="col s12">

                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <h5 className="align">Company</h5><br />
                                <p className="left">name: {Author.company.name}</p><br />
                                <p className="left">slogan: {Author.company.catchPhrase}</p><br />
                            </div>
                        </div>
                    </div>
                </div>







            </>
        )
    }
}
export { AuthorDetail }
