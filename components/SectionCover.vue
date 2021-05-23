<template>
  <section>
    <img class="cover" src="/img/cover.svg" alt="Techmob Show Cover" />
    <div class="distribution">
      <a href="https://open.spotify.com/show/4t9bjIBUB0YRipDQjORNZQ">
        <img src="/img/spotify.svg" alt="Techmob Show on Spotify" />
      </a>
      <a
        href="https://podcasts.apple.com/de/podcast/techmob-show/id1561550306?l=en"
      >
        <img src="/img/itunes.svg" alt="Techmob Show on iTunes" />
      </a>
      <a
        href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81MzYwZTExMC9wb2RjYXN0L3Jzcw"
      >
        <img
          src="/img/google_podcast.svg"
          alt="Techmob Show on Google Podcast"
        />
      </a>
    </div>
    <div class="more">
      <a href="https://anchor.fm/techmobshow">Und viele mehr...</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cover',
}
</script>

<style lang="scss" scoped>
.cover {
  width: 80%;
  margin: 0 10% 1rem 10%;
  max-width: 100%;
  border-radius: var(--border-radius);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 44rem) {
    width: 100%;
    margin: 0 0 1rem 0;
  }
}
.distribution {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: flex-start;
  @media screen and (max-width: 40rem) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  a {
    transition: var(--transition);
    margin: 0 1rem 0 0;
    @media screen and (max-width: 40rem) {
      margin: 0 0 0.5rem 0;
    }
    &:last-of-type {
      margin: 0;
    }
    &.disabled {
      opacity: 0.4;
      &:hover {
        transform: scale(1);
        cursor: default;
      }
    }
    &:hover {
      transform: scale(1.1);
    }
  }
}
.more {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: flex-start;
  a {
    text-decoration: none;
    color: var(--color-dark);
    border-bottom: 1px solid transparent;
    transition: var(--transition);
    &:hover {
      border-color: var(--color-dark);
    }
  }
}
</style>
