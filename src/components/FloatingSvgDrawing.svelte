<script>
  import {onMount} from "svelte"
import { logoStore } from "../store";
import Intro from "./Intro.svelte";
  import SvgDrawing from "./SvgDrawing.svelte"
  let ref

</script>

<div class="floating-logo">
  <SvgDrawing {...$logoStore}  />
</div>
