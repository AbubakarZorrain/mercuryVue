/* eslint-disable */
<template>
  <!--  eslint-disable  -->
  <html>

  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  </head>

  <body>
    <div id="app">
      <div class="">
        <div class="row block1 text-white">
          <div class="col">
            Contact Us:
            <img src="./assets/block1phone.png" alt="">
            <a class="block1phonenumber" href="tel:+92302-3554482">
              (+92)-302-3554482
            </a>
            <img src="./assets/block1whatsapp.png" alt="">
            <a class="block1whatsapptxt">Whatsapp</a>
          </div>
          <div class="col">
            <div class="nav-item nav-link float-end text-white ml-auto">
              <a class="block1emailtxt m-r-0" href="mailto:info@mercurysols.org">
                info@mercurysols.org
              </a>
              <img src="./assets/block1email.png" alt="" class="block1emailimg m-l-0" />
            </div>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg block2 text-white">
          <div class="m-0 p-4 ">
            <img src="./assets/block2logo.png" alt="" class="block2img" />
          </div>
          <button class="navbar-toggler border border-2 border-dark w-10" type="button" data-toggle="collapse"
            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
            <!-- <span class="navbar-toggler-icon"></span> -->



          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav w-100 pl-7">


              <div class="nav-item nav-link text-white ml-2 ml-lg-auto">
                <div class="m-l-3 ">
                  <router-link to="/about" class="anchorStyles"> Company</router-link>

                </div>

              </div>
              <div class="nav-item nav-link text-white ml-2 mdl-0">
                <div class="m-l-3">
                  <router-link to="/" class="anchorStyles"> Projects</router-link>
                </div>

              </div>
              <div class="nav-item nav-link text-white ml-2 mdl-0 ">
                <div class="m-l-3">
                  <router-link to="/iptv" class="anchorStyles"> IPTV</router-link>
                </div>

              </div>
              <div class="nav-item nav-link text-white ml-2 mdl-0 ">
                <div class="m-l-3">

                  <router-link to="/" class="anchorStyles"> Career</router-link>
                </div>

              </div>
              <div class="nav-item nav-link float-end text-white ml-0 ml-lg-auto">
                <div class="requestblock ">
                  <img src="./assets/block2request.png" alt="" class="block2requestimg" />
                  <div class="block2requesttxt">
                    <router-link to="/" class="anchorStyles">
                      Request A Quote</router-link>
                  </div>
                </div>
              </div>
              <div class="nav-item nav-link float-end text-white p-0">
                <div class="block2signinblock d-flex">
                  <div class="">
                    <img src="./assets/block2vector.png" alt="" class="block2vectorimg" />
                  </div>
                  <div class="block2signIn   text-center p-b-1">
                    <router-link to="/" class="anchorStyles2">
                       SignIn</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <router-view />
      </div>

    </div>

  </body>

  </html>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",
};
/* eslint-disable */
// eslint-disable-next-line
</script>

<style scoped>
/* eslint-disable */
.block1 {
  /* position: absolute; */

  /* width: 100%; */
  /* height: 34px; */
  width: 100%;
  margin: 0px;


  background: #14264a;
  border: solid #000000;
  box-sizing: border-box;
}

.block1Contact {
  /* position: absolute;
  width: 87px;
  height: 17px; */

  /* margin-top: 9px; */
  /* text-align: right; */
  /* margin-left: 1%; */
  margin-top: 0.75%;
  margin-bottom: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
}

.block1phone {
  /* position: absolute; */
  display: inline-block;
  width: 15.75px;
  height: 15.99px;
  /* left: 140.16px; */
  margin-top: 7.39px;
  margin-left: 137.51px;
  margin-right: 5px;
  margin-bottom: 7.94px;
}

.block1phonenumber {
  /* position: absolute;
  width: 137px;
  height: 17px;
  margin-left: 161px;
  margin-top: 9px;
  margin-bottom: 8px; */
  text-decoration: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
}

.line {
  position: absolute;
  width: 26.31px;
  height: 0px;
  margin-left: 290px;
  margin-top: 13px;
  margin-bottom: 2.7px;

  border: 2px solid #ffffff;
  transform: rotate(91deg);
}

