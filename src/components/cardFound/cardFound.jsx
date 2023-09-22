"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { Card, Image, Text, Button, Group } from "@mantine/core";
import "./cardFound.scss";
import { useDispatch } from "react-redux";
import { getOnePetAction } from "@/store/lostPet/lostPetAction";
import { useRouter } from "next/navigation";

const CardFound = ({ currentData }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const cardStyle = {
    width: "18rem",
  };

  useEffect(() => {
    console.log(currentData);
  }, [currentData]);

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
    dispatch(getOnePetAction(id));
    router.push("/lostPet");
  };

  return (
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
  );
};

export default CardFound;
