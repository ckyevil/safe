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
      <h1 class="text-shadow" data-shadow="dang!">CUSTOM SCRIPT</h1> 
      <!-- <div class="text-above-rectangle">  
          CUSTOM SCRIPT
    </div>  -->

    <div class="white-rectangle">
      <div class="upload-button" style="text-align: center;"> <!-- 将按钮居中 -->
      <el-upload
        ref="upload"
        action="/upload"
        :auto-upload="false"
        :file-list="files">

        <el-button type="primary" icon="el-icon-upload">请上传个人脚本</el-button>
      </el-upload>
    </div>

    <div class="upload-button" style="text-align: center;"> <!-- 将按钮居中 -->
      <el-upload
        ref="upload"
        action="/upload"
        :auto-upload="false"
        :file-list="files">

        <el-button type="primary" icon="el-icon-upload">请上传数据集</el-button>
      </el-upload>
    </div>
    <div class="select3">
        <el-select v-model="listQuery.type3" placeholder="请选择重要性" clearable  style="width: 150px">
          <el-option label="一颗星" value="option1"></el-option>
          <el-option label="两颗星" value="DENSENET_121"></el-option>
          <el-option label="三颗星" value="option3"></el-option>
      </el-select>
      </div>

    <div class="wenben" style="text-align: center;"> <!-- 将文本框居中 -->
      <el-input v-model="listQuery.title" placeholder="输入数据集ID" style="width: 200px;" class="filter-item" />
    </div>
    <div class="submit-button">
        <el-button type="primary"@click="open">提交</el-button>
      </div>
      <el-dialog title="提交结果" :visible.sync="dialogVisible" width="30%">
      <p>提交成功！</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
    </div>
 

    <!-- 修改后的上传文件按钮 -->
   

    <!-- 其他内容省略 -->
  </div>
</template>

<script>

import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import Mallki from '@/components/TextHoverEffect/Mallki'



export default {
  name: 'AvatarUploadDemo',
  components: { ImageCropper,  PanThumb,
  
    Mallki,
    },
  // 其他代码省略
  
  data() {
    return {
      listQuery: {
        title: '' // 添加了一个 title 属性，用于存储输入框的值
      },
      dialogVisible: false, // 控制弹窗显示与隐藏
      files: [] // 文件列表
    };
  },
  
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
    open() {
        this.$confirm('个人脚本及数据集已成功上传', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          });      
          this.$router.push('/documentation/index');
        });
      }

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');  
  
*, *:before, *:after {  
  margin: 0;  
 
  box-sizing: border-box;  
  /* position: relative; // 这个可能不需要在每个元素上都设置 */  
} 

.upload-button {
  margin-bottom: 20px; /* 设置按钮之间的垂直间距为20px，可以根据需要调整 */
}
.components-container {
  background-color: rgb(58, 120, 255); /* 将容器背景改为蓝色 */
  display: flex;
  flex-direction: column; /* 设置为列方向 */  
  justify-content: center;
  align-items: center;
  height: 100vh; /* 设置容器高度为视窗高度，让其填满整个屏幕 */
  
}

.white-rectangle {
  background-color: white; /* 将圆角矩形背景改为白色 */
  padding: 70px; /* 添加内边距，使内容离边框有一定的距离 */
  border-radius: 10px; /* 设置圆角矩形的圆角半径为10px */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dialog-footer {
  padding: 10px 20px;
  text-align: right;
  border-top: 1px solid #ebeef5;
  background-color: #f9fafc;
}
.wenben{
  margin-bottom: 20px;
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
.select3{
  margin-bottom: 20px;
}
</style>
