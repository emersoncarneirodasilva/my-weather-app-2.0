import { useMemo } from "react";
import { backgrounds } from "../constants/backgroundImage";

export const useBackgroundImage = (conditionText: string, isDay: number) => {
  return useMemo(() => {
    const conditionMapping: Record<string, string> = {
      Sol: backgrounds.backgroundImages.option1,
      "Céu limpo": backgrounds.backgroundImages.option3,
      "Parcialmente nublado": isDay
        ? backgrounds.backgroundImages.option2
        : backgrounds.backgroundImages.option4,
      Nublado: backgrounds.backgroundImages.option5,
      Encoberto: backgrounds.backgroundImages.option5,
      Neblina: backgrounds.backgroundImages.option8,
      "Possibilidade de chuva irregular": backgrounds.backgroundImages.option6,
      "Possibilidade de neve irregular": backgrounds.backgroundImages.option9,
      "Possibilidade de neve molhada irregular":
        backgrounds.backgroundImages.option9,
      "Possibilidade de chuvisco gelado irregular":
        backgrounds.backgroundImages.option6,
      "Possibilidade de trovoada": backgrounds.backgroundImages.option7,
      "Rajadas de vento com neve": backgrounds.backgroundImages.option10,
      Nevasca: backgrounds.backgroundImages.option10,
      Nevoeiro: backgrounds.backgroundImages.option8,
      "Nevoeiro gelado": backgrounds.backgroundImages.option8,
      "Chuvisco irregular": backgrounds.backgroundImages.option6,
      Chuvisco: backgrounds.backgroundImages.option6,
      "Chuvisco gelado": backgrounds.backgroundImages.option6,
      "Chuvisco forte gelado": backgrounds.backgroundImages.option6,
      "Chuva fraca irregular": backgrounds.backgroundImages.option6,
      "Chuva fraca": backgrounds.backgroundImages.option6,
      "Períodos de chuva moderada": backgrounds.backgroundImages.option6,
      "Chuva moderada": backgrounds.backgroundImages.option6,
      "Períodos de chuva forte": backgrounds.backgroundImages.option6,
      "Chuva forte": backgrounds.backgroundImages.option6,
      "Chuva fraca e gelada": backgrounds.backgroundImages.option6,
      "Chuva gelada moderada ou forte": backgrounds.backgroundImages.option6,
      "Chuva fraca com neve": backgrounds.backgroundImages.option6,
      "Chuva forte ou moderada com neve": backgrounds.backgroundImages.option6,
      "Queda de neve irregular e fraca": backgrounds.backgroundImages.option9,
      "Queda de neve fraca": backgrounds.backgroundImages.option9,
      "Queda de neve moderada e irregular":
        backgrounds.backgroundImages.option9,
      "Queda de neve moderada": backgrounds.backgroundImages.option9,
      "Queda de neve forte e irregular": backgrounds.backgroundImages.option9,
      "Neve intensa": backgrounds.backgroundImages.option9,
      Granizo: backgrounds.backgroundImages.option10,
      "Aguaceiros fracos": backgrounds.backgroundImages.option6,
      "Aguaceiros moderados ou fortes": backgrounds.backgroundImages.option6,
      "Chuva torrencial": backgrounds.backgroundImages.option6,
      "Aguaceiros fracos com neve": backgrounds.backgroundImages.option9,
      "Aguaceiros moderados ou fortes com neve":
        backgrounds.backgroundImages.option9,
      "Chuva fraca irregular com trovoada":
        backgrounds.backgroundImages.option7,
      "Chuva moderada ou forte com trovoada":
        backgrounds.backgroundImages.option7,
      "Neve fraca irregular com trovoada": backgrounds.backgroundImages.option7,
      "Neve moderada ou forte com trovoada":
        backgrounds.backgroundImages.option7,
    };

    return (
      conditionMapping[conditionText] || backgrounds.backgroundImages.option5
    );
  }, [conditionText, isDay]);
};
