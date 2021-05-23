import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.supabaseUrl, process.env.supabaseKey)

export const state = () => ({
  episodes: [],
})

export const mutations = {
  setEpisodes(state, episodes) {
    if (!episodes) return
    state.episodes = episodes.filter(filterPublished).sort(sortEpisodeAndSeason)
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchEpisodes')
  },
  async fetchEpisodes({ commit }) {
    const { data: episodes, error } = await supabase
      .from('episodes')
      .select('*')
    if (error) throw new Error(`Episodes couldn't be loaded ${error}`)
    commit('setEpisodes', episodes)
  },
  async sendFeedback({ state }, { message, episodeId, email }) {
    const { error } = await supabase.from('feedback').insert(
      [
        {
          message,
          episode_id: episodeId === 0 ? null : episodeId,
          email,
        },
      ],
      { returning: 'minimal' }
    )
    return !error
  },
}

const sortEpisodeAndSeason = (a, b) => {
  const diffSeason = a.season - b.season
  if (diffSeason) return diffSeason
  return a.episode_in_season - b.episode_in_season
}

const filterPublished = (episode) => {
  if (!episode.publication_timestamp) return false
  return new Date() >= new Date(episode.publication_timestamp)
}
