<template>
  <div class="components-container">
    
    <!-- 其他内容省略 -->
    <!-- <el-col :span="6"> -->
        <!-- <el-card class="box-card"> -->
          <!-- <div class="component-item">
            <mallki class-name="mallki-text" text="vue-element-admin" />
          </div> -->
        <!-- </el-card> -->
      <!-- </el-col> -->
      <h1 class="text-shadow" data-shadow="dang!">ACCURACY</h1> 
      <!-- <div class="text-above-rectangle">  
          CUSTOM SCRIPT
    </div>  -->

    <div class="white-rectangle">
      <div v-if="showDiv">
        <vue-simple-spinner   size="medium" />
      </div>
     
    <div  v-if="showDiv2">
      <div class="component-item">
            <mallki class-name="mallki-text" text="Accuray is 94.73%" />
      </div>
      <div class="editor-container">
      <dropzone id="myVueDropzone" url="https://httpbin.org/post" @dropzone-removedFile="dropzoneR" @dropzone-success="dropzoneS" />
    </div>
    <div class="submit-button2">
        <el-button type="primary"@click="open">提交图片</el-button>
        <span class="text" v-if="showTextAfterSubmit">检测到图片结果为: COVID-19</span>
      </div>

      <el-dialog title="提交结果" :visible.sync="dialogVisible" width="30%">
        <p>提交成功！</p>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
        </span>
      </el-dialog>
    </div>
 
    </div>
   

    <!-- 修改后的上传文件按钮 -->
   

    <!-- 其他内容省略 -->
  </div>
</template>

<script>
import Dropzone from '@/components/Dropzone'
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import Mallki from '@/components/TextHoverEffect/Mallki'
import VueSimpleSpinner from 'vue-simple-spinner'

export default {
  name: 'AvatarUploadDemo',
  components: { ImageCropper,  PanThumb,
    VueSimpleSpinner,
    Dropzone,
    Mallki,
    },
  // 其他代码省略
  
  data() {
    return {
      listQuery: {
    
        title: '' // 添加了一个 title 属性，用于存储输入框的值
      },
      dialogVisible: false, // 控制弹窗显示与隐藏
      files: [], // 文件列表
      showDiv: true,
      showDiv2:false,
      showTextAfterSubmit: false // 控制按钮旁边文字的显示状态

      
    };
  },
  mounted() {  
    // 使用setTimeout在五秒后隐藏spinner  
    setTimeout(() => {  
      this.showDiv = false; // 将 showDiv 设置为 false，使 div 消失  
    }, 3000); // 5000 毫秒 = 5 秒  
    setTimeout(() => {  
      this.showDiv2 = true; // 将 showDiv 设置为 false，使 div 消失  
    }, 3000); // 5000 毫秒 = 5 秒  
  } ,

  methods: {
    // 其他方法省略

    // 处理文件选择改变的方法
    handleFileChange(file, fileList) {
      // 获取选择的文件名
      const selectedFile = fileList && fileList.length ? fileList[0].name : '';
      
      // 更新按钮显示的文件名
      this.uploadedFileName = selectedFile;
    },
    showResultDialog() {
      this.dialogVisible = true;
    },
    dropzoneS(file) {
      console.log(file)
      this.$message({ message: 'Upload success', type: 'success' })
    },
    dropzoneR(file) {
      console.log(file)
      this.$message({ message: 'Delete success', type: 'success' })
    },
    open() {
        this.$confirm('图片已成功上传', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          });
          // 设置一个延时，在弹窗关闭后一段时间显示按钮旁边的文字
        setTimeout(() => {
            this.showTextAfterSubmit = true; // 设置一个变量控制文字显示状态
        }, 1000); // 假设延时时间为1秒
                 
        });
      },
      navigateToAnotherPage() {  
      // 使用 $router.push 方法导航到新的路由  
      this.$router.push('/dashboard'); // 替换为你想要跳转的路由路径  
    }  

  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');  
  
*, *:before, *:after {  
  margin: 0;  
 
  box-sizing: border-box;  
  /* position: relative; // 这个可能不需要在每个元素上都设置 */  
} 


.components-container {
  background-color: rgb(58, 120, 255); /* 将容器背景改为蓝色 */
  display: flex;
  flex-direction: column; /* 设置为列方向 */  
  justify-content: center;
  align-items: center;
  height: 100vh; /* 设置容器高度为视窗高度，让其填满整个屏幕 */
  
}
.editor-container{
  margin-bottom: 20px;
}
.component-item{
  margin-bottom: 20px;
  font-size: 30px;
}
.white-rectangle {
  background-color: white; /* 将圆角矩形背景改为白色 */
  padding: 70px; /* 添加内边距，使内容离边框有一定的距离 */
  border-radius: 10px; /* 设置圆角矩形的圆角半径为10px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.submit-button {  
  width:0px ;
  margin-left: 40%;  
  margin-right: 50%;  
}

.dialog-footer {
  padding: 10px 20px;
  text-align: right;
  border-top: 1px solid #ebeef5;
  background-color: #f9fafc;
}
.text{
  font-size: 15px;
  margin-left:20px; 
  color: rgba(59, 56, 56, 0.903);
}
.text-above-rectangle {  
  text-align: center; /* 根据需要设置文字对齐方式 */  
  color: white; /* 如果背景色较暗，可以设置文字颜色为白色 */  
  margin-bottom: 60px; /* 设置与白色框之间的间距 */  
  font-size: 40px;
}  
.text-shadow {  
  display: inline-block;  
  color: white;  
  font-family: 'Righteous', serif;  
  font-size: 5em;   
  margin-bottom: 70px;
  text-shadow: .03em .03em 0 hsla(230, 40%, 50%, 1);  
  position: relative; /* 添加到text-shadow以确保伪元素定位正确 */  
}  
  
.text-shadow:after {  
  content: attr(data-shadow);  
  position: absolute;  
  top: .06em;  
  left: .06em;  
  z-index: -1;  
  text-shadow: none;  
  background-image:  
    linear-gradient(  
      45deg,  
      transparent 45%,  
      hsla(48, 20%, 90%, 1) 45%,  
      hsla(48, 20%, 90%, 1) 55%,  
      transparent 0  
    );  
  background-size: .05em .05em;  
  -webkit-background-clip: text;  
  -webkit-text-fill-color: transparent;  
    
  animation: shad-anim 15s linear infinite;  
}  
  
@keyframes shad-anim {  
  0% {background-position: 0 0;}  
  100% {background-position: 100% -100%;} /* 修改0%为100%以确保动画完整 */  
}  


</style>