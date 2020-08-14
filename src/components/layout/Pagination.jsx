import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    const lastPage = Math.ceil(totalPosts / postsPerPage);

    for(let i=1; i <= lastPage; i++){
        pageNumbers.push(i);
    }
    
    return (
        <ul className="pagination white lighten-2">
            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            {pageNumbers.map(number => (
                <li key={number} className="waves-effect">
                    <a onClick={()=> paginate(number)} href="#!" className="page-link">{number}</a>
                </li>
            ))}
            <li className="active"><a onClick={()=> paginate(lastPage)} href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
    )
}

export default Pagination;