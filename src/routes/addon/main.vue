<template>
    <div class="box">
        {{msg}}
        <span>
            {{msg1}}
        </span>
        <span>
            {{msg2}}
        </span>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            msg: 'Hello, World!',
            msg1: 'Are you here?',
            msg2: "yes, I'm here"
        }
    }
}
</script>
<style lang="stylus">
.box
    width 200px
    height 200px
    margin-top 10px
    margin-bottom 20px
    margin-left auto
    margin-right auto
</style>

