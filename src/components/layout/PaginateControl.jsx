import React, { Fragment, useState, useEffect} from 'react';
import EventList from '../events/EventList.jsx';
import Pagination from './Pagination.jsx';

const PaginateControl = ({ events }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);
  
    // useEffect works whenever mounts effect or update
    useEffect(()=> {
      const fetchItems = async () => {
        setLoading(true);
        setPosts(events);
        setLoading(false);
      }
  
      fetchItems();
    }); // To stop its unlimited loop, use empty bracket here (We put dependencies here)
  
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
   
    return (
        <Fragment>
            <EventList events={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </Fragment>
    )
}

export default PaginateControl
