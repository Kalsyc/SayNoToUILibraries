<script lang="ts">
  import ComponentEditor from '../components/ComponentEditor.svelte';
</script>

<main>
  <div class="home-div">
    <div class="welcome-text">Why bother with CSS Frameworks when you can copy paste the best practices from here!</div>
    <ComponentEditor />
  </div>
</main>

<style>
  .home-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .welcome-text {
    padding: 20px 0;
    text-align: center;
  }
</style>
