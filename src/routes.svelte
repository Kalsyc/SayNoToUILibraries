<script>
  import { Router, Route } from 'svelte-routing';
  import PageHeader from './Components/PageHeader.svelte';
  import Home from './Pages/Home.svelte';
  import Playground from './Pages/Playground.svelte';
  export let url = '';
</script>

<Router {url}>
  <PageHeader />
  <div>
    <Route path="/"><Home /></Route>
    <Route path="playground"><Playground /></Route>
  </div>
</Router>
