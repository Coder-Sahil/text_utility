import React from "react";

export default function About(props) {
  return (
    <>
    <div className="container">
      <div className="container my-2 mx-2">
        <div
          id="carouselExampleDark"
          className="carousel carousel-light slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://source.unsplash.com/500x100/?code"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Text Case Conversion</h5>
                <p>Basic Cases Conversion Added - More On The Way.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://source.unsplash.com/500x100/?text"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Text Encoding/Decoding</h5>
                <p>Currently Supported Base64 Encoding/Decoding.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/500x100/?programming"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>More Functionality</h5>
                <p>More Text Manipulation Comming Soon.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className={`container text-${props.mode === "dark" ? "light" : "dark"}`}>
        <p className="text-center">
          Hi ! Welcome To <strong>Text Utility</strong>..
        </p>
        <p>Hope you like our little project, and it's useful to you.</p>
        <p>First Of All, A BIG SHOUT OUT TO <a href="https://www.codewithharry.com/"><strong>CodeWithHarry</strong></a>
        . For Guidance throughout the project. Make sure to check his youtube, instagram
        and other social links</p>
        <p>
          In future we will be adding more utilities to the project which will
          come useful for doing Various other text Manipulation
        </p>
        <p>Happy To Recieve New suggestions, open source collaboration, etc.
           Feel free to contact Creator <strong>Sahil Trivedi</strong></p>
        <p>Currently, we support the following features</p>
      </div>

      <div className="container">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Convert To Upper Case
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                This function Simply Convert the entire text to Upper Case, ignoring
                numbers.
                <hr/>
                <p>Code Contributor : <strong>Sahil Trivedi</strong></p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Convert To Lower Case
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
              This function Simply Convert the entire text to Lower Case, ignoring
                numbers.
                <hr/>
                <p>Code Contributor : <strong>Sahil Trivedi</strong></p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Convert To Camel Case
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
              This function Simply Convert the entire text to Camel Case, ignoring
                numbers. Camel case basically means a typographical 
                convention in which an initial capital is used for
                 the first letter of a word forming the second
                  element of a closed compound,
                   e.g. PayPal, iPhone, MasterCard.
                   <hr/>
                <p>Code Contributor : <strong>Sahil Trivedi</strong></p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Convert To Title Case
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
              This function Simply Convert the entire text to Title Case, ignoring
                numbers. Title case basically means capitalize the first word,
                 the last word, and all major words in between.
                  Also known as up style and headline style.
                  <hr/>
                <p>Code Contributor : <strong>Sahil Trivedi</strong></p>
              </div>
            </div>
          </div>          
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Remove Spaces
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                Remove Spaces Function is used to removed any extra Spaces
                i.e., more then one space in between text.
                <hr/>
                <p>Code Contributor : <strong>Sahil Trivedi</strong></p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Copy Text
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                Copy Text is used to easily copy the text that is currently in
                the text area whether normal or manipulated text by one of the
                text utility functions.
                <hr/>
                <p>Code Contributor : <strong>Sahil Trivedi</strong></p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Clear Text
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                Clear Text Simply Clear all the types/copied text in the site
                text area.<strong className="text-danger"> Once Text is cleared, it cannot be recovered.</strong> 
                <hr/>
                <p>Code Contributor : <strong>Sahil Trivedi</strong></p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Encode Text To Base 64 String
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
              Base64 is an encoding and decoding technique used to convert
              binary data to an American Standard for Information
              Interchange (ASCII) text format, and vice versa.
              It is used to transfer data over a medium that only
              supports ASCII formats, such as email messages on
              Multipurpose Internet Mail Extension (MIME) and
              Extensible Markup Language (XML) data.
              Base64 is also known as Base64 Content-Transfer-Encoding.
              <hr/>
                <p>Code Contributor : <strong>Sahil Trivedi</strong></p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Decode Text To Base 64 String
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
              Base64 is an encoding and decoding technique used to convert
              binary data to an American Standard for Information
              Interchange (ASCII) text format, and vice versa.
              It is used to transfer data over a medium that only
              supports ASCII formats, such as email messages on
              Multipurpose Internet Mail Extension (MIME) and
              Extensible Markup Language (XML) data.
              Base64 is also known as Base64 Content-Transfer-Encoding.
              <hr/>
                <p>Code Contributor : <strong>Sahil Trivedi</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
