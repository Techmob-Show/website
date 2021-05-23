<template>
  <section v-if="episodes" class="white">
    <h2>Alle Folgen</h2>
    <ul>
      <li v-for="episode in sortedEpisodes" :key="episode.id" class="episode">
        <div class="season-episode">
          S{{ episode.season }} / E{{ episode.episode_in_season }}
        </div>
        <div class="title-description">
          <div class="title" v-text="episode.title" />
          <div class="description" v-text="episode.description" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SectionEpisodes',
  props: {
    episodes: {
      type: Array,
      required: true,
    },
  },
  computed: {
    sortedEpisodes() {
      const episodesCopy = JSON.parse(JSON.stringify(this.episodes))
      return episodesCopy.sort((a, b) => {
        const diffSeason = a.season - b.season
        if (diffSeason) return diffSeason
        return a.episode_in_season - b.episode_in_season
      })
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  .episode {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: flex-start;
    align-items: flex-start;
    margin: 0 0 2rem 0;
    @media screen and (max-width: 44rem) {
      flex-direction: column;
    }
    .season-episode {
      margin: 0 1rem 0 0;
      font-size: 1.2rem;
      font-weight: bold;
      background: var(--color-gradient);
      color: var(--color-light);
      border-radius: var(--border-radius);
      padding: 0.5rem;
      flex: 1 0 6rem;
      text-align: center;
      @media screen and (max-width: 44rem) {
        flex: 1 0 auto;
        margin: 0 0 0.5rem 0;
        padding: 0.75rem;
      }
    }
    .title {
      font-size: 1.2rem;
      font-weight: bold;
      line-height: 1;
      margin: 0 0 0.5rem 0;
    }
  }
}
</style>
