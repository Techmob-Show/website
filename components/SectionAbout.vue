<template>
  <section class="white">
    <h2>Über uns</h2>
    <ul class="about">
      <li v-for="(member, index) in members" :key="index">
        <img :src="member.img" :alt="member.name" />
        <div class="content">
          <div class="title-row">
            <h3 v-text="member.name" />
            <ul class="contact">
              <li>
                <a :href="member.linkedin">
                  <img src="/img/social/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a :href="member.mailto">
                  <img src="/img/social/mail.svg" alt="E-Mail" />
                </a>
              </li>
            </ul>
          </div>
          <ul class="interests">
            <li
              v-for="interest in member.interests"
              :key="interest"
              v-text="interest"
            />
          </ul>
          <ul class="technologies">
            <li
              v-for="technologie in member.technologies"
              :key="technologie.title"
            >
              <img
                :src="technologie.path"
                :alt="technologie.title"
                :title="technologie.title"
              />
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SectionAbout',
  data() {
    return {
      members: [
        {
          name: 'Henry Stoll',
          img: '/img/about/henry.jpg',
          linkedin: 'https://www.linkedin.com/in/henry-stoll/',
          mailto: 'mailto:henry@techmob.show',
          interests: ['Data Science', 'Design Thinking', 'Klavier'],
          technologies: [
            {
              title: 'Python',
              path: '/img/technologies/python.svg',
            },
            {
              title: 'Vue.js',
              path: '/img/technologies/vue.svg',
            },
            {
              title: 'flutter',
              path: '/img/technologies/flutter.svg',
            },
            {
              title: 'React.js',
              path: '/img/technologies/react.svg',
            },
          ],
        },
        {
          name: 'Jakob Möller',
          img: '/img/about/jakob.jpg',
          linkedin: 'https://www.linkedin.com/in/jakob-m%C3%B6ller/',
          mailto: 'mailto:jakob@techmob.show',
          interests: ['Cloud Architecture', 'Musikproduktion', 'Tischtennis'],
          technologies: [
            {
              title: 'Spring',
              path: '/img/technologies/spring.svg',
            },
            {
              title: 'Kubernetes',
              path: '/img/technologies/kubernetes.svg',
            },
            {
              title: 'Java',
              path: '/img/technologies/java.svg',
            },
          ],
        },
        {
          name: 'Luka Harambasic',
          img: '/img/about/luka.jpg',
          linkedin: 'https://www.linkedin.com/in/harambasic',
          mailto: 'mailto:luka@techmob.show',
          interests: ['Web Development', 'New Work aka Tools', 'Handball'],
          technologies: [
            {
              title: 'JavaScript',
              path: '/img/technologies/js.svg',
            },
            {
              title: 'Vue.js',
              path: '/img/technologies/vue.svg',
            },
            {
              title: 'Nuxt.js',
              path: '/img/technologies/nuxt.svg',
            },
            {
              title: 'CSS',
              path: '/img/technologies/css.svg',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  list-style: none;
}
.about {
  > li {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    margin: 0 0 2rem 0;
    @media screen and (max-width: 40rem) {
      flex-direction: column;
      align-items: center;
    }
    > img {
      flex: 0 1 10rem;
      border-radius: var(--border-radius);
      width: 10rem;
      margin: 0 2rem 0 0;
      @media screen and (max-width: 40rem) {
        margin: 0 0 1rem 0;
      }
    }
    .content {
      flex: 1 1 auto;
    }
  }
}
.title-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
  margin: 0 0 0.5rem 0;
  @media screen and (max-width: 40rem) {
    flex-wrap: wrap;
    justify-content: center;
  }
  h3 {
    line-height: 1;
  }
  .contact {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    > li {
      font-size: 1.2rem;
      margin: 0 0 0 0.5rem;
      text-align: center;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;
      a {
        border: none;
        display: inline;
        transition: var(--transition);
        &:hover {
          border: none;
          transform: scale(1.2);
        }
      }
      img {
        height: 1rem;
        width: 1rem;
        transition: var(--transition);
      }
    }
  }
}
.interests {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  margin: 0 0 0.5rem 0;
  @media screen and (max-width: 40rem) {
    justify-content: center;
  }
  > li {
    margin: 0 0.25rem 0 0;
    &:after {
      content: ',';
    }
    &:last-of-type {
      margin: 0;
      &:after {
        content: '';
      }
    }
  }
}
.technologies {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 40rem) {
    justify-content: center;
  }
  > li {
    margin: 0 0.75rem 0 0;
    &:last-of-type {
      margin: 0;
    }
    img {
      height: 2rem;
    }
  }
}
</style>
