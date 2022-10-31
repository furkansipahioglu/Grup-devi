import React from "react";

function Content() {
  return (
    <div class="main-container">
      <div
        class="row1"
        style={{
          textAlign: "center",
        }}
      >
        <div
          class="column1"
          style={{
            backgroundColor: "rgb(255, 255, 255)",
          }}
        >
          <h2>İletişim Bilgilerimiz</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            atque facilis quod excepturi magnam porro, nemo magni modi
            perspiciatis, consequuntur odio. Quas maiores modi saepe quisquam
            dicta eius at dolorem cumque rerum in repellat officia sit
            consectetur, odio ut commodi corporis perferendis veritatis aliquam?
            Quam ipsam, aspernatur qui, reiciendis rerum fuga expedita aperiam,
            beatae numquam culpa mollitia vitae rem nesciunt optio perspiciatis
            necessitatibus assumenda? Ipsam at minima porro quae nemo inventore
            explicabo quos praesentium fugiat reiciendis doloribus dignissimos
            totam suscipit deleniti, esse eius culpa vel. Laudantium magni quae
            qui autem eligendi, repudiandae ex excepturi ipsa itaque voluptate
            reiciendis quam odit!
          </p>
        </div>
        <div
          class="column2"
          style={{
            backgroundColor: "rgb(255, 255, 255)",
          }}
        >
          <img
            src="https://media.zicxa.com/3239444"
            style={{
              /* max-width: 400px; */
              borderRadius: "20px",
              boxShadow: "1px 2px 9px #F4AAB9",
              maxWidth: "300px",
            }}
          />
        </div>
      </div>

      <div
        class="card-group"
        style={{
          justifyContent: "center",
        }}
      >
        <div
          class="card"
          style={{
            maxWidth: "300px",
            width: "none",
          }}
        >
          <i
            class="fas fa-map-marker-alt"
            style={{
              fontSize: "24px",
              textAlign: "center",
              width: "100%",
              paddingTop: "7%",
            }}
          ></i>
          <div class="card-body">
            <h5
              class="card-title"
              style={{
                justifyContent: "center",
              }}
            >
              Adres
            </h5>
            <p class="card-text">
              Ahmet Yesevi caddesi zafer mahallesi coşarsu sokak no:69 daire:4
              Bahçelievler İstanbul
            </p>
          </div>
          <div
            class="card-footer"
            style={{
              textAlign: "center",
            }}
          >
            <small class="text-muted">
              {" "}
              Pazartesi cuma günleri arasında 9.00 19.00 açığız
            </small>
          </div>
        </div>
        <div
          class="card"
          style={{
            maxWidth: "300px",
            width: "none",
          }}
        >
          <i
            class="fas fa-mail-bulk"
            style={{
              fontSize: "24px",
              textAlign: "center",
              width: "100%",
              paddingTop: "7%",
            }}
          ></i>
          <div class="card-body">
            <h5
              class="card-title"
              style={{
                textAlign: "center",
              }}
            >
              Mail
            </h5>
            <p class="card-text">kamilkaplann@gmail.com</p>
            <p class="card-text">info@akatsoft.com</p>
          </div>
          <div
            class="card-footer"
            style={{
              textAlign: "center",
            }}
          >
            <small class="text-muted">
              Göndermiş olduğunuz maillere gün içerisinde mutlaka dönüş
              sağlanmaktadır
            </small>
          </div>
        </div>
        <div
          class="card"
          style={{
            maxWidth: "300px",
            width: "none",
          }}
        >
          <i
            class="fas fa-phone-alt"
            style={{
              fontSize: "24px",
              textAlign: "center",
              width: "100%",
              paddingTop: "7%",
            }}
          ></i>
          <div class="card-body">
            <h5
              class="card-title"
              style={{
                textAlign: "center",
              }}
            >
              Telefon Numarası
            </h5>
            <p class="card-text">0543 111 11 11</p>
          </div>
          <div
            class="card-footer"
            style={{
              textAlign: "center",
            }}
          >
            <small class="text-muted">
              {" "}
              Pazartesi cuma günleri arasında 9.00 19.00 açığız
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
