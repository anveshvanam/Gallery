// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onClickImageUpdate} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails

  const onClickUpdate = () => {
    onClickImageUpdate(id)
  }

  return (
    <li className="thumbnail-item">
      <button className="button" type="button" onClick={onClickUpdate}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
