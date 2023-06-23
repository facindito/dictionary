const END_TO = {
  uk: 'uk.mp3',
  us: 'us.mp3'
}

const NO_FOUND = 'No Definitions Found'

export async function getWord ({ search }) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
    const words = await response.json()

    if (words.title === NO_FOUND) return { error: true, message: words.message }

    const { word, phonetic, phonetics, meanings, sourceUrls } = words[0]

    const ukPhonetic = phonetics.find(phonetic => phonetic.audio.endsWith(END_TO.uk))
    const usPhonetic = phonetics.find(phonetic => phonetic.audio.endsWith(END_TO.us))

    const mappedWord = {
      word,
      phonetic,
      uk: ukPhonetic,
      us: usPhonetic,
      meanings,
      sourceUrls
    }

    return mappedWord
  } catch (error) {
    throw new Error('Error searching word')
  }
}
