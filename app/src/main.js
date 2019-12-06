import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Whirl',
		number: 24
	}
});

export default app;
