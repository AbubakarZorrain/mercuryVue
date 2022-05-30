<template>
    <div class="">
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
        <div class="" v-if="responseAvailable == false">
            <div class="row">
                <div class="col">
                    Loading the Projects
                </div>
            </div>
        </div>
        <div class="" v-if="responseAvailable == true">
            <div class="row m-0 textalign">
                <div class="col-6 projectblock2" v-for="project in result" :value="project.value" v-bind:key="project.id">
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
                            <div class="projectimg"  v-for="image in project.images" :key="image.image">
                                <img v-bind:src="require('../assets'+`${image.image}`)" alt="">
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


a {
    color: white;
    font-style: none;
    text-decoration: none;
}
</style>