.block1whatsapp {
  /* position: absolute; */

  margin-left: 315px;
  margin-top: 8px;
}

.block1whatsapptxt {
  /* position: absolute;
  width: 87px;
  height: 17px;
  left: 340px;
  margin-top: 8px;
  margin-bottom: 9px; */
  text-decoration: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* margin: 0; */

  color: #ffffff;
}



.block1emailtxt {
  /* position: absolute;
  width: 164px;
  height: 22px;
  right: 20px;
  margin-top: 8px;
  margin-bottom: 7px; */
  float: right;
  padding-left: 7px;
  margin-top: 2%;
  text-decoration: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
}

.block1emailimg {

  float: right;
  margin-top: 2%;
}

@media (max-width:412px) {
  .block1 {
    position: absolute;

    width: 100%;
    height: 34px;
    left: 0px;
    top: 0px;
    right: 0px;

    background: #14264a;
    border: 1px solid #000000;
    box-sizing: border-box;
  }

  .block1Contact {
    position: absolute;
    width: 87px;
    height: 17px;

    margin-top: 9px;
    text-align: right;
    margin-left: -19px;
    margin-bottom: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;

    color: #ffffff;
  }

  .block1phone {
    position: absolute;
    display: inline-block;
    width: 15.75px;
    height: 15.99px;
    margin-top: 5.39px;
    margin-left: 75px;
    margin-right: 5px;
    margin-bottom: 7.94px;
  }

  .block1phonenumber {
    position: absolute;
    width: 137px;
    height: 17px;
    margin-left: 90px;
    margin-top: 9px;
    margin-bottom: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 350;
    font-size: 10px;
    line-height: 19px;

    color: #ffffff;
  }

  .line {
    position: absolute;
    width: 20.31px;
    height: 0px;
    margin-left: 163px;
    margin-top: 13px;
    margin-bottom: 2.7px;

    border: 2px solid #ffffff;
    transform: rotate(91deg);
  }

  .block1whatsapp {
    position: absolute;

    margin-left: 179px;
    margin-top: 8px;
  }

  .block1whatsapptxt {
    position: absolute;
    width: 87px;
    height: 17px;
    left: 197px;
    margin-top: 8px;
    margin-bottom: 9px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    /* margin: 0; */

    color: #ffffff;
  }

  .block1emailimg {
    position: absolute;

    right: 135px;
    margin-top: 8px;
    margin-bottom: 7px;
  }

  .block1emailtxt {
    position: absolute;
    width: 164px;
    height: 22px;
    right: -17px;
    margin-top: 8px;
    margin-bottom: 7px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 19px;

    color: #ffffff;
  }

  .block2 {
    /* position: absolute;
    width: 100%;
    height: 80px;
    left: 0px;
    top: 35px; */

    background: white;
    box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.25);
  }

  .block2img {
    /* position: absolute;
    width: 0px;
    height: 0px;
    left: -20px;
    top: 15px; */

  }

  .block2company {
    /* position: absolute;
    width: 86px;
    height: 21px;
    left: 14px;
    top: 31px; */
    background: black;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    color: #001c42;
  }

  .block2projects {
    /* position: absolute;
    width: 86px;
    height: 21px;
    left: 590px;
    top: 67px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    color: #001c42;
  }

  .block2IPTV {
    /* position: absolute;
    width: 86px;
    height: 21px;
    left: 680px;
    top: 67px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    color: #001c42;
  }

  .block2career {
    /* position: absolute;
    width: 86px;
    height: 21px;
    left: 760px;
    top: 67px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    color: #001c42;
  }

  .anchorStyles {
    background: white;
    color: black;
    font-style: none;
    text-decoration: none;
  }

  .anchorStyles2 {
    color: white;
    font-style: none;
    text-decoration: none;
  }

  .block2requestimg {
    position: absolute;
    /* right: 350px;
    top: 67px; */
  }

  .block2requesttxt {
    /* position: absolute;
    width: 121px;
    height: 19px;
    right: 220px;
    top: 65px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #001c42;
  }

  .block2signinblock {

    background: #14264a;
    border-radius: 10px;
    width: 204px;
  }

  .block2vectorimg {}

  .block2signIn {

    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 19px;
    /* identical to box height */

    color: #ffffff;
  }
}

