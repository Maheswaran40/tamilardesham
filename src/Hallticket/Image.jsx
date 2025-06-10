import React from 'react'

function Image() {
    const imagediv={
        height: '100vh',
        width: '50vw',
        justifyContent: 'center',
        alignItems: 'center',
        // display: 'flex,
    };
  return (
    <div  style={imagediv}>
        <img src="c:\personal\OneDrive\my photos\12th marksheet.jpg" alt="image" />
    </div>
  )
}

export default Image