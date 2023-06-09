<script setup>
import { ref } from 'vue';

const word = ref("")
const wordInput = ref(null)

const rules = {
  required: (value) => !!(value.trim()) || 'You must enter a word',
  alphaValues: (value) => /^[A-Za-z]*$/.test(value.trim()) || 'You must enter a valid word (only letters)',
}

const resetValidation = () => {
  wordInput.value.resetValidation()
} 

const handleSearch = async () => {
  const valid = await wordInput.value.validate()
  
  if (valid.length > 0) {
    return;
  }

  word.value = word.value.trim().toLowerCase()
  console.log('search')
}
</script>

<template>
    <v-text-field
      ref="wordInput"
      v-model="word"
      variant="filled"
      placeholder="Enter a word..."
      class="mt-4"
      rounded="lg"
      base-color="transparent"
      color="transparent"
      :rules="[rules.required, rules.alphaValues]"
      @input="resetValidation"
      @keyup.enter="handleSearch"
    >
      <template v-slot:append-inner>
          <v-btn type="submit" icon flat color="transparent" @click.prevent="handleSearch">
              <v-icon size="large" color="primary" class="mr-1">search</v-icon>
            </v-btn>
      </template>
    </v-text-field>
</template>
