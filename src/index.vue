/*
 * @Author: yxcoder 
 * @Date: 2018-12-26 09:29:40 
 * @Last Modified by: yxcoder
 * @Last Modified time: 2019-01-15 16:53:08
 */
  <template>
    <div id="content">
      <div>
        {{msg}}
        <span>
          {{msg2}}
        </span>
      </div>
      <a href="addon.html" >jump! jump!</a>
      </div>
  </template>
  <script>
    export default {
      data(){
        return{
          msg: 'Hello, World!',
          msg2: '123'
        }
      }
    }
  </script>
  <style lang="stylus">
  div
    color green
  </style>
  