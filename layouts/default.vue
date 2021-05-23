<template>
  <div class="container">
    <Nuxt />
  </div>
</template>

<style lang="scss">
:root {
  --color-primary: #ff84b5;
  --color-primary-dark: #47222c;
  --color-dark: #33181f;
  --color-light: #ffffff;
  --color-gradient: radial-gradient(
    129.55% 129.55% at 6.6% 2.7%,
    rgba(255, 151, 232, 1) 0%,
    rgba(255, 108, 117, 1) 100%
  );
  --transition: all 0.15s ease-in-out;
  --border-radius: 0.25rem;
}
html {
  font-family: Open Sans, Helvetica Neue, Arial, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  color: var(--color-dark);
  line-height: 1.75;
  font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: radial-gradient(
    129.55% 129.55% at 6.6% 2.7%,
    rgba(255, 151, 232, 0.3) 0%,
    rgba(255, 108, 117, 0.3) 100%
  );
}

.container {
  width: 40rem;
  max-width: 100%;
  margin: 4rem auto;
  @media screen and (max-width: 44rem) {
    width: calc(100% - (2 * 1rem));
    margin: 2rem 1rem;
  }
}

section {
  margin: 0 0 4rem 0;
  &.white {
    background: var(--color-light);
    padding: 4rem;
    border-radius: var(--border-radius);
    @media screen and (max-width: 44rem) {
      padding: 2rem;
    }
  }
  &:last-of-type {
    margin: 0;
  }
  > h2 {
    margin: 0 0 2rem 0;
  }
}
</style>
