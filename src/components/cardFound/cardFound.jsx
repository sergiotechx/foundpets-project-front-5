"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Card, Image, Text, Button, Group } from "@mantine/core";
import "./cardFound.scss";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "react-hook-form";
import { newMessage } from "@/lib/pocketbase";
import Swal from "sweetalert2";

const CardFound = ({ currentData }) => {
  const router = useRouter();

  const cardStyle = {
    width: "18rem",
  };

  // const formData = {
  //   email: "",
  //   celphone: "",
  //   description: "",
  // };

  useEffect(() => {
    console.log(currentData);
  }, [currentData]);

  // const [opened, { open, close }] = useDisclosure(false);

  // const dispatch = useDispatch()

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   setValue,
  //   reset,
  // } = useForm(formData);

  // const onSubmit = handleSubmit((dataC) => {
  //   console.log("data:", dataC);

  //   dispatch(createNewMessage(dataC))
  //   reset()

  // });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleClick = (id) => {
    router.push(`/lostPet/${id}`);
  };
  // const createNewMessage = (data) =>{
  //   return async (dispatch) => {
  //     try {
  //       const response = await newMessage(data);
  //     console.log("prueba:", response);
  //     if(response.id){
  //       Swal.fire({
  //         title: 'Bien hecho',
  //         text: 'Informacion enviada',
  //         icon: 'success',
  //         confirmButtonText: 'Ok'
  //       })
  //     }
  //     } catch (error) {
  //       console.log("aca", error);
  //     }
  //   }
  // }

  return (
    <>
      {/* <Modal  opened={opened} onClose={close} title="Contacta al dueño">
      <form className="contactOwner" onSubmit={onSubmit}>
        <label >Correo electronico</label>
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
          <label >Nombre</label>
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
        <Button color="indigo" radius="md" type="submit" >
          Contactar
        </Button>
        </form>
      </Modal> */}
      <motion.div
        className="grid "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {currentData?.map((lost, index) => (
          <motion.div
            onClick={() => handleClick(lost.id)}
            key={index}
            shadow="sm"
            padding="lg"
            radius="md"
            withborder="false"
            style={{ width: "300px", height: "auto" }}
            variants={item}
          >
            <Card.Section>
              <Image src={lost.image1} height={160} alt="Norway" />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{lost.petName}</Text>
              <span className="fs-5 text-danger">{lost.BarrioName}</span>
            </Group>

            <Text size="sm" color="dimmed">
              {lost.petDescrription}
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Mas info...
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default CardFound;
