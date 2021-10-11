// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageList, updateThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageList
  const onClickThumb = () => {
    updateThumbnail(id)
  }
  const activeImageClass = isActive ? '' : 'active'
  return (
    <li className={activeImageClass}>
      <button type="button" onClick={onClickThumb}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
