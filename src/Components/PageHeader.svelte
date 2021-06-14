<script lang="ts">
</script>

<div class="wrapper">
  <div class="title-text">Say NO to UI Libraries!</div>
  <div class="nav-wrapper">
    <span><a href="/">Home</a></span>
    <span><a href="/components">Components</a></span>
    <span><a href="/articles">Articles</a></span>
    <span><a href="/blog">Blog</a></span>
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
  <span><a href="/">Home</a></span>
  <span><a href="/components">Components</a></span>
  <span><a href="/articles">Articles</a></span>
  <span><a href="/blog">Blog</a></span>
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

  .m-nav-wrapper span a,
  .m-nav-wrapper span a:visited {
    text-decoration: underline;
    color: black;
    margin: 0 5px;
    white-space: nowrap;
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

    .nav-wrapper span a,
    .nav-wrapper span a:visited {
      text-decoration: underline;
      color: black;
      margin: 0 5px;
      white-space: nowrap;
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
