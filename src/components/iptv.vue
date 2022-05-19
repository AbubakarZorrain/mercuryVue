<template>
    <div class="main">
        <div class="block1">
            <div class="row w-100 m-0">
                <div class="col-12 ">
                    <h1>IPTV Development</h1>
                </div>
            </div>
            <div class="row w-100 m-0">
                <div class="col-2 pr-5 m-5">
                    <img src="../assets/iptvblock1.png" alt="">
                </div>
                <div class="col-8 p-5">
                    Custom web development offers options for businesses who seek to provide a flexible, consistent experience for users across platforms. Leveraging new approaches to web development including progressive web apps, we bring front-end, back-end and architecture ability together to deliver on your business need and maximize delivery speed.
                </div>
            </div>
            <div class="row w-100 m-0">
                <div class="col-3">
                    Tools & Techniques:
                </div>
            </div>
            <div class="row w-100 m-0">
                <div class="block1box1">
                    <svg width="125" height="100" viewBox="0 0 125 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 87.5H24.8242C21.543 87.5 18.75 90.293 18.75 93.5742C18.75 96.8555 21.543 100 24.8242 100H99.8242C103.457 100 106.25 97.207 106.25 93.75C106.25 90.293 103.457 87.5 100 87.5ZM115.625 0H9.375C4.19922 0 0 4.19922 0 9.375V71.875C0 77.0508 4.19922 81.25 9.375 81.25H115.625C120.801 81.25 125 77.0508 125 71.875V9.375C125 4.19922 120.801 0 115.625 0ZM112.5 68.75H12.5V12.5H112.5V68.75Z" fill="#FF6D6B"/>
</svg>

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
    name: "iptvPage",
    data() {
        return {
            errors: [],

        };
    },
};

</script>

<style>
.block1 {
    width: 100%;
    margin: 0px;
    background: #3E5E7E;
    color: white;
    text-align: center;
}

.block1 h1 {
    color: #E29E4E;
    ;
}
.blockbox1{
    background: #EFF3F4;
border-radius: 4px;
}
</style>