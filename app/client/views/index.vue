<template>
      <div id="main">
          <section v-for="i in list">
              <article class="post">
                  <div class="meta">
                      <div>
                          <span class="author">  akira_cn </span>
                          <span>发布于</span>
                          <span class="date">07月10, 2016</span>
                      </div>
                      <div class="comment">3 comments</div>
                  </div>
                  <h1 class="title">
                      <router-link to="/article/1">【译】7 个令人惊讶的 JavaScript “特性” </router-link>
                  </h1>
                  <div class="entry-content">
                      <blockquote>
                          <p>原文：<router-link to="/article/1">http://www.zcfy.cc/article/793</router-link></p>
                      </blockquote>
                      <p>在过去的几个月里，我对 JSHint 做了一些改进，主要是，学习 ES6（我最自豪的是重新实现了变量作用域）的过程中我碰到了几个特性，它们让我惊讶，其中大部分是关于 ES6 的特性但也有一部分是 ES3 特性，这些特性我以前从未用过，而现在我将开始使用它们。</p>
                      <p class="more"> <router-link to="/article/1">阅读全文 »</router-link></p>
                  </div>
              </article>
          </section>
      </div>
</template>
<script>
    export default {
        data(){
            return{
                list:[0,1,2,3,4,5,6,7,8,9]
            }
        },
        methods:{
            golist(){
                this.$route.router.go({name:'list'});
            }
        },
        components:{}
    }
</script>
