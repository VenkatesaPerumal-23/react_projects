import './index.css'

const ImageItem = props => {
  const {imagesList, onClickImageItem} = props
  const {thumbnailUrl, id} = imagesList

  const imageClicked = () => {
    onClickImageItem(id)
  }

  return (
    <li className="thumbnail-list">
      <button type="button" className="thumbnail-button" onClick={imageClicked}>
        <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
