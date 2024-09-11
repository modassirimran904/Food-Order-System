import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function MyOrder () {
  const [orderData, setOrderData] = useState("")

  const fetchMyOrder = async () => {
    await fetch('http://localhost:5000/api/myOrderData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: localStorage.getItem('userEmail')
      })
    })
      .then(async res => {
        let response = await res.json()
        setOrderData(response.orderData.order_data)
      })
      .catch(err => {
        console.error('Error fetching order data:', err)
      })
  }

  useEffect(() => {
    fetchMyOrder()
  }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <div className='row'>
          {orderData && orderData.length > 0 ? (
            orderData.map((order, index) => {
              return (
                <div key={index}>
                  {order.map((items, idx) => {
                    return items.Order_date ? (
                      <div key={idx} className='m-auto mt-5'>
                        <h4>Order Date: {items.Order_date}</h4>
                        <hr />
                      </div>
                    ) : (
                      <div key={idx} className='col-12 col-md-6 col-lg-3'>
                        <div
                          className='card mt-3'
                          style={{
                            width: '16rem',
                            maxHeight: '360px'
                          }}
                        >
                          {/* <img
                            src={items.img}
                            className='card-img-top'
                            alt={items.name}
                            style={{
                              height: '120px',
                              objectFit: 'fill'
                            }}
                          /> */}
                          <div className='card-body'>
                            <h5 className='card-title'>{items.name}</h5>
                            <div className='container w-100 p-0'>
                              <span className='m-1'>Qty: {items.qty}</span>
                              <span className='m-1'>Size: {items.size}</span>
                              <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                ₹{items.price}/-
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })
          ) : (
            <div>Loading your orders...</div>
          )}
        </div>
      </div>
      <div className='fixed-bottom'> 
        <Footer />
      </div>
    </div>
  )
}
