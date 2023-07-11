<template>
<div id="search">
    <input type="text" v-model="keyword">
    <table>
        <tr v-for="user in filteredUsers" :key="user.id">
            <td v-text="user.id"></td>
            <td v-text="user.name"></td>
            <td v-text="user.email"></td>
        </tr>
    </table>
</div>
</template>

<script>


import { createApp } from 'vue';

export default {
  data() {
    return {
      keyword: '',
      users: [
        {
          id: 1,
          name: '鈴木太郎',
          email: 'suzukitaro@example.com'
        },
        // 他のユーザーを追加する場合はここに記述します
      ]
    };
  },
  computed: {
    filteredUsers() {
      const keyword = this.keyword.toLowerCase();
      return this.users.filter(user =>
        user.name.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword)
      );
    }
  }
};

createApp().mount('#search');


</script>