<template>
  <div class="write-article">
    <textarea v-model="content" class="write-area"></textarea>
    <vue-showdown :markdown="content" class="show-content"></vue-showdown>

    <el-button class="settings" type="info" @click="dialogFormVisible = true" icon="el-icon-setting" circle></el-button>
    <el-dialog title="文章设置" center class="setting-content" :visible.sync="dialogFormVisible" width="50%">
      <el-form label-position='right' label-width="80px">
        <el-form-item label="标题">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2" align="center">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time" placeholder="选择时间" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="摘要">
          <el-input type="textarea" rows="4"></el-input>
        </el-form-item>
        <el-form-item label="封面">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="标签">
          <el-tag
            :key="tag"
            v-for="tag in article.tags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" align="right">
        <el-button type="normal" @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="saveArticle">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueShowdown from 'vue-showdown'
import { getArticle, saveArticle } from '@/api/article'

export default {
  name: 'dashboard',
  components: {
    VueShowdown
  },
  data() {
    return {
      content: '请写点什么',
      dialogFormVisible: false,
      dialogImageUrl: '',
      dialogVisible: false,
      inputVisible: false,
      inputValue: '',
      article: {
        id: '',
        markdown: '',
        html: '',
        coverImg: '',
        title: '',
        createDate: '',
        summary: '',
        tags: ['标签一', '标签二', '标签三'],
        classify: ''
      }
    }
  },
  created() {
    this.getArticle('12211221')
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },
    getArticle(id) {
      getArticle(id).then(response => {
        this.content = response.data.content
      })
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      const inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    saveArticle() {
      this.dialogFormVisible = false
      // const article = JSON.stringify(this.article)
      const article = this.article
      saveArticle(article).then(response => {
        this.article.id = response.data.id
      })
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.write-article {
  display: flex;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  .write-area {
    width: 50%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    padding: 14px 10px 0 10px;
  }
  .show-content{
    height: 100%;
    width: 50%;
    overflow-x: hidden;
    overflow-y: scroll;
    word-break:break-all;
    word-wrap:break-word;
    padding: 0 10px 0 10px;
  }

  .settings {
    position: fixed;
    right: 15px;
    bottom: 15px;
  }
  .setting-content {
    .summary {
      height: 100px;

    }

    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
    }
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
    }
  }

}
</style>
