<template>
  <div class="menuBox">
    <div class="main">
      <div class="section section1">
        <div class="title" id="text">Kay Stark</div>
          <div class="container">
            <div class="effectBox">
              <el-row :gutter="20">
                <el-col :span="8" v-for="item in list">
                  <div class="item">
                    <div class="effect">
                      <div class="imgBox" :style="'background-image: url(' +item.img+ ')'"></div>
                      <div class="txtBox">
                        <h2>{{item.title}}</h2>
                        <p>{{item.desc}}</p>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
      </div>

      <div class="section section2">
        <div class="bigTitle">实用小代码</div>
          <div class="container">
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="codeBox" id="codeBox">
                  <div class="searchBox">
                    <el-input placeholder="关键词筛选" v-model="codeSearch" size="mini" class="searchInput"></el-input>
                    <el-select v-model="stroll.active" size="mini" class="codeSelect">
                      <el-option
                        v-for="(item, index) in stroll.class"
                        :key="item"
                        :label="'scroll效果：'+item"
                        :value="index">
                      </el-option>
                    </el-select>
                  </div>
                  
                  <ul class="strollUl" :class="stroll.class[stroll.active]">
                    <li :class="index == codeActive?'actived':''" v-for="(item, index) in codeSearchList" :key="item" @click="choseFile(item,index)">{{item.split('./')[1]}}</li>
                  </ul>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="markdown">
                  <mavon-editor class="mavonEditor" :toolbars="{}" :toolbarsFlag="false" v-model="codeMsg" :defaultOpen="'preview'" :subfield="false" :editable="false"/>
                </div>
              </el-col>
            </el-row>
          </div>
          
      </div>
      
    </div>
    <nav-foot></nav-foot>
  </div>
</template>

<script>
import axios from 'axios';
import navFoot from 'c/navFoot';
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import '@/script/stroll/stroll.min.js';
import '@/script/stroll/stroll.css';


