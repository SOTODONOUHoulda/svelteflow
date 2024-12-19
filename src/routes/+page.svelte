<script lang="ts">
    let message = "Sign up with Google";
    let message1 = "Sign up with Facebook";
    let username = "Johnsonwillamson";
    let email = "Johnsonwillamson@gmail.com";
</script>

<div class="container h-8 mx-auto p-5">
    <div class="flex flex-row justify-between">
        <div
            class="bg-gradient-to-r from-purple-950 to-pink-700 w-10 h-10 rounded-lg"
        >
            <h1 class="text-3xl ml-12 text-bold">Superpage</h1>
        </div>
        <div class="m-1">
            <button
                class="p-3 bg-zinc-300 rounded-md px-6 h-11 text-center mx-2"
                >Explore features</button
            >
            <button
                class="p-3 bg-black text-white rounded-md px-6 h-11 text-center"
                >Get started</button
            >
        </div>
    </div>

    <div class="my-10">
        <div
            class="bg-white rounded overflow-hidden shadow-2xl max-w-md p-8 mx-auto"
        >
            <div class="flex flex-row justify-center mt-8">
                <div
                    class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full h-20 w-20 p-16 mx-30 -my-8"
                >
                    <div
                        class="-mx-30 -my-4 flex flex-row space-x-4 justify-center items-center"
                    >
                        <div
                            class="bg-white h-3 w-3 rounded-full shadow-md p-2"
                        ></div>
                        <div
                            class="bg-white h-3 w-3 rounded-full shadow-md p-2"
                        ></div>
                    </div>
                    <div
                        class="bg-white h-4 w-4 my-6 -mx-6 rounded-full shadow-md px-6 rounded-t-md"
                    ></div>
                </div>
            </div>
            <div>
                <p class="mt-12 text-center text-3xl">Sign Up to Superpage</p>
                <p class=" text-center mt-2">
                    Already have an account? <a
                        href="login"
                        class="text-purple-800">login</a
                    >
                </p>
            </div>
            <div>
                <div>
                    <input
                        type="text"
                        bind:value={message}
                        class="shadow-inner focus:shadow-outline rounded-lg font-bold text-center text-md border-2 w-full p-2 mt-2"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        bind:value={message1}
                        class="shadow-inner focus:shadow-outline rounded-lg font-bold text-center text-md border-2 w-full p-2 mt-3"
                    />
                </div>

                <div class="flex justify-center text-sm mt-6">
                    <span class="border-b-2 w-1/2 my-1 text-gray-600"></span>
                    <span
                        class=" bg-white text-neutral-600 px-3 absolute -mt-1"
                    >
                        OR</span
                    >
                    <span class="border-b-2 w-1/2 my-1 text-gray-600"> </span>
                </div>
                <div>
                    <label for="username" class="block text-gray-600 mt-6"
                        >Username</label
                    >
                    <div>
                        <input
                            type="text"
                            bind:value={username}
                            class="shadow-inner focus:shadow-outline rounded-lg font-bold text-md border-2 w-full p-2 mt-2 "
                        />
                    </div>

                    <label for="email" class="block text-gray-600 mt-6"
                        >Email Adress</label
                    >
                    <div>
                        <input
                            type="text"
                            bind:value={email}
                            class="shadow-inner focus:shadow-outline rounded-lg font-bold text-md border-2 w-full p-2 mt-2 "
                        />
                    </div>
                </div>
                <div>
                    <div class="flex flex-row">
                        <div
                            class="bg-white shadow-md border-2 border-black rounded-md h-7 w-8 mt-4 pr-4"
                        ></div>
                        <p class=" ml-2 text-sm mt-4">
                            I accept Superpage's <span>
                                <a href="b" class="text-purple-700"
                                    >Terms of Service</a
                                ></span
                            >
                            and
                            <span
                                ><a href="a" class="text-purple-700"
                                    >Privacy Policy</a
                                ></span
                            >
                            Also I agreed superpage
                            <span>
                                <a href="c" class="text-purple-700"
                                    >Refund Policy</a
                                ></span
                            >
                        </p>
                    </div>
                    <div class="flex flex-row">
                        <div
                            class="bg-white shadow-md border-2 border-black rounded-md h-7 w-7 mt-4 pr-2"
                        ></div>
                        <p class=" ml-2 text-sm mt-5">
                            I wish to receive UI tips and offers from Superpage
                        </p>
                    </div>
                    <div>
                        <button
                            type="button"
                            class=" shadow-inner rounded-lg font-bold text-center text-md
                           w-full p-2 mt-4 text-white bg-black"
                            >Register Now</button
                        >
                    </div>
                </div>
            </div>
            <div class="flex flex-row w-full absolute -bottom-2 mx-28 mb-4">
                <div class="bg-white border-2 w-3 h-3 rounded-lg mt-1"></div>
                <span class="text-sm ml-2 mb-3">Superpage team</span>
            </div>
        </div>
    </div>
</div>
