import "../HomePage/InfoFooter.css";

const Infofooter = () => {
  return (
    <>
      <div className="InfoFooterbox">
        <section className="InfoFooterbox1">
          <h2 className="InfoFooterheadline">What we do</h2>
          <p className="InfoFootertext">
            We look forward to customising a system to meet your needs.
          </p>
          <p className="InfoFootertext">
            We don’t favour one manufacturer over another – the only thing we do
            favour is making sure our customers get the right product that suits
            their needs and listening preferences. We will ask many questions in
            order to ensure that what you buy from us is tailored to you and you
            alone.
          </p>
          <p className="InfoFootertext">
            If you are looking for a product not found in our demonstration
            showrooms or our online site, don’t fret as we have access to
            hundreds of brands.{" "}
          </p>
          <p className="InfoFootertext">
            One of our biggest pleasures of working in this industry is to see
            the smile on our customers’ faces when they finally hear and see the
            system of their dreams.
          </p>
        </section>
        <section className="InfoFooterbox2">
          <h2 className="InfoFooterheadline">Opening hours</h2>
          <h3 className="boxheadline">Edinburgh</h3>
          <p className="InfoFootertext InfoFootertextr">
            2 Joppa Rd,Edinburgh, EH15 2EU <br /> Monday to Friday: 10:00am - 5:30pm <br />
            Saturday: 10:00am - 5:30pm <br /> Sunday: Closed
          </p>

          <h3 className="boxheadline">Falkirk</h3>
          <p className="InfoFootertext InfoFootertextr">
            44 Cow Wynd, Falkirk, Central Region, FK1 1PU <br /> Monday to
            Friday: 10:00am - 5:30pm <br /> Saturday - By appointment only <br /> Sunday:
            Closed
          </p>
        </section>
      </div>
    </>
  );
};

export default Infofooter;
