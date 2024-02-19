<script>
    import {toggleDarkMode} from "$lib/index";
	import { onMount } from "svelte";
    let darkState = "🌛";
    onMount(()=>{
        const darkMode = localStorage.getItem("darkMode") === "true";
        if(darkMode){
            darkState = "🌛";
        }else{
            darkState = "🌞";
        }
    
    })
    function darkButtonClick() {
        const darkMode = localStorage.getItem("darkMode") === "true";
        if(darkMode){
            darkState = "🌞";
        }else{
            darkState = "🌛";
        }
        toggleDarkMode();
    };
</script>

<header
    class="w-full md:w-2/3 dark:text-white py-4 flex justify-between"
>
    <nav>
        <ul class="flex gap-2 md:gap-8">
            <li>
                <a href="/" class="no-underline hover:underline"
                    >Home</a
                >
            </li>
            <li>
                <a href="/project" class="no-underline hover:underline"
                    >Projects</a
                >
            </li>
            <li>
                <a href="/blog" class="no-underline hover:underline"
                    >Blogs</a
                >
            </li>
        </ul>
    </nav>
    <button on:click={darkButtonClick}>{darkState}</button>
</header>

<hr class="w-full md:w-2/3 border border-black dark:border-slate-50" />