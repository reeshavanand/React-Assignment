import React, { useEffect, useState } from 'react'
import cart from '../../asset/cart.jpg'
import './index.css'

const ProductPage = (props) => {
    const { title,description,media} = props
    const [modal,setModal] = useState(false)
    const [selected,setSelected] = useState(false)
    const [item,setItem] = useState(1)
    const [price, setPrice] = useState()

    

    const handleClick = () => {
      setModal(!modal)

    }
    const hanldeCart = () => {
      setSelected(true)
    }

    const addItem = () => {
      setItem(item+1)
     
     
    }
  
    const minusItem = () => {
      const removeItem = item -1

      if (removeItem === 0) return;
      setItem(removeItem)
         }

       
        useEffect(()=>{
          setPrice(item*16999)
        }, [item])
   

    return(
      <>
        <div className='parent'>
      <div className='navbar'> 
     {selected && ( <div className='icon' onClick={handleClick}> 


<img src={cart} alt="" height='50' width='50' />

</div>)}
      </div>
      {modal && (
        <div className='modal'>
          <div className='selectedHeading'>ITEMS IN CART</div>
          <div className='cartTitle'>{title}</div>
          <div className='cartPhoto'>
              <img src={media} alt='' width='100' height='100' />

          </div>
         <div className='addMore'>
         <div>quantity: {item}</div>
       <div >
       <button className='addButton' onClick={ addItem} style={{marginRight:'2px'}}>+</button>
         <button className='addButton' onClick={ minusItem}>-</button>
       </div>
         </div>
         <div className='cartPrice' > See Total Price: {price}</div>

         <div className='placeCart'>
                 <button className='buy'>
                 <a  style= {{color:'black'}} href="https://www.flipkart.com/" >BUY NOW</a>
                 </button>
                 </div>


        </div>
      )}

     
      <div className='container'>
          <div className='photo'>
              <img src={media} alt='' width='480' height='360' />

          </div>
          <div className='detail'>
             <div className='productTitle'>{title}</div>
             <div> <h4>price:- ₹16,999</h4></div>
             <div>{description}</div>
           <div className='buttonParent'>
           <div >
               <button className='cart' onClick={hanldeCart}>ADD CART</button>
               </div>
             <div>
                 <button className='buy'>
                 <a  style= {{color:'black'}} href="https://www.flipkart.com/" >BUY NOW</a>
                 </button>
                 </div>
           </div>
          </div>
         

      </div>
     
        </div>
      
        </>
    )
}

export default ProductPage;