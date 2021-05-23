<template>
  <div class="container">
    <section-cover />
    <section-episodes />
    <section-feedback />
    <section-about />
  </div>
</template>

<script>
import SectionCover from '~/components/SectionCover'
import SectionFeedback from '~/components/SectionFeedback'
import SectionEpisodes from '~/components/SectionEpisodes'
import SectionAbout from '~/components/SectionAbout'
export default {
  components: { SectionAbout, SectionEpisodes, SectionFeedback, SectionCover },
}
</script>

<style></style>
