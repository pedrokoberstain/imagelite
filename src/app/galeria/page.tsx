"use client";

import { Template, ImageCard } from "@/components";
import { useState } from "react";

export default function GaleriaPage() {
  const image1 =
    "https://turismodenatureza.com.br/wp-content/uploads/2024/02/Caceres_-Rio-Paraguai.jpg";
  const image2 =
    "https://turismodenatureza.com.br/wp-content/uploads/2024/02/o-que-fazer-em-caceres.jpg";
  const nome1 = "Fazenda Descalvados";
  const nome2 = "Chalana";

  const [codigoImage, setCodigoImage] = useState<number>(2);
  const [urlImage, setUrlImage] = useState<string>(image2);
  const [nomeImage, setNomeImage] = useState<string>(nome1);

  function mudarImagem() {
    if (codigoImage == 1) {
      setCodigoImage(2);
      setUrlImage(image2);
      setNomeImage(nome1);
    } else {
      setCodigoImage(1);
      setUrlImage(image1);
      setNomeImage(nome2);
    }
  }

  return (
    <Template>
      <button className="bg-gray-500" onClick={mudarImagem}>
        Clique para mudar
      </button>
      <section className="grid grid-cols-4 gap-8">
        <ImageCard
          nome={nomeImage}
          dataUpload="11/09/2024"
          tamanho="10MB"
          src={urlImage}
        />
        <ImageCard
          nome={nomeImage}
          dataUpload="11/09/2024"
          tamanho="10MB"
          src={urlImage}
        />
        <ImageCard
          nome={nomeImage}
          dataUpload="11/09/2024"
          tamanho="10MB"
          src={urlImage}
        />
      </section>
    </Template>
  );
}