@media all and (min-width:769) and (max-width: 1024) {
  .block1 {
    position: absolute;
    background: red;
    width: 100%;
    height: 34px;
    left: 0px;
    top: 0px;
    right: 0px;

    /* background: #14264a; */
    border: 1px solid #000000;
    box-sizing: border-box;
  }

  .block1Contact {
    position: absolute;
    width: 87px;
    height: 17px;

    margin-top: 9px;
    text-align: right;
    margin-left: -19px;
    margin-bottom: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;

    color: #ffffff;
  }

  .block1phone {
    position: absolute;
    display: inline-block;
    width: 15.75px;
    height: 15.99px;
    margin-top: 5.39px;
    margin-left: 75px;
    margin-right: 5px;
    margin-bottom: 7.94px;
  }

  .block1phonenumber {
    position: absolute;
    width: 137px;
    height: 17px;
    margin-left: 90px;
    margin-top: 9px;
    margin-bottom: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 350;
    font-size: 10px;
    line-height: 19px;

    color: #ffffff;
  }

  .line {
    position: absolute;
    width: 20.31px;
    height: 0px;
    margin-left: 163px;
    margin-top: 13px;
    margin-bottom: 2.7px;

    border: 2px solid #ffffff;
    transform: rotate(91deg);
  }

  .block1whatsapp {
    position: absolute;

    margin-left: 179px;
    margin-top: 8px;
  }

  .block1whatsapptxt {
    position: absolute;
    width: 87px;
    height: 17px;
    left: 197px;
    margin-top: 8px;
    margin-bottom: 9px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    /* margin: 0; */

    color: #ffffff;
  }

  .block1emailimg {
    position: absolute;

    right: 135px;
    margin-top: 8px;
    margin-bottom: 7px;
  }

  .block1emailtxt {
    position: absolute;
    width: 164px;
    height: 22px;
    right: -17px;
    margin-top: 8px;
    margin-bottom: 7px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 19px;

    color: #ffffff;
  }
}


.block2 {
  /* position: absolute; */
  width: 100%;
  /* height: 80px; */
  /* left: 0px;
  top: 35px; */
  left: 0px;
  top: 0px;
  right: 0px;
  background: #ffffff;
  box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.25);
}

.block2img {
  /* position: absolute; */
  /* width: 209px;
  height: 50px;
  left: 40px;
  top: 15px; */
}

.block2company {
  /* position: absolute; */
  /* width: 86px;
  height: 21px;
  left: 484px;
  top: 31px; */

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #001c42;
}

.block2projects {
  /* position: absolute; */
  /* width: 86px;
  height: 21px;
  left: 590px;
  top: 67px; */

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #001c42;
}

.block2IPTV {
  /* position: absolute; */
  /* width: 86px;
  height: 21px;
  left: 680px;
  top: 67px; */

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #001c42;
}

.block2career {
  /* position: absolute;
  width: 86px;
  height: 21px;
  left: 760px;
  top: 67px; */

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #001c42;
}

.anchorStyles {
  background: white;
  color: black;
  font-style: none;
  text-decoration: none;
}

.anchorStyles2 {

  color: white;
  font-style: none;
  text-decoration: none;
}

.requestblock {}

.block2requestimg {
  /* position: absolute;
  right: 350px;
  top: 67px; */


}

.block2requesttxt {
  /* position: absolute;
  width: 121px;
  height: 19px;
  right: 220px;
  top: 65px; */
  margin-top: -20px;
  margin-right: 0px;
  padding-left: 25px;
  /* position: absolute; */
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #001c42;
}

.block2signinblock {
  /* position: absolute;

  height: 40px;
  right: 68px;
  top: 54px; */
  width: 104px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: #14264a;
  border-radius: 10px;
}

.block2vectorimg {
  /* position: absolute; */

}

.block2signIn {
  /* position: absolute;

  top: 10px;
  left: 40px; */


  font-style: none;
  text-decoration: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 19px;
  /* identical to box height */

  color: #ffffff;
}
</style>