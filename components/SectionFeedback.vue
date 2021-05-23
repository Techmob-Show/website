<template>
  <section class="feedback white">
    <h2>Teile uns dein Feedback mit!</h2>
    <div v-if="message" class="message" v-text="message"></div>
    <form>
      <label for="episode">
        <span class="label">Auf welche Folge beziehst du dich?*</span>
        <select id="episode" v-model="feedback.episodeId" required>
          <option value="0" v-text="'Allgemein'" />
          <option
            v-for="episode in episodes"
            :key="episode.key"
            :value="episode.id"
            v-text="episode.title"
          />
        </select>
      </label>
      <label for="message">
        <span class="label">Was willst du uns mitteilen?*</span>
        <textarea
          id="message"
          v-model.trim="feedback.message"
          type="text"
          required
          placeholder="Dein Feedback!"
        />
      </label>
      <label for="email">
        <span class="label">Dürfen wir dir antworten?</span>
        <input
          id="email"
          v-model="feedback.email"
          type="email"
          placeholder="Deine E-Mail (aber nur wenn du willst)"
        />
      </label>
      <label for="captcha">
        <span class="label">
          Wie ist der Vorname von <b>{{ test.lastname }}</b
          >?*
        </span>
        <input
          id="captcha"
          v-model="captcha"
          type="text"
          required
          placeholder="Mustermann"
        />
      </label>
      <input
        type="submit"
        value="Feedback senden"
        :disabled="isDisabled"
        @click.prevent="onFeedback()"
      />
    </form>
  </section>
</template>

<script>
import { createClient } from '@supabase/supabase-js'
// TODO get from env
const supabase = createClient(
  '',
  '')
export default {
  name: 'SectionFeedback',
  props: {
    episodes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      captcha: '',
      test: null,
      captchaOptions: [
        {
          lastname: 'Stoll',
          firstname: 'Henry'
        },
        {
          lastname: 'Möller',
          firstname: 'Jakob'
        },
        {
          lastname: 'Harambasic',
          firstname: 'Luka'
        }
      ],
      message: '',
      feedback: {
        message: '',
        email: '',
        episodeId: 0
      }
    }
  },
  computed: {
    isDisabled() {
      if (this.feedback.message.length <= 3) return true
      if (!this.test) return true
      return (
        this.test.firstname.toLocaleLowerCase() !==
        this.captcha.toLocaleLowerCase()
      )
    }
  },
  created() {
    const randomNumber = Math.floor(Math.random() * 3)
    this.test = this.captchaOptions[randomNumber]
  },
  methods: {
    async onFeedback() {
      const { error } = await supabase.from('feedback').insert(
        [
          {
            message: this.feedback.message,
            episode_id:
              this.feedback.episodeId === 0 ? null : this.feedback.episodeId,
            email: this.feedback.email
          }
        ],
        { returning: 'minimal' }
      )
      this.message = error
        ? 'Leider ist etwas schief gelaufen, versuche bis bitte gleich nochmal'
        : 'Dankeschön! :)'
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  margin: 0 0 1rem 0;
  background: var(--color-gradient);
  padding: 0.75rem;
  color: var(--color-light);
  border-radius: var(--border-radius);
}
form {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
  label {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: stretch;
    margin: 0 0 2rem 0;
    span {
      margin: 0 0 0.25rem 0;
    }
  }
  input,
  textarea,
  select {
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: 1.2rem;
    border: 2px solid rgba(51, 24, 31, 0.6);
    font-family: inherit;
    transition: var(--transition);
    outline: none;
    background: var(--color-light);
    &:hover,
    &:focus {
      border-color: var(--color-gradient);
      &::placeholder {
        color: rgba(51, 24, 31, 0.6); //--color-dark
      }
    }
    &::placeholder {
      color: rgba(51, 24, 31, 0.3); //--color-primary-dark
    }
  }
  input[type='submit'] {
    border: none;
    background: var(--color-gradient);
    color: var(--color-light);
    white-space: normal;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
    &:disabled {
      color: var(--color-light);
      opacity: 0.5;
      &:hover {
        cursor: default;
        transform: none;
      }
    }
  }
}
</style>
