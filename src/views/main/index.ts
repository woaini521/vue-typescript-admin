import { Vue, Component } from 'vue-property-decorator'

@Component({
  template: require('./layout.html')
})
class Main extends Vue {
  constructor() {
    super()
  }
  mounted() {
    const loadEl = document.getElementById('loading')
    if (loadEl) {
      loadEl.style.display = 'none'
    }
  }

  open() {
    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      type: 'warning'
    }).then(() => {
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
  }

  onSwitch() {
    const lang = this.$cookie.get('lang') === 'en' ? 'zh-CN' : 'en'
    this.$cookie.set('lang', lang)
    this.$i18n.locale = lang
  }
}

export default Main
