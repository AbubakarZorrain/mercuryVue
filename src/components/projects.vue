<template>
    <div class="">
        <div class="" v-if="responseAvailable == false">
            <div class="row">
                <div class="col">
                    Loading the Projects
                </div>
            </div>
        </div>
        <div class="projectblock1">
            <div class="row m-5">
                <div class="col">
                    <h1>PROJECTS</h1>
                </div>
            </div>

            <div class="row m-0">
                <div class="col-1 m-5 ">
                    <router-link to="/" class="anchorStyles2">
                        <div class="rectangularblock">
                            All
                        </div>
                    </router-link>
                </div>
                <div class="col-1 m-5">
                    <router-link to="/" class="anchorStyles2">
                        <div class="rectangularblock">
                            Web
                        </div>
                    </router-link>
                </div>
                <div class="col-1 m-5">
                    <router-link to="/" class="anchorStyles2">
                        <div class="rectangularblock">
                            Flutter
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="" v-if="responseAvailable == true">
            <div class="row m-0 textalign">
                <div class="col-6 projectblock2" v-for="project in result" :value="project.value" :key="project.value">
                    <div class="row pt-5 pb-3">
                        <div class="col heading1 mx-auto">
                            {{ project.projecttype }}
                        </div>
                    </div>
                    <div class="row pb-3">
                        <div class="col heading2">
                            <h1>{{ project.title }}</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <router-link to="">
                                <button class="buttonstyle textalign">
                                    <div class="">
                                        Learn More
                                    </div>
                                </button>
                            </router-link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 projectimgblock">
                            <div class="projectimg">
                                <img :src="`${project.images}`" alt="">
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-6" style="background:#7259D4;">
                    <div class="row pt-5 pb-3">
                        <div class="heading1">
                            Category
                        </div>
                    </div>
                    <div class="row pb-3">
                        <div class="heading2">
                            <h1>Project Name</h1>
                        </div>
                    </div>
                    <div class="row">
                        <router-link to="">
                            <button class="buttonstyle textalign">
                                <div class="">
                                    Learn More
                                </div>
                            </button>
                        </router-link>
                    </div>
                    <div class="row">
                        <div class="col-6 m-2 projectimgblock">
                            <div class="projectimg">
                                <img src="../assets/projectpage.png" alt="">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="block2 mb-4">
            <div class="row mx-auto mt-4">
                <div class="block2heading col-12">Get In Touch</div>
                <form>
                    <div class="row ">
                        <div class="col-6">
                            <div class="block2formh1">First Name</div>
                            <input type="text" class="block2formin1" required>
                        </div>
                        <div class="col-6">
                            <div class="block2formh2">last Name</div>
                            <input type="text" class="block2formin2" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="block2formh3">Email</div>
                            <input type="email" class="block2formin3" required>
                        </div>
                        <div class="col-6">
                            <div class="block2formh4">Phone Number</div>
                            <input type="text" class="block2formin4" required>
                        </div>
                    </div>
                    <div class="row mx-auto">
                        <div class="col-6">
                            <div class="block2formh5">Message</div>
                            <textarea type="text" class="block2formin5" required></textarea>
                        </div>
                    </div>
                    <div class="block2submitbox">
                        <button class="block2submitbtn">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
        <footer class="navbar  navbar-expand-lg text-center block9">
            <div class="row">
                <div class="col-4 ">
                    <div class="mercuryContainerfooter">
                        <div class="block9logoblock">
                            <img src="../assets/block9logo.png" alt="" class="block9logo col-5" />
                        </div>
                        <div class="d-flex">
                            <div class="">
                                <a href="https://www.linkedin.com/company/mercuryofficials/" target="_blank">
                                    <div class="block9circle1 col-1">
                                        <div class="block9lntxt">in</div>
                                    </div>
                                </a>
                            </div>
                            <div class="">
                                <a href="https://www.facebook.com/mercuryofficials/" target="_blank">
                                    <div class="block9circle2 col-1">
                                        <div class="block9lntxt">f</div>
                                    </div>
                                </a>
                            </div>
                            <div class="">
                                <a href="https://www.instagram.com/mercuryofficials/" target="_blank">
                                    <div class="block9circle3 col-1">
                                        <img src="../assets/insta.png" alt="" class="block9icon" />
                                    </div>
                                </a>
                            </div>
                            <div class="">
                                <a href="https://www.linkedin.com/company/mercuryofficials/" target="_blank">
                                    <div class="block9circle4">
                                        <img src="../assets/twitter.png" alt="" class="block9icon" />
                                    </div>
                                </a>
                            </div>

                        </div>
                        <div class="block9cc">MercurySols © 2022</div>
                    </div>
                </div>
                <div class="col-4 text-white">
                    <div class="mercuryContainerfooter">
                        <div class="">
                            <h1 class="block9contact">Contact Us</h1>
                        </div>
                        <div class="row">
                            <img src="../assets/email.png" alt="" class="block9emailimg1" />
                            <a href="mailto:hr@mercurysols.org">hr@mercurysols.org</a>
                        </div>
                        <div class="row">
                            <img src="../assets/email.png" alt="" class="block9emailimg2" />
                            <a href="mailto:info@mercurysols.org">info@mercurysols.org</a>
                        </div>
                        <div class="row">
                            <img src="../assets/phone.png" alt="" class="block9phimg1" />
                            <a href="tel:+92 300 6777686">+92 300 6777686</a>
                        </div>
                        <div class="row">
                            <img src="../assets/phone2.png" alt="" class="block9phimg2" />

                            <a href="tel:+92 68 5905990">+92 68 5905990</a>

                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="mercuryContainerfooter">
                        <div class="">
                            <img src="../assets/location.png" alt="" class="block9location" />
                        </div>
                        <div class="">
                            <div class="block9locationtxt">
                                Mercury Sols, Abbasia Town Main Road, Rahim Yar Khan, Punjab 64200,
                                Pakistan
                            </div>
                            <router-link to="/">
                                <div class="block9button">
                                    <div class="block9buttontxt">Request A Quote</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
