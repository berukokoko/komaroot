<template>
  <header>
  <div>
        <nav>
          <ul>
            <li>
              <i class="fa fa-home" aria-hidden="true">
             </i>
           <router-link to="/">ホーム</router-link>
              </li>
              <li>
              <i class="fa fa-user" aria-hidden="true">
              </i>
                <router-link to="/about">〇〇とは</router-link>
              </li>
               <li>
              <i class="fa fa-comment" aria-hidden="true">
              </i>
                <router-link to="/qa">よくある質問</router-link>
              </li>
              <li>
              <i class="fa fa-edit" aria-hidden="true">
              </i>
                <router-link to="/contact">掲示板</router-link>
              </li>     
          </ul>
        </nav>
  </div>
</header>



<div class="wrapper">
        <div class="contens">
  
  
        <div class="contenscenter">
  <div>










    <h1>掲示板</h1>
    名前
    <div class="cp_iptxt cp_iptxt2">
      <input type="text" v-model="name" placeholder="名前">
    </div>コメント
  <div class="cp_iptxt cp_iptxt2">
      <textarea v-model="comment"></textarea>
    </div>
    <br>
    <button @click="submitPosts" class="buttonRound">投稿する</button>
    <br>
    <br>
    <h2>投稿一覧</h2>

    <div v-for="post in posts" :key="post.name">
      <hr>
      <p>名前：{{post.fields.name.stringValue}}</p>
      <p>コメント：{{post.fields.comment.stringValue}}</p>
    </div>

  </div>

    </div>
      </div>
        </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: '',
      comment: '',

      posts: ''
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    submitPosts() {
      axios.post(
 "https://firestore.googleapis.com/v1/projects/test/databases/(default)/documents/posts",
        {
          fields: {
            name: {
              stringValue: this.name
            },
            comment: {
              stringValue: this.comment
            }
          }
        }
      ).then(() => {
        this.name = '';
        this.comment = '';
        this.getPosts();
      });
    },
    getPosts() {
      axios.get(
 "https://firestore.googleapis.com/v1/projects/test/databases/(default)/documents/posts",
      )
      .then(res => {

        this.posts = res.data.documents;
      });
    }
  }
};
</script>

