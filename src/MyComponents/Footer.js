import React from 'react'

const Footer = () => {
    // let footerStyle = {
    //     position: "relative",
    //     top: "70vh",
    //     width: "100%"
    // }
    // this method of styling is fine but , we are having trouble with the postion of footer , so we will add css to the contaienr containing todos
    return (
        // <footer className="ng-dark text-light py-3" style=
        // {footerStyle}>
        <footer className="ng-dark text-light py-3" >
            <p className="text-center">
                Copyright &copy; MyTodosList.com
            </p>
        </footer >
    )
}

export default Footer
