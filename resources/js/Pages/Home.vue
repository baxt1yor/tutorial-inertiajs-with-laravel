<template>
    <div>
        <h1>Inertiajs is {{ test }}</h1>
        <Nav/>
    </div>
</template>

<script>
import Nav from "../Shared/Nav";

export default {
    components: {Nav},
    props: ["test"],
};
</script>
