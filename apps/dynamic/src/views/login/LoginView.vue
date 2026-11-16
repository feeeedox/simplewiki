<script setup lang="ts">
import DefaultLayout from '@/layouts/default-layout.vue'
import { Input, Label } from '@simplewiki/ui'
import styles from './LoginView.module.scss'
</script>

<template>
  <DefaultLayout ignore-sidebar>
    <h1>Login</h1>
    <form :class="styles.form">
      <div :class="styles.form_group">
        <Label for="username">Username</Label>
        <Input type="text" id="username" name="username" placeholder="John Doe" />
      </div>
      <div :class="styles.form_group">
        <Label for="password">Password</Label>
        <Input type="password" id="password" name="password" placeholder="************" />
      </div>

      <!-- <a>Forgot password?</a> -->

      <div :class="styles.form_actions">
        <button>Login</button>
      </div>
    </form>
  </DefaultLayout>
</template>
