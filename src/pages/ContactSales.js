import Layout from "../components/Layout/Layout";

import nigeria from "../assets/images/Nigeria.svg";
import arrowDown from "../assets/images/arrow-down.svg";

export default function ContactSales() {
  return (
    <Layout>
      <section className="contactsales">
        <div className="contactsales__inner">
          <div className="contactsales__contactform">
            <form className="contactsales__form">
              <div className="form__group">
                <div className="form__group--flexed">
                  <div className="form__group--flexed-item">
                    <label htmlFor="lastname" className="form__label">
                      Last Name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      className="form__input form__input--flexed"
                    />
                  </div>
                  <div className="form__group--flexed-item">
                    <label htmlFor="firstname" className="form__label">
                      First Name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      className="form__input form__input--flexed"
                    />
                  </div>
                </div>
              </div>
              <div className="form__group">
                <label htmlFor="workEmail" className="form__label">
                  Work Email
                </label>
                <input type="email" id="workEmail" className="form__input" />
              </div>
              <div className="form__group form__group-pr">
                <label htmlFor="workEmail" className="form__label">
                  Phone Number
                </label>
                <input type="text" className="form__input form__input-w20" />
                <input
                  type="email"
                  id="workEmail"
                  className="form__input form__input-w80"
                />
                <img
                  src={nigeria}
                  alt="the nigerian flog icon"
                  className="form__input-img form__input-img-ng"
                />
                <img
                  src={arrowDown}
                  alt="an arrow down icon"
                  className="form__input-img form__input-img-ad"
                />
                <span className="form__input-text">+234</span>
              </div>
              <div className="form__group">
                <label htmlFor="product" className="form__label">
                  Product of Interest
                </label>
                <select
                  id="product"
                  className="form__input form__input--select"
                >
                  <option val="">Select an option</option>
                </select>
              </div>
              <div className="form__group">
                <div className="form__group--flexed">
                  <div className="form__group--flexed-item">
                    <label htmlFor="companyName" className="form__label">
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      className="form__input form__input--flexed"
                    />
                  </div>
                  <div className="form__group--flexed-item">
                    <label htmlFor="companySize" className="form__label">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      className="form__input form__input--flexed form__input--select"
                    >
                      <option val="">Select an option</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form__group">
                <label htmlFor="help" className="form__Label">
                  How can our expert help you?
                </label>
                <textarea
                  className="form__input"
                  id="help"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form__group">
                <button className="form__submit">Contact Us</button>
              </div>
            </form>
          </div>
          <div className="contactsales__r">
            <h2 className="contactsales__r-header">
              Request a call from an expert
            </h2>
            <p className="contactsales__r-subheader">
              Having thoughts on which product works best for you? Fill the form
              and our expert will reach out to you.
            </p>
            <h2 className="contactsales__r-header">
              Our offices around Africa
            </h2>
            <div className="contactsales__locations">
              <div className="contactsales__location">
                <h3 className="contactsales__location-h">NIGERIA</h3>
                <span className="contactsales__location-i">
                  33a, Adeola Odeku, Victoria
                </span>
                <span className="contactsales__location-i">Island, Lagos.</span>
                <span className="contactsales__location-i">
                  +234-(0)-8000000000
                </span>
              </div>
              <div className="contactsales__location">
                <h3 className="contactsales__location-h">GHANA</h3>
                <span className="contactsales__location-i">
                  45, El-Senoussi Street,
                </span>
                <span className="contactsales__location-i">Accra</span>
                <span className="contactsales__location-i">
                  +233-(0)-277619819
                </span>
              </div>
              <div className="contactsales__location">
                <h3 className="contactsales__location-h">SOUTH AFRICA</h3>
                <span className="contactsales__location-i">
                  474, Cheriton Drive, Port
                </span>
                <span className="contactsales__location-i">
                  Shepstone, Kwazulu-Natal
                </span>
                <span className="contactsales__location-i">
                  +27-(0)-857926978
                </span>
              </div>
              <div className="contactsales__location">
                <h3 className="contactsales__location-h">EGYPT</h3>
                <span className="contactsales__location-i">
                  72, Gameat El-Dewal
                </span>
                <span className="contactsales__location-i">
                  El-Arabia St., Giza.
                </span>
                <span className="contactsales__location-i">
                  +20-(0)-35924295
                </span>
              </div>
              <div className="contactsales__location">
                <h3 className="contactsales__location-h">KENYA</h3>
                <span className="contactsales__location-i">
                  41, Enterprise Rd, Industrial
                </span>
                <span className="contactsales__location-i">Area , Niarobi</span>
                <span className="contactsales__location-i">
                  +254-(0)-20536766
                </span>
              </div>
              <div className="contactsales__location">
                <h3 className="contactsales__location-h">TUNISIA</h3>
                <span className="contactsales__location-i">
                  13, Rue de Makthar, Dhraa
                </span>
                <span className="contactsales__location-i">
                  Governorate Kasserine
                </span>
                <span className="contactsales__location-i">
                  +216-(0)-77367410
                </span>
              </div>
              <div className="contactsales__location">
                <h3 className="contactsales__location-h">MALI</h3>
                <span className="contactsales__location-i">
                  22, Badalabougou Est,
                </span>
                <span className="contactsales__location-i">Bamako.</span>
                <span className="contactsales__location-i">
                  +223-(0)-78175387
                </span>
              </div>
              <div className="contactsales__location">
                <h3 className="contactsales__location-h">TANZANIA</h3>
                <span className="contactsales__location-i">
                  Mbezi Beach, P.O.B: 70339,
                </span>
                <span className="contactsales__location-i">Dar Salaam</span>
                <span className="contactsales__location-i">
                  +255-(0)-222120119
                </span>
              </div>
              <div className="contactsales__location">
                <h3 className="contactsales__location-h">TOGO</h3>
                <span className="contactsales__location-i">
                  10, E rue des Echis,
                </span>
                <span className="contactsales__location-i">Lome</span>
                <span className="contactsales__location-i">
                  +228-(0)-22229600
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
