<template>
  <div class="section" id="blogs">
    <div v-for="blog in blogEntries" :key="blog.id" class="blog">
      <span class="release-date">{{ blog.date }}</span>
      <router-link tag="h3" :to="blog.id" class="title">{{ blog.title }}</router-link>
      <p class="synopsis">{{ blog.description }}</p>
    </div>
  </div>
</template>

<script>
import BlogList from '../blogs/blogs.json'
export default {
  name: 'Blogs',
  computed: {
    blogEntries () {
      return BlogList
    }
  }
}
</script>

<style lang="scss" scoped>
div#blogs {
  display: block;
  position: relative;
  padding: 50px 10%;
  .blog {
    display: block;
    position: relative;
    margin-bottom: 60px;
    span.release-date {
      display: block;
      font-size: 1.2vw;
      color: #787878;
      margin-bottom: 10px;
    }
    h3.title {
      position: relative;
      display: inline-block;
      font-size: 2.3vw;
      color: var(--primary-color);
      margin-bottom: 20px;
      cursor: pointer;
      &::after {
        position: absolute;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--primary-color);
        content: "";
        opacity: 0;
        -webkit-transition: opacity 0.3s, width 0.3s;
        -moz-transition: opacity 0.3s, width 0.3s;
        transition: opacity 0.3s, width 0.3s;
        bottom: 0;
      }
      &:hover::after,
      &:focus::after {
        opacity: 1;
        width: 100%;
      }
    }
    p.synopsis {
      display: block;
      font-size: 1.4vw;
      line-height: 120%;
      // color: black;
    }
  }
}
</style>
