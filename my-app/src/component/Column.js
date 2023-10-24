import React from "react";

class Column extends React.Component {
    render() {
        return (
            // Bisa menambah parameter key
            // <React.Fragment>
            //     <td>Kolom 1</td>
            //     <td>Kolom 2</td>
            //     <td>Kolom 3</td>
            // </React.Fragment>

            <>
                <td>Kolom 1</td>
                <td>Kolom 2</td>
                <td>Kolom 3</td>
            </>
        );
    }
}

export default Column;