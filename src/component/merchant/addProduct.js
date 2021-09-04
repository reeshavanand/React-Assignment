import React, { useState } from 'react';
import ProductPage from '../customer/productPage';
import './index.css'

const AddProduct = () => {
    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [media, setMedia] = useState('')
    const [submit, setSubmit] = useState(true)

    const handleTitle = (e) => {
        setTitle(e.target.value)

    } 

    const handleDescription = (e) => {
        setDescription(e.target.value)

    }

    const handleMedia = ({target}) => {
        const file = target.files[0]
        const source = URL.createObjectURL(target.files[0])
   setMedia(     source)
        console.log('this is image link :', media)
        console.log(file)

     

    }
    const handleSubmit = () => {
        setSubmit(!submit)
    }

    console.log(title,description)


    return(
        <>
       {submit ? ( <div className='main'>
            <div className='heading'> ADD NEW PRODUCT</div>
            <hr></hr>
            <div className='title'>
               PRODUCT TITLE
               </div>
               <div className='inputFieldDiv'>
                  <input type='text' className='input' onChange={handleTitle}/>
               </div>
            <div className='description'>
              PRODUCT DESCRIPTION
              </div>
            <div className='inputFieldDiv'>
                  <input type='text' className='input' onChange={handleDescription}/>
               </div>

            <div className='description'>
                ADD MEDIA

            </div>

            <div className='inputFieldDiv'>
                  <input type='file' placeholder='add media file'  className='inputFile' onChange={handleMedia} />
               </div>
            <div className='description'>
                ADD VARIANT OPTION
                </div>
               <div> <button className='button'>Add variant</button></div>
               <hr></hr>
               {/* <img src={media} alt='photo' width='500' height='400'/> */}
               <div>
                   <button className='submit' onClick={handleSubmit}> SUBMIT </button>
               </div>
             

        </div>) : <ProductPage title={title} description={description} media={media} />}


        



        </>
    )
} 

export default AddProduct