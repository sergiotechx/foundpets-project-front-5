"use client";
import React, { useEffect, useRef, useState } from "react";
import "./lostPest.scss";
import { useParams, useSearchParams } from "next/navigation";
import { getOneLostPet, newMessage } from "@/lib/pocketbase";
import { useScroll, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Swal from "sweetalert2";
import GeoLocation from "@/components/geoLocation/geoLocation";
import { CldUploadButton } from "next-cloudinary";

const Page = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const params = useParams();
  const id = params.id;

  const [animal, setAnimal] = useState(null);
  const owner = animal ? animal.name : "";

  const [opened, { open, close }] = useDisclosure(false);
  const [messageImage,setMessageImage ] = useState('')
  const SearchParams = useSearchParams();
  const [fountQr, setFoundQr] = useState(null);
  const qr = SearchParams.get("qr");



  const formData = {
    petOwner: id,
    email: "",
    celphone: "",
    description: "",
  };

  console.log("este", owner);
  const dispatch = useDispatch();
  
  function handleOnUpload(result, operations) {
    if (!result.event === "success") {
      updateError(result?.info);
      return;
    }
    setMessageImage(result?.info.secure_url);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      petOwner: owner,
      email: "",
      celphone: "",
      description: "",
      image:""
    },
  });

  const onSubmit = handleSubmit((dataC) => {
    
   
    const updatedData = {
      ...dataC,
      petOwner: id,
      image:messageImage,
    };

   dispatch(createNewMessage(updatedData));
    reset();
    setMessageImage('')
  });

  const createNewMessage =  (data) => {
    return async (dispatch) => {
      try {
        const response = await newMessage(data);

        if (response.id) {
          const answer = await Swal.fire({

            title: "Operación exitosa",
            text: "Mensaje enviado",
            icon: "success",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#7FD161"
          })
          
          close()
        }
      }
      catch (error) {
        const answer = await Swal.fire({

          title: "Error de sistema",
          text: error.message,
          icon: "error",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#FF394D"
        })

      }
    };
  };

  const getOnePet = async (id) => {
    try {
      const oneLostPet = await getOneLostPet(id);
      console.log(oneLostPet);
      setAnimal(oneLostPet);
      return oneLostPet;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setAnimal(null);
    getOnePet(id);
    console.log(qr);
    if (qr) {
      setFoundQr(qr);
    } else {
      setFoundQr(null);
    }
  }, []);

  return (
    <div className="lostPest mb-4">

      <Modal  size="xs" opened={opened} onClose={close} title="Contacta al dueño">
        <GeoLocation petOwner={id} />
        <form className="contactOwnerMessage" onSubmit={onSubmit}>
          <label>Correo electronico</label>
          <input
            type="email"
            placeholder="nombre@ejemplo.com"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/,
                message: "Correo no valido",
              },
            })}
          />
          {errors.email && <span>{errors.email.message} </span>}
          <label>Nombre</label>
          <input
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Nombre requerido",
              },
              minLength: {
                value: 4,
                message: "Nombre debe tener al menos 4 caracteres",
              },
            })}
          />
          {errors.name && <span>{errors.name.message} </span>}
          <label >Asunto</label>
          <input
            type="text"
            {...register("asunto", {
              required: {
                value: true,
                message: "Nombre requerido",
              },
              minLength: {
                value: 4,
                message: "Nombre debe tener al menos 4 caracteres",
              },
            })}
          />
          {errors.asunto && <span>{errors.asunto.message} </span>}

          <label >Descripción de la mascota</label>
          <textarea
            className="description"
            type="textarea"
            {...register("description", {
              required: {
                value: true,
                message: "debe describir la mascota encontrada",
              },
              minLength: {
                value: 4,
                message: "el texto debe tener al menos 4 caracteres",
              },
            })}
            cols="30"
            rows="10"
          ></textarea>
          {errors.description && <span>{errors.description.message} </span>}
          <CldUploadButton
          uploadPreset="FoundPets"
          onUpload={handleOnUpload}
          id="cloudinary"
        >
          <i className="bi bi-camera fs-5" id='CameraIcon' />
          {messageImage&&<img src={messageImage}/>}
        </CldUploadButton>
          <Button color="indigo" radius="md" type="submit">
            Contactar
          </Button>


        </form>
      </Modal>

      <h2 className="mt-5">{`Hola soy ${animal?.petName} me has visto?`}</h2>
      <div>
        {animal ? (
          <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg2" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollXProgress }}
            />
          </svg>
        ) : (
          ""
        )}

        <ul ref={ref} className="ul_card">
          {animal ? (
            <img src={animal?.image1} alt="" />
          ) : (
            <span className="loaderlostpets"></span>
          )}
          {animal ? (
            <img src={animal?.image2} alt="" />
          ) : (
            <span className="loaderlostpets"></span>
          )}
          {animal ? (
            <img src={animal?.image3} alt="" />
          ) : (
            <span className="loaderlostpets"></span>
          )}
          {animal ? (
            <img src={animal?.image4} alt="" />
          ) : (
            <span className="loaderlostpets"></span>
          )}
          {animal ? (
            <img src={animal?.image5} alt="" />
          ) : (
            <span className="loaderlostpets"></span>
          )}
        </ul>
      </div>
      {animal ? (
        <div className="section__lostCard">
          <div className="card__description">
            <label>* El nombre de mi dueño es: </label>
            <span>{animal?.name}</span>
            <label>* vivo en la ciudad de:</label>
            <span>{animal?.ciudad}</span>
            <label>* Me vieron por ultima vez cerca a: </label>
            <span>{animal?.address}</span>
            <label>* Quieres hablar con mis dueños ?</label>
            <span>
              {animal?.email}, {animal?.mobile}
            </span>
            <label>* Así me puedes reconocer</label>
            <span>{animal?.petDescrription}</span>
          </div>
          {animal ? (
            <>
              <h4>Contacta con el dueño</h4>
              <span onClick={open} className="loaderlostpets3"></span>
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        <span className="loaderlostpets2"></span>
      )}
    </div>
  );
};

export default Page;
