import React from "react";
import { Card, Alert } from "react-bootstrap";
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";

const Home = () => {
  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken);
  }

  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <div className={"card border border-dark bg-dark text-white card-xl-12 "}>
        <Card.Header>
          <Card.Text>
            <br />
            <h3>Kütüphane sistemine hoşgeldiniz {auth.username} </h3>
          </Card.Text>
        </Card.Header>
        <Card.Body>
          <h5>Kütüphane Sistemi</h5>
          <Card.Text>
            {" "}
            Kütüphane alanında işlemleri gerçekleştiren fonksiyonel hizmet
            işletmelerine denir.Kütüphane kaynaklarının önemli bir kısmına
            bilgisayar ortamında ulaşılabilen ve yazılı veya mikrofilm dışında
            bilgisiyar ortamındaki formatlara sahip verilerin bulunduğu
            kütüphane türüdür. Bazı büyük kütüphaneler kitaplarının daha geniş
            bir kitle ile buluşmasını ve ulaşılırlılığını kolaylaştırmak için
            kitaplarını dijital ortama aktarmaktadır.
          </Card.Text>

          <Card.Text>
            Geleneksel kütüphaneler sınırlı bir alana sahip olmalarına karşın
            dijital kütüphaneler dijital enformasyonun çok daha küçük fiziksel
            alan işgal etmesinden dolayı çok daha fazla enformasyonu
            bulundurabilme potansiyeline sahiplerdir.
          </Card.Text>
        </Card.Body>
        <br />
      </div>
    </div>
  );
};

export default Home;
