import React from "react";
import { Helmet } from "react-helmet";

const handleClick = (e) => {
  if ((document.getElementById("iletişimform").style.display = "none")) {
    document.getElementById("iletişimform").style.display = "block";
    document.getElementById("projeform").style.display = "none";
    document.getElementById("başvuruform").style.display = "none";
  } else {
    document.getElementById("iletişimform").style.display = "none";
  }
};
const handleClick2 = (e) => {
  if ((document.getElementById("projeform").style.display = "none")) {
    document.getElementById("projeform").style.display = "block";
    document.getElementById("iletişimform").style.display = "none";
    document.getElementById("başvuruform").style.display = "none";
  } else {
    document.getElementById("projeform").style.display = "none";
  }
};
const handleClick3 = (e) => {
  if ((document.getElementById("başvuruform").style.display = "none")) {
    document.getElementById("başvuruform").style.display = "block";
    document.getElementById("projeform").style.display = "none";
    document.getElementById("iletişimform").style.display = "none";
  } else {
    document.getElementById("başvuruform").style.display = "none";
  }
};

function ContactForm() {
  return (
    <div class="container-fluid">
      <div class="contactForm">
        <div class="cards" style={{ paddingTop: "3%" }}>
          <div class="card card-1 " id="iletişim" onClick={handleClick}>
            <img
              class="card-img-top"
              src="https://img.freepik.com/premium-vector/programming-laptop-isometry-software-development-coding_186930-569.jpg?w=2000"
              alt="Card image cap"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                rotate: "60%",
                maxWidth: "200px",
                paddingBottom: "10px",
                marginTop: "50px",
                transform: "rotate(50deg)",
              }}
            />

            <h2 class="card__title" style={{ paddingTop: "12%" }}>
              İletişim Formu
            </h2>
            <p class="card__apply">
              <a class="card__link2" href="#">
                <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-2" id="proje" onClick={handleClick2}>
            <img
              class="card-img-top"
              src="https://img.freepik.com/premium-vector/programming-laptop-isometry-software-development-coding_186930-569.jpg?w=2000"
              alt="Card image cap"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                rotate: "60%",
                maxWidth: "200px",
                paddingBottom: "10px",
                marginTop: "50px",
                transform: "rotate(50deg)",
              }}
            />

            <h2 class="card__title" style={{ paddingTop: "12%" }}>
              Proje Formu
            </h2>
            <p class="card__apply">
              <a class="card__link2" href="#">
                <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-3" id="başvuru" onClick={handleClick3}>
            <img
              class="card-img-top"
              src="https://img.freepik.com/premium-vector/programming-laptop-isometry-software-development-coding_186930-569.jpg?w=2000"
              alt="Card image cap"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                rotate: "60%",
                maxWidth: "200px",
                paddingBottom: "10px",
                marginTop: "50px",
                transform: "rotate(50deg)",
              }}
            />

            <h2 class="card__title" style={{ paddingTop: "12%" }}>
              Başvuru Formu
            </h2>
            <p class="card__apply">
              <a class="card__link2" href="#">
                <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
        </div>
        <hr />
        <br />

        <div
          class="formsContactForm forms border border-3 px-4 py-2"
          id="iletişimform"
          style={{ display: "block" }}
        >
          <div
            class="col-sm-6 text-center"
            style={{
              maxWidth: "100%",
              display: "inline",
              marginBottom: "50px",
            }}
          >
            <h4>Bizimle İletişime Geçebilirsiniz</h4>
            <p class="support-description">
              <br />
            </p>

            

            
            <form
              action="sender/mailci.php"
              method="post"
              id="contact"
              name="contact"
              class="form-horizontal contact-form"
            >
              <div class="form-group">
                <div class="col-sm-12 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-user"></i>
                    </span>
                    <input
                      name="sender_name"
                      id="sender_name"
                      placeholder="Adınız (gerekli)"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-12 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-book"></i>
                    </span>
                    <input
                      name="subject"
                      id="subject"
                      placeholder="Konu (gerekli)"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-12 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-envelope"></i>
                    </span>
                    <input
                      name="email"
                      id="email"
                      placeholder="Eposta (gerekli)"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-12 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-phone-alt"></i>
                    </span>
                    <input
                      name="phone"
                      id="phone"
                      placeholder="Telefon"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-12 inputGroupContainer">
                  <div class="input-group">
                    <textarea
                      name="message"
                      id="message"
                      class="form-control"
                      placeholder="Mesajınız (gerekli)"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-12 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-check"></i>
                    </span>
                    <input
                      name="captcha"
                      id="captcha"
                      placeholder="4 + 1 = ?"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="form-group sub">
                <div class="col-sm-12">
                  <button
                    type="submit"
                    name="name"
                    class="btn btn-warning submit"
                  >
                    Gönder
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          class="formsProjectForm forms border border-3 px-4 py-2"
          id="projeform"
          style={{ display: "none" }}
        >
          <form>
            <div class="banner">
              <h1
                style={{
                  color: "floralwhite",
                }}
              >
                Proje Formu
              </h1>
            </div>
            <br />
            <fieldset>
              <legend>Kişisel Bilgiler</legend>
              <div class="colums">
                <div class="item">
                  <label htmlFor="fname">
                    Adınız<span>*</span>
                  </label>
                  <input id="fname" type="text" name="fname" required />
                </div>
                <div class="item">
                  <label htmlFor="lname">
                    Soyadınız<span>*</span>
                  </label>
                  <input id="lname" type="text" name="lname" required />
                </div>
                <div class="item">
                  <label htmlFor="address">
                    Mail Adresi<span>*</span>
                  </label>
                  <input id="address" type="text" name="address" required />
                </div>
                <div class="item">
                  <label htmlFor="phone">Telefon</label>
                  <input id="phone" type="tel" name="phone" />
                </div>
              </div>
            </fieldset>
            <br />
            <fieldset>
              <legend>Firma Bilgileri</legend>
              <div class="item">
                <label htmlFor="fname">
                  Firma Adı<span>*</span>
                </label>
                <input id="fname" type="text" name="fname" required />
              </div>
              <div class="item">
                <label htmlFor="lname">
                  Firmadaki Pozisyonunuz<span>*</span>
                </label>
                <input id="lname" type="text" name="lname" required />
              </div>
              <div class="item">
                <label htmlFor="lname">
                  Firma Web Sitesi<span>*</span>
                </label>
                <input id="lname" type="text" name="lname" required />
              </div>
              <div class="item">
                <label htmlFor="phone">Firma Telefon Numarası</label>
                <input id="phone" type="tel" name="phone" />
              </div>
            </fieldset>
            <fieldset>
              <legend>Proje Bilgileri</legend>
              <div class="item">
                <label htmlFor="fname">
                  Proje Adı<span>*</span>
                </label>
                <input id="fname" type="text" name="fname" required />
              </div>
              <div class="item">
                <label htmlFor="donation">Proje Detayları</label>
                <textarea id="donation" rows="3" required></textarea>
              </div>
            </fieldset>
            <div class="btn-block">
              <button
                style={{
                  width: "150px",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  background: "#1c87c9",
                  fontSize: "16px",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onMouseOver="this.style.color='red'"
                onMouseOut="this.style.color='white'"
                class="btn btn-warning submit"
                type="order"
                href="/"
              >
                Confirm Order
              </button>
            </div>
          </form>
        </div>

        <div
          class="formsApplicationForm forms border border-3 px-4 py-2"
          id="başvuruform"
          style={{
            display: "none",
          }}
        >
          <form>
            <div class="banner">
              <h1 style={{ color: "floralwhite" }}>Başvuru Formu</h1>
            </div>
            <br />

            <br />
            <fieldset>
              <legend>Firma Bilgileri</legend>
              <div class="item">
                <label htmlFor="fname">
                  Adınız<span>*</span>
                </label>
                <input id="fname" type="text" name="fname" required />
              </div>
              <div class="item">
                <label htmlFor="lname">
                  Soyadınız<span>*</span>
                </label>
                <input id="lname" type="text" name="lname" required />
              </div>
              <div class="item">
                <label htmlFor="lname">
                  Web Sitesi<span>*</span>
                </label>
                <input id="lname" type="text" name="lname" required />
              </div>
              <div class="item">
                <label htmlFor="address">
                  Mail Adresi<span>*</span>
                </label>
                <input id="address" type="text" name="address" required />
              </div>
              <div class="item">
                <label htmlFor="phone">Telefon</label>
                <input id="phone" type="tel" name="phone" />
              </div>
              <div class="item">
                <label htmlFor="lname">
                  Github<span>*</span>
                </label>
                <input id="lname" type="text" name="lname" required />
              </div>
              <div class="item">
                <label htmlFor="lname">
                  Linkedin<span>*</span>
                </label>
                <input id="lname" type="text" name="lname" required />
              </div>
              <div class="item">
                <label htmlFor="lname">
                  Cv URL<span>*</span>
                </label>
                <input id="lname" type="text" name="lname" required />
              </div>
            </fieldset>
            <fieldset>
              <legend>Proje Bilgileri</legend>
              <div class="item">
                <p>Başvurduğunuz Pozisyon</p>
                <select>
                  <option value=""></option>
                  <option value="1">*Please select*</option>
                  <option value="2">Seçenek 1</option>
                  <option value="3">Seçenek 2</option>
                  <option value="4">Seçenek 3</option>
                  <option value="5">Seçenek 4</option>
                </select>
              </div>
              <div class="item">
                <label htmlFor="donation">Proje Detayları</label>
                <textarea id="donation" rows="3"></textarea>
              </div>
            </fieldset>
            <div class="btn-block">
              <button
                style={{
                  width: "150px",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  background: "#1c87c9",
                  fontSize: "16px",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onMouseOver="this.style.color='red'"
                onMouseOut="this.style.color='white'"
                class="btn btn-warning submit"
                type="order"
                href="/"
              >
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </div>

      <script src="Form2.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default ContactForm;
