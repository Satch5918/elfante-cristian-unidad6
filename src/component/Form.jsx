import React from "react";
import bg from "./bg.jpg";

export default function Form() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src={bg}
            class="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div class="hidden lg:relative lg:block lg:p-12">
            <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              UTN Argentina Programa 4.0
            </h2>

            <p class="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div class="max-w-xl lg:max-w-3xl">
            <div class="relative -mt-16 block lg:hidden">
              

              <h1 class="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
              UTN Argentina Programa 4.0
              </h1>

              <p class="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <form action="#" class="mt-8 grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="FirstName"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Nombre
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  class="mt-1 w-full h-7 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="LastName"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Apellido
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  class="mt-1 w-full h-7 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Email"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  class="mt-1 w-full h-7 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="FirstName"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Telefono
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  class="mt-1 w-full h-7 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Password"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  class="mt-1 w-full h-7 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="PasswordConfirmation"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Confirmar password
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  class="mt-1 w-full h-7 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div class="col-span-6">
                <label for="MarketingAccept" class="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
                  />

                  <span class="text-sm text-gray-700 dark:text-gray-200">
                    Acepto los Terminos y condiciones.
                  </span>
                </label>
              </div>

              
              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white">
                  Create an account
                </button>

                <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                  Already have an account?
                  <a
                    href="#"
                    class="text-gray-700 underline dark:text-gray-200"
                  >
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
