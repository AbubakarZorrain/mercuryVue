<template>
<div class="">
    <div class="servicesblock1 m-0">
        <div class="firstb1 pb-5">
            <div class="row m-0 p-5">
                <div class="col p-5 block1heading1">
                    <div class="block1heading1 p-5">
                        <h1>A LEARNING AND HEALTHY WORK ENVIRONMENT</h1>
                    </div>
                </div>
            </div>
            <div class="firstb2">
                <div class="row m-2 ">
                    <div class="col blocks mr-2">
                        <div class="row blocksheading">
                            <div class="col">Positive Work Culture
                            </div>
                        </div>
                        <div class="row p-4">Our aim is to maintain a positive and perfect work-life balance so that
                            you
                            feel satisfied and happy while working with us while contributing your best to
                            productivity. There are ample opportunities to learn and grow professionally.
                            Mercurysols always motivates its employees to take initiatives and work in teams. The
                            policies intend to align personal interests with company objectives.</div>
                    </div>
                    <div class="col blocks mr-2">
                        <div class="row blocksheading">
                            <div class="col">Positive Work Culture
                            </div>
                        </div>
                        <div class="row p-4">Our aim is to maintain a positive and perfect work-life balance so that
                            you
                            feel satisfied and happy while working with us while contributing your best to
                            productivity. There are ample opportunities to learn and grow professionally.
                            Mercurysols always motivates its employees to take initiatives and work in teams. The
                            policies intend to align personal interests with company objectives.</div>
                    </div>
                    <div class="col blocks">
                        <div class="row blocksheading">
                            <div class="col">Positive Work Culture
                            </div>
                        </div>
                        <div class="row p-4">Our aim is to maintain a positive and perfect work-life balance so that
                            you
                            feel satisfied and happy while working with us while contributing your best to
                            productivity. There are ample opportunities to learn and grow professionally.
                            Mercurysols always motivates its employees to take initiatives and work in teams. The
                            policies intend to align personal interests with company objectives.</div>
                    </div>
                    <div class="servicesblock2 mt-1">
                        <div class="row p-5">
                            <div class="col pt-5 block2heading">LOOKING FOR TALENTED & SKILLED INDIVIDUALS</div>
                        </div>
                        <div class="row">
                            <div class="col block2details">
                                Mercurysols provides you with a chance to work on the latest technology and
                                experience gradual
                                professional growth.
                            </div>
                        </div>
                    </div>
                    <div class="m-0">
                        <div class="postsection m-3 " v-for="job in result" :value="job.value" v-bind:key="job.id">
                            <div class="row pl-5">
                                Title: {{ job.title }}
                            </div>
                            <div class="row pl-5" v-for="experience in job.experience" :key="experience.name">
                                Experience Required:{{ experience.name }}</div>
                            <div class="row pl-5">
                                <div class="col">
                                    <router-link to="">
                                        <button class="buttonstyle textalign">
                                            <div class="">
                                                Job Description
                                            </div>
                                        </button>
                                    </router-link>
                                </div>
                            </div>
                            <div class="row pl-5">
                                <div class="col">
                                    <li v-for="technology in job.technology" :key="technology.name">
                                        {{ technology.name }}</li>

                                </div>
                            </div>
                            <div class="row m-5 jobsection">

                                <div class="col-2 skill p-1 justify-content-sm-end justify-content-sm-end">Key Skills</div>
                                <div class="col-10 py-2 d-flex ">
                                    <div class="mx-1 d-flex align-items-center justify-content-center py-2 px-4 skilldetail" v-for="technology in job.technology" :key="technology.name">
                                        {{ technology.name }}</div>

                                </div>
                            </div>

                            <div class="row m-5 jobsection">
                                <div class="col-lg-2 col-sm-12 skill p-1 d-flex justify-content-sm-end justify-content-lg-end">Location:</div>
                                <div class="col-lg-10 col-sm-12 py-2 d-flex ">
                                    <div class="mx-1 d-flex align-items-center justify-content-center py-2 px-4 skilldetail">
                                        {{ job.location }}</div>

                                </div>
                            </div>
                            <div class="row pl-5">
                                <div class="col float-end ml-auto">
                                    <router-link to="">
                                        <button class="buttonstyle textalign">
                                            <div class="">
                                                Apply Now
                                            </div>
                                        </button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    name: "careerPage",
    data() {
        return {
            errors: [],
            result: "",
            responseAvailable: false,
        };
    },
    mounted: function () {
        this.getjobs();
    },
    methods: {
        getjobs() {
            this.axios.get('http://127.0.0.1:8000/JobsAPI/')
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

<style>
.servicesblock1 {
    position: relative;
}

.firstb1 {
    background: #3E5E7E;
}

.block1heading1 {
    text-align: center;
    color: white;
    margin: 0px;

}

.firstb2 {
    position: absolute;
    top: 299px;
}

.blocks {
    background: #F1F1F1;
}

.blocksheading {

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    text-align: center;

    color: #E29E4E;
}

.servicesblock2 {
    background: #DDEBFF;
    position: relative;
    text-align: center;
}

.block2heading {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    text-align: center;

    color: #02285B;
}

.block2details {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;
    text-align: center;

    color: #323232;
}

.postsection {
    background: #FFFFFF;
    border: 1px solid #928F8F;
    border-radius: 5px;
}

.buttonstyle {
    background: #FF6D6B;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 4px;
}

.textalign {
    text-align: center;
    color: white;
}

.jobsection {
    background: #E5E5E5;
}

.skill {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;

    color: #FF6D6B;
}

.skilldetail {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;

    color: #323232;
}

.skilldetail {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
    background: #928F8F;
    border-radius: 5px;
}

a {
    color: white;
    font-style: none;
    text-decoration: none;
}
</style>