export default {
  components: {
    navFoot,
    mavonEditor
  },
  data() {
    return {
      list: [
        {
          title: '流体墙纸',
          desc: '彩色染料滴入水中，慢慢消散，跟随指尖轻轻荡漾',
          img: this.$assets.preview
        },
        // {
        //   title: '流体墙纸',
        //   desc: '彩色染料滴入水中，慢慢消散，跟随指尖轻轻荡漾',
        //   img: this.$assets.preview
        // },
        
      ],
      codeList: [],
      codeActive: -1,
      codeMsg: '',
      codeSearch: '',
      stroll:{
        class: ['grow','cards','curl','wave','flip','fly','fly-simplified','fly-reverse','helix','fan','papercut','twirl','skew','tilt','zipper','fade'],
        active: 11
      } 
    };
  },
  created() {
    
  },
  mounted() {
    this.init();
  },
  computed: {
    codeSearchList() {
      let keyword = this.codeSearch;
      let arr = []
      this.codeList.map(item => {
        if(item.indexOf(keyword) > -1){
          arr.push(item);
        }
      })
      this.$nextTick(function () {
        stroll.bind( '#codeBox ul' );
      })
      return arr;
    }
  },
  methods: {
    init() {
      document.addEventListener('mousemove', this.threedee, false);

      const files = require.context('s/codeMD', false).keys()
      this.codeList = files;
      this.$nextTick(function () {
        stroll.bind( '#codeBox ul' );
      })
    },
    pay(price) {
      // this.$router.push({name: 'OrderPay', params: {price: price}})
    },
    async choseFile(file, index) {
      const name = file.split('./')[1];

      const fi = await this.$apiClient.localRequest('/static/codeMD/'+name)
      this.codeMsg = fi;
      this.codeActive = index;

    },
    readFile(filePath) {
      // 创建一个新的xhr对象
      let xhr = null
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
      } else {
        // eslint-disable-next-line
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
      }
      const okStatus = document.location.protocol === 'file' ? 0 : 200
      xhr.open('GET', filePath, false)
      xhr.overrideMimeType('text/html;charset=gb2312')
      xhr.send(null)
      return xhr.status === okStatus ? xhr.responseText : null
    },
    threedee (e) {
      const steps = 7;
      const text = document.getElementById('text')
      var x = Math.round(steps / (window.innerWidth / 2) * (window.innerWidth / 2 - e.clientX)),
        y = Math.round(steps / (window.innerHeight / 2) * (text.getBoundingClientRect().top - e.clientY)),
        shadow = '',
        color = 100,
        radius = 3,
        i;
      // console.log(x,y)
      for (i=0; i<steps; i++) {
        let tx = Math.round(x / steps * i);
        let ty = Math.round(y / steps * i);
        if (tx || ty) {
          color += 3 * i;
          shadow += tx + 'px ' + ty + 'px 0 rgb(' + color + ', ' + color + ', ' + color + '), ';
        }
      }
      shadow += x + 'px ' + y + 'px 1px rgba(0,0,0,.2), ' + x*2 + 'px ' + y*2 + 'px 6px rgba(0,0,0,.3)';
      
      text.style.textShadow = shadow;
      text.style.webkitTransform = 'translateZ(0) rotateX(' + y*2.5 + 'deg) rotateY(' + -x*2.5 + 'deg)';
      text.style.MozTransform = 'translateZ(0) rotateX(' + y*2.5 + 'deg) rotateY(' + -x*2.5 + 'deg)';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.menuBox {
  
}
.main {
  .section {
    padding: 120px 0;
    .bigTitle {
      font-size: 40px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      text-align: center;
      margin-bottom: 60px;
    }
  }
  .section1 {
    padding: 60px 0 120px;
  }
  .section2 {
    background: #cacaca;
  }
  .title {
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 2px;
    color:#b1b5b3;
    margin:30px 0;
    text-align: center;
    text-transform: uppercase;
    -webkit-tranform: translateZ(0);
    -webkit-transition-duration: 0.05s;
    -moz-tranform: translateZ(0);
  }
  .item {
    margin-top: 20px;
    cursor: pointer;
    .effect {
      background: #3085a3;
      background: -webkit-linear-gradient(bottom left, #0e9802 0%, #062fd6 100%);
      background: -o-linear-gradient(bottom left, #0e9802 0%, #062fd6 100%);
      background: linear-gradient(to top right, #0e9802 0%, #062fd6 100%);
      position: relative;
      overflow: hidden;
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        content: '';
        opacity: 0;
        -webkit-transform: rotate3d(0,0,1,45deg) scale3d(1,0,1);
        transform: rotate3d(0,0,1,45deg) scale3d(1,0,1);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transition: opacity .35s,-webkit-transform .35s;
        transition: opacity .35s,transform .35s;
      };
      .imgBox {
        width: 100%;
        padding-top: 70%;
        background-size: cover;
        background-position: center;
        opacity: .9;
        -webkit-transition: opacity .35s,-webkit-transform .35s;
        transition: opacity .35s,transform .35s;
      }
      .txtBox {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px 25px 0;
        h2 {
          color: #fff;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: 2px;
          opacity: 1;
          margin-bottom: 5px;
          -webkit-transform: scale3d(.8,.8,1);
          transform: scale3d(.8,.8,1);
          -webkit-transition: -webkit-transform .35s;
          transition: transform .35s;
        }
        p {
          color: #fff;
          font-size: 16px;
          letter-spacing: 1px;
          opacity: 0;
          text-shadow: 0 0 5px #333;
          -webkit-transform: scale3d(.8,.8,1);
          transform: scale3d(.8,.8,1);
          -webkit-transition: opacity .35s,-webkit-transform .35s;
          transition: opacity .35s,transform .35s;
          text-transform: none;
        }
      }
      &:hover {
        &:after {
          opacity: 1;
          -webkit-transform: rotate3d(0,0,1,45deg) scale3d(1.2,1.2,1.2);
          transform: rotate3d(0,0,1,45deg) scale3d(1.2,1.2,1.2)
        };
        .imgBox {
          opacity: .5;
          -webkit-transform: scale3d(1.05,1.05,1);
          transform: scale3d(1.05,1.05,1)
        }
        .txtBox {
          h2 {
            opacity: 1;
            -webkit-transform: scale3d(1,1,1);
            transform: scale3d(1,1,1)
          }
          p {
            opacity: 1;
            -webkit-transform: scale3d(1,1,1);
            transform: scale3d(1,1,1)
          }
        }
      };
    }
  }
  .codeBox {
    width:100%;
    .searchBox {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .searchInput {
        flex: 3;
        margin-right: 10px;
      }
      .codeSelect {
        flex: 2;
      }
    }
    
    .strollUl {
      width: 100%;
      height: 480px;
      li {
        position: relative;
        padding: 16px;
        color: #3d3d3d;
        font-size: 18px;
        cursor: pointer;
        &:after {
          content: '';
          display: inline-block;
          border: solid;
          border-width: 8px 0 8px 8px;
          border-color: transparent #333;
          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -8px;
          opacity: 0;
          transition: all 600ms ease;
        };
      }
      .actived {
        padding-left: 40px;
        &:after {
          opacity: 1;
          left: 16px;
        }
      }
    }
  }
  .markdown {
    height: 518px;
    .mavonEditor {
      width: 100%;
      height: 100%;
    }
  }
}


</style>
