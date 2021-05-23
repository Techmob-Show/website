<template>
  <section class="checklist white">
    <h2>✅ Techmob Show Checklist</h2>
    <p>
      Bitte vor jeder Aufnahme alle Punkte abhaken! Ihr wisst warum... 😅
    </p>
    <ul>
      <li>
        <input class="checkbox" type="checkbox" />Input Microphone in Audacity
        checken
      </li>
      <li>
        <input class="checkbox" type="checkbox" />Probeaufnahme machen & anhören
      </li>
      <li>
        <input class="checkbox" type="checkbox" />Pegel überprüfen & einstellen
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Checklist'
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
