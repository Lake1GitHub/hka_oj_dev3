<template>
    <div class="box">
        {{msg}}
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            msg: 'this is my project'
        }
    }
}
</script>
<style lang="stylus">
.box
    width 300px
    height 200px
    margin-top 10px
    margin-bottom 20px
    margin-left auto
    margin-right auto
</style>

