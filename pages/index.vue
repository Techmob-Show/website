<template>
  <div class="container">
    <section-cover />
    <section-episodes :episodes="episodes" />
    <section-feedback :episodes="episodes" />
    <section-about />
  </div>
</template>

<script>
import { createClient } from '@supabase/supabase-js'
import SectionCover from '~/components/SectionCover'
import SectionFeedback from '~/components/SectionFeedback'
import SectionEpisodes from '~/components/SectionEpisodes'
import SectionAbout from '~/components/SectionAbout'
// TODO
const supabase = createClient(
  '',
  '')
export default {
  components: { SectionAbout, SectionEpisodes, SectionFeedback, SectionCover },
  async asyncData() {
    const { data, error } = await supabase.from('episodes').select('*')
    const publishedEpisodes = data.filter((episode) => {
      if (!episode.publication_timestamp) return false
      return new Date() >= new Date(episode.publication_timestamp)
    })
    return {
      episodes: error ? null : publishedEpisodes,
    }
  },
}
</script>

<style></style>
