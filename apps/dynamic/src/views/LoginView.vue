<script setup lang="ts">
import DefaultLayout from '@/layouts/default-layout.vue'
import { Input, Label } from '@simplewiki/ui'
</script>

<template>
  <DefaultLayout ignore-sidebar>
    <h1>Login</h1>
    <form>
      <div>
        <Label for="username">Username</Label>
        <Input type="text" id="username" name="username" placeholder="John Doe" />
      </div>
      <div>
        <Label for="password">Password</Label>
        <Input type="password" id="password" name="password" placeholder="*********" />
      </div>
    </form>
  </DefaultLayout>
</template>
