<!-- a panel that contains toggle buttons to show/hide other panels -->
<template>
    <div>
        <PanelToggleButton panelName="code" class="nav-toggle-button" />
        <PanelToggleButton panelName="explanation" class="nav-toggle-button" />
        <PanelToggleButton panelName="website" class="nav-toggle-button" />
        <PanelToggleButton panelName="selection" class="nav-toggle-button" />
        <PanelToggleButton panelName="toolbox" class="nav-toggle-button" />
    </div>
</template>

<script>
    import PanelToggleButton from './PanelToggleButton';
    export default {
        props: {
            name: {
                title: 'Navigation',
                description: "TODO"
            }
        },
        components: {
            PanelToggleButton
        }
    };
</script>

<style scoped>
    .nav-toggle-button {
        margin: 0 10px;
    }
</style>