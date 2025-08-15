"use client";
import React, { useEffect, useState } from "react";
import "./page.scss";

const TreasureQuest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [path, setPath] = useState([]);
  const [foundTreasure, setFoundTreasure] = useState(false);
  const [photoTopSrc, setPhotoTopSrc] = useState("/media/photo-1.png");
  const [showError, setShowError] = useState(false);

  const steps = {
    1: {
      text: "Вы стоите перед тремя дорогами. Куда пойдёте?",
      options: ["Да", "Нет"],
    },
    2: {
      text: "Вы видите реку. Что будете делать?",
      options: ["Да", "Нет"],
    },
  };
  const handleChoice = (choice) => {
    const newPath = [...path, choice];
    setPath(newPath);

    if (newPath.join(",") === "Да,Да") {
      setPhotoTopSrc("/media/photo-3.png");
      setFoundTreasure(true);
    } else if (newPath.length === 2) {
      setShowError(true);
      setPhotoTopSrc("/media/photo-2.png");
      setTimeout(() => {
        setCurrentStep(1);
        setPath([]);
        setShowError(false);
        setPhotoTopSrc("/media/photo-1.png");
      }, 2000);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="TreasureQuest">
      <div>
        <div className="container">
          <div className="container__item">
            <div className="top__photos">
              <div
                className={`one ${
                  foundTreasure && foundTreasure !== "✓" ? "win" : null
                }`}
                onClick={() => {
                  if (!foundTreasure) return;
                  setFoundTreasure("✓");
                  setPhotoTopSrc("/media/photo-8.png");
                  setTimeout(() => {
                    window.location.reload();
                  }, 2000);
                }}
              >
                <img src={photoTopSrc} alt="" />
                {foundTreasure === "✓" && <div className="symbol">W</div>}
              </div>
              <img src="/media/photo-4.png" className="is-tie" alt="" />
            </div>
            <div className="block">
              <div className="question__box">
                <div className="question">
                  {!foundTreasure && (
                    <div className="question__item">
                      <h2>
                        {!showError
                          ? steps[currentStep].text
                          : "Упс, не получилось найти клад"}
                      </h2>
                      <img src="/media/photo-5.png" alt="" />
                    </div>
                  )}
                </div>
                {!showError && !foundTreasure && (
                  <div className="question__buttons">
                    {steps[currentStep].options.map((option, index) => (
                      <button key={index} onClick={() => handleChoice(option)}>
                        {index === 0 ? (
                          <img src="/media/photo-6.png" alt="" />
                        ) : (
                          <img src="/media/photo-7.png" alt="" />
                        )}
                        <span>{option}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasureQuest;
