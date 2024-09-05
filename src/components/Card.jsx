import React from 'react'

const Card = () => {
  return (
    <div>
      <div>
        <div
          className='card mt-3'
          style={{ width: '18rem', maxHeight: '360px' }}
        >
          <img src='https://cdn.pixabay.com/photo/2024/01/29/21/50/ai-generated-8540840_640.jpg' className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>Some quick example text.</p>
            <div className='container w-100 '>
              <select className='m-2 h-100 bg-success rounded'>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}{' '}
                    </option>
                  )
                })}
              </select>
              <select className='m-2 h-100 bg-success rounded'>
                <option value='half'>Half</option>
                <option value='full'>Full</option>
              </select>

              <div className='d-inline h-100 fs-5'>Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
