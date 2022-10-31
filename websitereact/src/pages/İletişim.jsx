import React from "react";
import ContactForm from "../components/ContactForm";
import Content from "../components/Content";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

function İletişim() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossOrigin="anonymous"
      />
      <PageNav />
      <Content />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default İletişim;
