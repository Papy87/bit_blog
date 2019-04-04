import React from "react"
import { Link } from "react-router-dom"

const AutorList = (props) => {

    const authors = props.authorslist.map((element) => {

        return (
            <>
                <div className=" ">
                    <p className=" whiten-text" >
                        <Link key={element.id} to={`/authors/${element.id}`}>{element.name}</Link>
                    </p>
                </div>





            </>

        )

    })

    return authors
}
export { AutorList }