/* eslint-disable */
// eslint-disable-next-line
// import Vue from 'vue'   // in Vue 2
import Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
    name: "projectPage",
    data() {
        return {
            errors: [],
            result: "",
            responseAvailable: false,

        };
    },
    mounted: function () {
        this.getProjects();
    },
    methods: {
        getProjects() {
            this.axios.get('http://127.0.0.1:8000/ProjectAPI/')
                .then((response) => {
                    if (response.statusText = "OK") {
                        console.log(response.data)
                        this.responseAvailable = true
                        this.result = response.data;
                        // return response.json()
                    } else {
                        console.log("Server Returned " + response.status + ":" + response.statusText);
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
};

</script>
<style scoped>
/* .anchorStyles2 {
    color: white;
    font-style: none;
    text-decoration: none;
  } */
.projectblock1 {
    background: #DDEBFF;
    text-align: center;
    padding-top: 10px;
    color: #14264A;
}

.block1 h1 {
    color: #14264A;

}

.rectangularblock {
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 50px;
    color: black;
}

.projectblock2 {
    background: #FF6D6B;
}

.textalign {
    text-align: center;
    color: white;
}

.projectimgblock {}

.projectimg {
    max-width: 100%;
}

.buttonstyle {
    background: #FF6D6B;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 4px;
}

.block2 {
    /* position: absolute;
width: 100%;
height: 799px;
left: 0px;
top: 1100px; */
    background: white;
}

.block2heading {
    /* position: absolute;
left: 500px;
top: 0px; */

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 54px;
    line-height: 63px;
    text-align: center;

    color: #000000;
}

.block2formh1 {
    /* position: absolute;
left:157px;

top: 120px; */


    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
}

.block2formin1 {
    /* position: absolute; */
    /* left:157px; */
    /* width: 30%; */
    /* top: 150px; */
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    background-color: #eee;
    color: #02285B;
    font-weight: 400;
    font-size: 25px;
}

.block2formh2 {
    /* position: absolute; */
    /* left: 857px;

  top: 120px; */


    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
}

.block2formin2 {
    /* position: absolute; */
    /* left: 857px;
  width: 30%;
  top: 150px; */
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    background-color: #eee;
    color: #02285B;
    font-weight: 400;
    font-size: 25px;
}

.block2formh3 {
    /* position: absolute; */
    /* left: 157px;

  top: 300px; */


    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
}

.block2formin3 {
    /* position: absolute; */
    /* left: 157px;
  width: 30%;
  top: 330px; */
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    background-color: #eee;
    color: #02285B;
    font-weight: 400;
    font-size: 25px;
}

.block2formh4 {
    /* position: absolute; */
    /* left: 857px;

  top: 300px; */


    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
}

.block2formin4 {
    /* position: absolute; */
    /* left: 857px;
  width: 30%;
  top: 330px; */
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    background-color: #eee;
    color: #02285B;
    font-weight: 400;
    font-size: 25px;
}

.block2formh5 {
    /* position: absolute; */
    /* left: 157px;

  top: 480px; */


    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
}

.block2formin5 {
    /* position: absolute; */
    /* left: 157px;
  width: 80%;
  height: 10%;
  top: 510px; */
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    background-color: #eee;
    color: #02285B;
    font-weight: 400;
    font-size: 25px;

}

.block2submitbox {
    /* position: absolute; */
    /* width: 418px;
  height: 54px;
  left: 500px;
  top: 700px; */

    background: #3E5E7E;
    border-radius: 5px;
}

.block2submitbtn {
    /* position: absolute; */
    /* width: 403px;
  height: 38px;
  left: 6px;
  top: 8px; */

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    background: #3E5E7E;
    color: #FFFFFF;
}

.block9 {
    width: 100%;
    /* height: 419px; */
    /* left: -2px; */
    /* top: 4665px; */
    margin: 0;
    background: #02285b;
}

.block9logoblock {
    /* width: 500px; */

}

.block9logo {
    width: 100%;
    /* height: 76px;
  left: 147px;
  top: 77px; */
}

.block9circle1 {
    /* width: 55px; */
    /* height: 55px; */
    /* left: 156px; */
    /* top: 223px; */
    margin-left: 10px;
    border-radius: 50%;
    background: #3e5e7e;
}

.block9lntxt {
    /* left: 15.36%;
  right: 15.71%;
  top: 15.27%;
  bottom: 15.27%; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 38px;
    text-align: center;
    color: white;
}

.block9circle2 {
    /* width: 55px;
  height: 55px;
  left: 231px;
  top: 223px; */
    border-radius: 50%;
    background: #3e5e7e;
}

.block9circle3 {
    /* width: 55px;
  height: 55px;
  left: 306px;
  top: 223px; */
    border-radius: 50%;
    background: #3e5e7e;
}

.block9circle4 {
    /* width: 55px;
  height: 55px;
  left: 396px;
  top: 223px; */
    border-radius: 50%;
    background: #3e5e7e;
}

.block9icon {
    /* left: 28.93%;
  right: 25.14%;
  top: 30.27%;
  bottom: 27.27%; */
}

.block9cc {
    /* width: 299px;
  height: 29px;
  left: 147px;
  top: 307px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
}

.block9contact {
    /* width: 200px;
  height: 38px;
  left: 630px;
  top: 79px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
    text-align: center;

    color: #ffffff;
}

.block9emailimgblock {
    width: 50px;
}

.block9emailimg1 {
    /* left: 637px;
  top: 176px; */
    width: 50px;
}

.block9email1 {
    /* width: 214px;
  height: 30px;
  left: 673px;
  top: 172px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #ffffff;
}

.block9emailimg2 {
    /* left: 637px;
  top: 226px; */
    width: 50px;
}

.block9email2 {
    /* width: 214px;
  height: 30px;
  left: 673px;
  top: 222px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #ffffff;
}

.block9phimg1 {
    /* left: 637px;
  top: 271px;
   */
    width: 50px;
}

.block9ph1 {
    /* width: 214px;
  height: 30px;
  left: 673px;
  top: 272px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #ffffff;
}

.block9phimg2 {
    /* left: 637px;
  top: 316px; */
    width: 50px;
}

.block9ph2 {
    /* width: 214px;
  height: 30px;
  left: 673px;
  top: 316px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #ffffff;
}

.block9location {
    /* left: 1025px;

  top: 88px; */
}

.block9locationtxt {
    /* left: 1055px;
  right: 85px;
  top: 144px;
  bottom: 208.25px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
}

.block9button {
    /* left: 1055px;
  right: 120px;
  top: 320px;
  bottom: 90px;
  width: 258px;
  height: 54px; */

    background: #e29e4e;
    border-radius: 5px;
}

.block9buttontxt {
    /* width: 300px;
  height: 45px;
  left: -25px;
  top: 8px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    text-align: center;

    color: #ffffff;
}

a {
    color: white;
    font-style: none;
    text-decoration: none;
}
</style>