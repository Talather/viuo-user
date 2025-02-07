import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ imageUrl, size = 50, altText = 'User Avatar' }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '2px solid #fff' // Optional: Adds a white border around the avatar
      }}
    >
      <img
        src={imageUrl}
        alt={altText}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover' // Ensures the image covers the container
        }}
      />
    </div>
  )
}

Avatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.number,
  altText: PropTypes.string
}

export default Avatar
