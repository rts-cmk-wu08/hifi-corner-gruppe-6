
import PicOne from "./images/1.png";
import PicTwo from "./images/2.png";
import PicThree from "./images/3.png";
import PicFour from "./images/4.png";

const AboutUsContent = () => {
  return (
    <div className="AboutUsContainer">
      <div className="AboutUsContainerBox">
        <img src={PicOne} alt="1" />
        <div className="AboutUsText">
          <h3>History</h3>
          <h3 className="orange">
            Established in the late 1960s, our family owned business is based in
            Edinburgh and Falkirk, but services customers across the UK.
          </h3>
          <p>
            Our Edinburgh branch has the longest history as an audio retailer in
            the UK. During recent renovations, receipts were found from
            Nicolson’s Gramophone Saloon dating back to 1926. In the 1950s WG
            Graham took over the shop and renamed it WG Graham’s Hi-Fi Corner.
            Upon his retirement, Graham Tiso bought the business and shortened
            the name to Hi-Fi Corner.
          </p>
          <p>
            Soon thereafter a young enthusiastic Colin MacKenzie (left), who was
            recommended by Linn’s own Ivor Tiefenbrun, was employed to manage
            the shop; with a knack for business and years of experience in the
            hi-fi industry, Colin would later become the owner of Hi-Fi Corner.
            Today, Struan MacKenzie carries on the legacy as the company’s
            Managing Director.
          </p>
        </div>
      </div>

      <div className="AboutUsContainerBox">
        <div className="AboutUsText">
          <h3>Hear The Difference</h3>
          <h3 className="orange">
            Book a demonstration at our Edinburgh or Falkirk showrooms.
          </h3>
          <p>
            Would you choose a quality car without a test drive? If you are
            familiar with the brand and have great trust in it, you might.
            However, our listening preferences are unique to the individual and
            with many of our customers new to the world of high quality sound
            and vision, we encourage everyone to come in to demonstrate the
            products they are interested in. You’ll find a relaxing and
            comfortable environment in both our Edinburgh and Falkirk premises
            where you can decide for yourself if the kit is right for you. We
            also offer home demonstrations on selected products.
          </p>
          <p>It's our aim to get the right product for you.</p>
          <p>
            Our experts are on hand to guide you through the differences between
            speakers, amplifiers and sources and provide simple solutions that
            suit your needs.
          </p>
        </div>
        <img src={PicTwo} alt="2" />
      </div>

      <div className="AboutUsContainerBox">
        <img src={PicThree} alt="3" />
        <div className="AboutUsText">
          <h3>Services</h3>
          <h3 className="orange">
            Our passion for the products we sell and, for our customers’
            satisfaction simply means that we happily offer additional services
            not found on the high-street.
          </h3>
          <p>
            <span className="bold">Home Setup</span>- We want to ensure that the
            equipment you’ve purchased from us is installed correctly and sounds
            perfect; and we happily provide this service throughout the UK.
          </p>
          <p>
            <span className="bold">Part Exchange</span>– To help you upgrade
            your system, we offer our part-exchange program. We can offer a set
            price, or sell your old kit on your behalf.
            </p>
            <p>
              <span className="bold">Turntable Doctor</span>– Our turntable
              experts have been trained by the manufacturers for initial setup,
              long-term maintenance, and upgrading your high quality turntables.
            </p>
            <p>
              <span className="bold"> Record Cleaning Service</span>– Have some
              old records that need a bit of love? We offer Scotland’s very own
              professional record cleaning service with our bespoke Pro-Ject
              record cleaner.
            
          </p>
        </div>
      </div>

      <div className="AboutUsContainerBox">
        <div className="AboutUsText">
          <h3>Tailored For You</h3>
          <h3 className="orange">
            We look forward to customising a system to meet your needs.
          </h3>
          <p>
            We don’t favour one manufacturer over another – the only thing we do
            favour is making sure our customers get the right product that suits
            their needs and listening preferences. We will ask many questions in
            order to ensure that what you buy from us is tailored to you and you
            alone.
          </p>
          <p>
            If you are looking for a product not found in our demonstration
            showrooms or our online site, don’t fret as we have access to
            hundreds of brands.
          </p>
          <p>
            One of our biggest pleasures of working in this industry is to see
            the smile on our customers’ faces when they finally hear and see the
            system of their dreams.
          </p>
        </div>
        <img src={PicFour} alt="4" />
      </div>
    </div>
  );
};

export default AboutUsContent;
