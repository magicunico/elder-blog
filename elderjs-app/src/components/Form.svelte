

<script>
    export let name;
    export let message;

	function handleClick() {
		alert(name+" "+message+" lets start!");
	}
</script>


<form on:submit={handleClick}>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Name: </label>
    <input bind:value={name} type="text"/>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Last name: </label>
    <input bind:value={message} type="text"/>
    <button type="submit">Send</button>
    <!-- svelte-ignore a11y-label-has-associated-control -->
</form>