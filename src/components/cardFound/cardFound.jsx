"use client";
import React, { useEffect } from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import "./cardFound.scss";

const CardFound = ({ petsLost }) => {
  const cardStyle = {
    width: "18rem",
  };

  useEffect(() => {
    console.log(petsLost);
  }, [petsLost]);

  return (
    <div className="grid">
      {petsLost?.records.map((lost, index) => (
        <Card
          key={index}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{ width: "300px", height: "auto" }}
        >
          <Card.Section>
            <Image src={lost.image1} height={160} alt="Norway" />
          </Card.Section>
          

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{lost.petName}</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" color="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default CardFound;
