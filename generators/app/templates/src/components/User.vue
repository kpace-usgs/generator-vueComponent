<template>
	<div>
		<div>User {{ $route.params.id }}</div>
		<router-link to="/">Home</router-link>
	</div>
</template>


<script>

export default {
	name: 'User',
	// but, will not watch for a change to /user/:id unless you specify
	// watch: {
	// 	'$route' (to, from) {

	// 	}
	// }
};