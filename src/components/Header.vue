<template>
  <header>
        <div class="w-full lg:h-screen bg-gray-800">
            <div class="w-full h-full bg-text">
                <div class="relative container mx-auto px-6">
                    
                    <!-- Navbar -->
                    <div class="flex items-center justify-between py-10 text-white">
    
                        <!-- Logo -->
                        <a href="#" class="flex items-center text-2xl md:text-3xl font-bold">
                            <div class="border-r pr-3 md:pr-4 mr-4 md:mr-5">
                                <img src="@/assets/img/near_logo_stack1.png" alt="">
                            </div>
                            Promises
                        </a>
    
                        <!-- Menu -->
                        <div class="hidden lg:block">
                            <ul class="flex items-center space-x-8 text-lg">
                                <li class=" hover:text-blue-400"><a @click="scrollMeTo('#about')">about tracker</a></li>
                                <li class=" hover:text-blue-400"><a @click="scrollMeTo('receive')">what you receive</a></li>
                                <li class=" hover:text-blue-400"><a @click="scrollMeTo('howitworks')">how it works</a></li>
                            </ul>
                        </div>
    
                        <!-- Login btn -->
                        <div class="flex items-center justify-between">
                            <button @click="signIn" class="hidden md:flex btn-blue">
                                Login with NEAR
                                <img src="@/assets/img/near_logo_stack21.png" class="ml-3" alt="">
                            </button>
                            <button class="ml-2 lg:hidden"><img src="@/assets/img/menu.png" alt=""></button>
                        </div>
    
                    </div>
                    

                    
                </div>

                <!-- Offer -->
                <div class="container mx-auto px-6 text-white">

                    <div class="flex flex-col lg:flex-row">

                        <!-- Offer text -->
                        <div class="w-full lg:w-1/2 text-center lg:text-left">
                            <h1 class="home-title lg:mt-16 2xl:mt-32" style="line-height: 1.75;">
                                NEAR Promises - promise <br> tracker by <span class="bg-gradient-to-r from-blue-400 to-blue-500">NEAR Blockchain</span> 
                            </h1>
                            <p class=" mt-5 text-gray-400 text-lg leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam viverra hac a aliquam. Turpis id dictum elementum 
                                pellentesque tellus sagittis. Accumsan pretium auctor 
                                pellentesque purus faucibus. Ac quis aliquam eleifend 
                                pulvinar porttitor. Amet id pharetra eu sem purus. 
                            </p>
                            <div class="flex flex-col lg:flex-row justify-center lg:justify-start items-center mt-12">
                                <a href="#" class="btn-blue">Try tracker right now</a>
                                <a href="#" class="mt-4 lg:ml-12 hover:text-blue-400">Explore → </a>
                            </div>
                        </div>

                        <!-- Offer img -->
                        <div class="w-full lg:w-1/2">
                            <img src="@/assets/img/Photolayer.png" alt="man" class="xl:-mt-16 ml-auto h-full">
                        </div>

                    </div>
                </div>
                
            <!-- </div> -->
        </div>
        </div>
    </header>
</template>

<script>
import store from '../store/store.js'
import { wallet, CONTRACT_ID } from "@/services/near"


export default {
    methods: {
        scrollMeTo(refName) {
            var element = this.$els[refName];
            element.scrollIntoView();
        }
    },
    setup() {
        const accountId = store.state.accountId
        return {
            accountId,
            signIn: () => wallet.requestSignIn(CONTRACT_ID)
        }
    }
}
</script>