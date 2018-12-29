/*
 * @Author: yxcoder 
 * @Date: 2018-12-26 09:29:40 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-29 10:04:29
 */
  <template>
    <div id="content">
      <div>
        {{msg}}
        <span>
          {{msg2}}
        </span>
      </div>
      <a href="dist/addon.html" >jump222! jump!</a>
      </div>
  </template>
  <script>
    export default {
      data(){
        return{
          msg: 'Hello, World!',
          msg2: ''
        }
      }
    }
  </script>
  <style lang="stylus">
  div
    color red
  </style>
  