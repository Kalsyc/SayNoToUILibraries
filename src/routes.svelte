<script>
  import { Router, Route } from 'svelte-routing';
  import PageHeader from './components/PageHeader.svelte';
  import Home from './pages/Home.svelte';
  import Playground from './pages/Playground.svelte';
  export let url = '';
</script>

<Router {url}>
  <PageHeader />
  <div>
    <Route path="/"><Home /></Route>
    <Route path="playground"><Playground /></Route>
  </div>
</Router>
