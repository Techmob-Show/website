<template>
  <section class="checklist white">
    <h2>✅ Techmob Show Podcasting Checklist</h2>
    <p>
      Check off every point before starting to record each episode! You know
      why... 😅
    </p>
    <ul>
      <li v-for="item in checklistItems" :key="item">
        <input class="checkbox" type="checkbox" />{{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Checklist',
  data() {
    return {
      checklistItems: [
        'Check microphone input level in your audiotool (Audacity) 🎛️',
        'Start a test recording and listen to it 🔴🎙',
        'Check input level and adjust 🎚️',
        'Close all windows and doors 🪟',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
}
.checkbox {
  margin: 0 0.5rem 0 0;
}
</style>
