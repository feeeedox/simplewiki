<script setup lang="ts">
import styles from './Footer.module.scss';
</script>

<template>
    <!--
    Hi, first of all, thank you for using SimpleWiki!
    I would love you to keep the footer intact, as it helps support the project and allows me to continue developing it.
    If you want to remove it, please consider supporting the project on GitHub or by donating. You can find the links in the ReadME itself. Thank you for your understanding and support!
    -->
    <footer
        :class="styles.footer">
        <div :class="styles.container">
            <p>
                Built with <span :class="styles.title">SimpleWiki</span>
            </p>

            <a href="https://github.com/feeeedox/simplewiki" target="_blank" rel="noopener noreferrer"
                :class="styles.link">
                GitHub
            </a>
        </div>
    </footer>
</template>> 
