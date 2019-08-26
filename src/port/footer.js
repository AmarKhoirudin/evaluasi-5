import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        class="page-footer font-small cyan darken-3"
        style={{ textAlign: "center", background: "black" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 py-5">
              <div class="mb-5 flex-center">
                {/* <!-- Facebook --> */}
                <a
                  href="https://www.facebook.com/amar.khoirudin.7"
                  class="fb-ic"
                >
                  <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                {/* <!-- Youtube --> */}
                <a
                  href="https://www.youtube.com/channel/UCvCmfFZOqzhh3zr3ykKyhQw"
                  class="tw-ic"
                >
                  <i class="fab fa-youtube-square fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                {/* <!-- Github--> */}
                <a href="https://github.com/AmarKhoirudin" class="gplus-ic">
                  <i class="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                {/* <!--Linkedin --> */}
                <a href="https://id.linkedin.com/" class="li-ic">
                  <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                {/* <!--Instagram--> */}
                <a href="https://www.instagram.com/mar_4vic/" class="ins-ic">
                  <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2019 Copyright:
          <a href="http://amar.netlify.com"> AmarKhoirudin</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
