import { useState, useEffect} from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import { searchPosts } from '../shared/services/posts';
import Button from '../components/Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

const ImagesSearch = () => {
  const [data, setData] = useState({
    posts: [],
    loading: false,
    error: null,
  });
  
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState({ modalOpen: false, modalContent: '' });
  
  const componentDidUpdate = (prevProps, prevState) => {
    const { search } = search;
    const {  page } = page;
    
    if (search !== prevState.search || page !== prevState.page) {
      setData({
        loading: true,
      });
    }
  };
  
  const onSubmit = e => {
    setData({
      posts:[]
    })
    setSearch({
      search: e.query,
    });
  };
  const loadMore = () => {
    setPage(prevState => prevState+1);
  };

  useEffect(()=>{
    const fetchPosts = async() => {
      try {
        const data = await searchPosts(page,search.search);
        console.log(page);
        setData(prevState => {
          return {
            posts: [...prevState.posts, ...data.hits],
            loading: false,
            error: null,
          };
        });
      } catch (error) {
        setData({
          error: error.message,
          loading: false,
        });
      }
    }
    if(search)
    {
      fetchPosts();

      setData({
          ...data,
          loading: true
      })
  }},[search,page])


  const showModal = post => {
    setModal({
      modalContent: post,
      modalOpen: true,
    });
  };
  const modalClose = () => {
    setModal({
      modalContent: null,
      modalOpen: false,
    });
  };

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={data.posts} handleClick={showModal} />
      {data.loading && <Loader />}
      {Boolean(data.posts.length) && <Button onclick={loadMore} />}
      {modal.modalOpen && (
        <Modal image={modal.modalContent} handleClose={modalClose} />)}
    </div>
  );
};

export default ImagesSearch;
