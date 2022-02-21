import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../imageGallery/ImageGallery.module.css'
import PropTypes from 'prop-types';
import { memo } from 'react';

const imageGallery = ({images,handleClick}) => {
  const element = images.map(picture => (
    <ImageGalleryItem picture={picture} key={picture.id}  handleClick={handleClick} />
  ));

  return <ul className={styles.list__photos}>{element}</ul>;
};

export default memo(imageGallery);
imageGallery.propTypes={
  images:PropTypes.arrayOf(
    PropTypes.shape({
    id:PropTypes.number.isRequired
  })).isRequired,
  handleClick:PropTypes.func.isRequired
}
