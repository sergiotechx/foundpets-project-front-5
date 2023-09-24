"use client";
import React, { useEffect, useRef, useState } from "react";
import "./lostPest.scss";
import { useParams } from "next/navigation";
import { getOneLostPet } from "@/lib/pocketbase";
import { useScroll, motion } from "framer-motion";

const Page = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const params = useParams();
  const id = params.id;
  const [animal, setAnimal] = useState(null);

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
  }, []);

  return (
    <div className="lostPest">
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
          {animal ? <span className="loaderlostpets3"></span> : ""}
        </div>
      ) : (
        <span className="loaderlostpets2"></span>
      )}
    </div>
  );
};

export default Page;
