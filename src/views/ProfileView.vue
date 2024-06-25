<script setup>
import {
  onMounted,
  reactive,
  ref,
  inject,
  provide,
  getCurrentInstance,
  watch,
} from "vue";
onMounted(() => {});
defineEmits([""]);
defineProps({
  msg: {
    type: String,
    required: false,
  },
});
// Variable
const instance = getCurrentInstance();
// Functions
defineExpose({});
</script>

<template>
  <div class="profile">
    <ul class="time-line">
      <li class="li" style="--accent-color: #01204e">
        <div class="date">2022 - Present</div>
        <div class="title">
          <h3>Web developer</h3>
          <small class="text-xs">AIML Technologies Co.,Ltd</small>
        </div>
        <div class="descr">
          <ul class="ml-3">
            <li>
              Back-end
              <ul class="ml-3">
                <li>Maintain employment module.</li>
                <li>Build APIs, APIs doc (OpenAPI), AWS, Dynamodb.</li>
                <li>Deploy project.</li>
              </ul>
            </li>
            <li>
              Probation 3 months
              <ul class="ml-3">
                <li>Full-stack on work schedule module.</li>
                <li>
                  Learnt basic programming and work with line-manager, product
                  team, cow-worker.
                </li>
                <li>Company's rule.</li>
                <li>Agile employee.</li>
              </ul>
            </li>
          </ul>
        </div>
      </li>
      <li class="li" style="--accent-color: #fbca3e">
        <div class="date">2019 - 2021</div>
        <div class="title">
          <h3>Associate Degree's</h3>
          <small class="text-xs">Passerelles Numeriques Cambodia (PNC)</small>
        </div>
        <div class="descr">
          <ul class="ml-3">
            <li>
              Programming languages
              <ul class="ml-3">
                <li>HTML, CSS, Bootstrap, and Vuetify.</li>
                <li>Vue.js, Express.js, and Node.js.</li>
                <li>JavaScript, Python, Laravel, PHP.</li>
              </ul>
            </li>
            <li>
              School project
              <ul class="ml-3">
                <li>Python: sokoban.</li>
                <li>Build static website HTML CSS.</li>
                <li>Chart board.</li>
              </ul>
            </li>
            <li>Online company visit partner of PNC.</li>
            <li>
              Professional life, problem solving, communication, and leadership.
            </li>
          </ul>
        </div>
      </li>
      <li class="li" style="--accent-color: #e24a68">
        <div class="date">2016 - 2019</div>
        <div class="title">
          <h3>Hight School Certificate</h3>
          <small class="text-xs">Chom Raoen Vichea Hight School (CRV)</small>
        </div>
        <div class="descr">
          <ul class="ml-3">
            <li>Leader grade.</li>
            <li>Join event community charity blood donation few times.</li>
            <li>Khmer Outstanding Student Exam.</li>
            <li>Sharing and teaching to children in the primary school.</li>
          </ul>
        </div>
      </li>
      <li class="li" style="--accent-color: #1b5f8c">
        <div class="date">2013 - 2016</div>
        <div class="title">
          <h3>Secondary School</h3>
          <small class="text-xs">Serey Odum Hav Trobaek</small>
        </div>
        <div class="descr">
          <ul class="ml-3">
            <li>Become commune youth.</li>
            <li>Join event planning development community.</li>
            <li>
              Number 1 of Khmer outstanding student exam of Svay Antor district.
            </li>
          </ul>
        </div>
      </li>
      <li class="li" style="--accent-color: #4cadad">
        <div class="date">2007 - 2013</div>
        <div class="title">
          <h3>Primary School</h3>
          <small class="text-xs">R-ka Meas Samki Meanchey</small>
        </div>
        <div class="descr">
          <p></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  --color: rgba(30, 30, 30);
  --bgColor: rgba(245, 245, 245);
  min-height: 100vh;
  display: grid;
  align-content: center;
  gap: 2rem;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  color: var(--color);
  background: var(--bgColor);
}
.time-line {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  /* width: min(90rem, 90%); */
  margin-inline: auto;
}

/* line */
.time-line::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: rgb(225, 225, 225);
  border-radius: calc(var(--line-w) / 2);
}

/* columns*/

/* row gaps */
.time-line .li:not(:last-child) {
  margin-bottom: var(--row-gap);
}

/* card */
.time-line .li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}

/* date */
.time-line .li .date {
  --dateH: 3rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);

  text-align: center;
  background-color: var(--accent-color);

  color: white;
  font-size: 1.25rem;
  font-weight: 700;

  display: grid;
  place-content: center;
  position: relative;

  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
}

/* date flap */
.time-line .li .date::before {
  content: "";
  width: var(--inlineP);
  aspect-ratio: 1;
  background: var(--accent-color);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
  position: absolute;
  top: 100%;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  right: 0;
}

/* circle */
.time-line .li .date::after {
  content: "";
  position: absolute;
  width: 1rem;
  aspect-ratio: 1;
  background: var(--bgColor);
  border: 0.8rem solid var(--accent-color);
  border-radius: 50%;
  top: 50%;

  transform: translate(50%, -50%);
  right: calc(100% + var(--col-gap) + var(--line-w) / 2);
}

/* title descr */
.time-line .li .title,
.time-line .li .descr {
  background: var(--bgColor);
  position: relative;
  padding-inline: 1.5rem;
}
.time-line .li .title {
  overflow: hidden;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;
  font-weight: 500;
}
.time-line .li .descr {
  padding-block-end: 1.5rem;
  font-weight: 300;
}

/* shadows */
.time-line .li .title::before,
.time-line .li .descr::before {
  content: "";
  position: absolute;
  /* background: rgba(0, 0, 0, 0.5); */
  left: 50%;
  width: 100%;
  background: #000;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transform: translate(-50%, 50%);
}
.time-line .li .title::before {
  bottom: calc(100% + 0.125rem);
}

.time-line .li .descr::before {
  z-index: -1;
  bottom: 0.25rem;
}

@media (min-width: 40rem) {
  .time-line {
    grid-template-columns: 1fr var(--line-w) 1fr;
  }
  .time-line::before {
    grid-column: 2;
  }
  .time-line .li:nth-child(odd) {
    grid-column: 1;
  }
  .time-line .li:nth-child(even) {
    grid-column: 3;
  }

  /* start second card */
  .time-line .li:nth-child(2) {
    grid-row: 2/4;
  }

  .time-line .li:nth-child(odd) .date::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    left: 0;
  }

  .time-line .li:nth-child(odd) .date::after {
    transform: translate(-50%, -50%);
    left: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }
  .time-line .li:nth-child(odd) .date {
    border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
  }
}
</style>
