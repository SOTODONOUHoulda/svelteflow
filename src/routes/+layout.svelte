<script lang="ts">
	import "../app.css";
	let { children } = $props();
	
</script>



<div class="h-screen bg-slate-600 w-screen hidden sm:block  ">
	
	
	{@render children()}
	
</div>

