'use client'
import './petImage.scss'
import React from 'react'
import { CldUploadButton } from "next-cloudinary";
import Swal from 'sweetalert2'


const PetImage = ({ petImage, setPetImage, setValue, image}) => {
  const emptyPhoto = '/images/EmptyDogPhotoGray.png'
  console.log('petImage',petImage)
  if (petImage == '' || petImage == undefined) {
    setPetImage(emptyPhoto)
  }
  function handleOnUpload(result, operations) {
    if (!result.event === "success") {
      updateError(result?.info);
      return;
    }
   
    setPetImage(result?.info.secure_url);
    setValue(image, result?.info.secure_url)

  }
  const deleteImage = async () => {
    const answer = await Swal.fire({
      title: "Operación de sistema",
      text: "¿Desea borrar la imagen?",
      icon: "question",
      confirmButtonText: "Sí",
      confirmButtonColor: "#7FD161",
      cancelButtonText: "No",
      cancelButtonColor: "#CDD4DA",
      showCancelButton: true,
    })

    if (answer.isConfirmed) {
      setPetImage(emptyPhoto)
      setValue(image, '')
    }
  }
  return (
    <div className='petImage'>
      <figure >
        <img src={petImage} />
        <CldUploadButton
          uploadPreset="FoundPets"
          onUpload={handleOnUpload}
          id="cloudinary"
        >
          <i className="bi-camera fs-5" id="camera" />
        </CldUploadButton>

        <i className="bi-trash3-fill fs-5" id="trash" onClick={deleteImage} />
      </figure>
    </div>
  )
}

export default PetImage