<script lang="ts">
  import { Link } from 'svelte-routing';
</script>

<div class="wrapper">
  <div class="title-text">Say NO to UI Libraries!</div>
  <div class="nav-wrapper">
    <span><Link class="" to="">Home</Link></span>
    <span><Link to="playground">Playground</Link></span>
    <span><Link to="components">Components</Link></span>
    <span><Link to="articles">Articles</Link></span>
    <span><Link to="forum">Forum</Link></span>
  </div>
  <div class="credits-div">
    <a href="https://github.com/Kalsyc/SayNoToUILibraries">
      <img src="./images/github-logo.png" alt="" />
    </a>
    <span>Created by Darren Sim</span>
  </div>
</div>
<!-- Mobile View -->
<div class="m-nav-wrapper">
  <span><Link to="">Home</Link></span>
  <span><Link to="playground">Playground</Link></span>
  <span><Link to="components">Components</Link></span>
  <span><Link to="articles">Articles</Link></span>
  <span><Link to="forum">Forum</Link></span>
  <span><a href="https://github.com/Kalsyc/SayNoToUILibraries">GitHub Repo</a></span>
</div>

<style>
  a {
    height: 40px;
  }
  img {
    height: inherit;
    margin: auto 10px;
  }
  img:hover {
    opacity: 50%;
  }

  .nav-wrapper {
    display: none;
  }

  .m-nav-wrapper {
    height: 25px;
    display: flex;
    flex-direction: row;
    background-color: beige;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .m-nav-wrapper :global(a),
  .m-nav-wrapper :global(a:visited) {
    text-decoration: underline;
    color: black;
    margin: 0 5px;
    white-space: nowrap;
  }

  .m-nav-wrapper :global(a:hover) {
    opacity: 50%;
  }

  .wrapper {
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: beige;
    padding: 0 5px;
  }

  .title-text {
    padding: 0 5px;
    font-family: Titillium Web;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
  }

  .credits-div {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .m-nav-wrapper {
      display: none;
    }

    .nav-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .nav-wrapper :global(a),
    .nav-wrapper :global(a:visited) {
      text-decoration: underline;
      color: black;
      margin: 0 5px;
      white-space: nowrap;
    }

    .nav-wrapper :global(a:hover) {
      opacity: 50%;
    }

    .credits-div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      line-height: 16px;
    }

    .title-text {
      padding: 0 10px;
      font-family: Titillium Web;
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
    }
  }
</style>
