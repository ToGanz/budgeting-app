<template>
  <div class="max-w-7xl mx-auto">
    <div
      class="relative z-8 pb-4 bg-white sm:pb-8 md:pb-10 lg:w-full lg:pb-14 xl:pb-16"
    >
      <main
        class="flex flex-wrap mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
      >
      <div class="max-w-md">
          <img
            class="h-full w-full object-cover"
            src="../assets/images/SavingMoney.svg"
            alt="Picture of woman with a piggy bank"
          />
        </div>
        <div class="sm:text-center lg:text-left">
          <h1
            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span class="block xl:inline">Finance</span>
            {{ ' ' }}
            <span class="block text-indigo-600 xl:inline">
              Tracker
            </span>
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          >
            Keep your finances in check. Track your income and expanses
            with a simple user experience.
          </p>
          <div
            class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            v-if="loggedIn"
          >
            <router-link
              :to="{ name: 'Plans' }"
              class="sm:w-1/2 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </router-link>
          </div>
          <div
            class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            v-else
          >
            <div class="rounded-md shadow">
              <router-link
                :to="{ name: 'Register' }"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </router-link>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { authComputed } from '@/store/helpers.js'

export default {
  name: 'Home',
  computed: {
    loggedIn: authComputed['users/loggedIn']
  }
}
</script>

<style></style>
