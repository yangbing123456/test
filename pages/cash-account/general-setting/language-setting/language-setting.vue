<template>
  <view class="container">
    <!-- 语言单元格 -->
    <view class="small-box"
          v-for="item in langData"
          :key='item.value'>
      <view class="left-box">
        <image class="first-box"
               :src='item.icon' />
        <view class="top-small-box">
          <text style="color: #212121;">{{item.label}}</text>
        </view>
      </view>

      <view>
        <u-radio-group v-model="value"
                       @change="radioGroupChange"
                       active-color='#12D18E'>
          <u-radio @change="radioChange(item)"
                   :name="item.value">
            <!-- {{item.name}} -->
          </u-radio>
        </u-radio-group>
      </view>
    </view>
    <!-- 保存按钮 -->
    <view class="bottom-btn">
      <u-button :hair-line="false"
                class="yes-btn"
                @click='saveHandler'
                v-bind:class="{'class1':Boolean(value)}">
        {{$t('language-setting.language-setting.5r0s389cbjk0')}}</u-button>
    </view>

    <!-- 保存按钮弹窗 -->
    <u-popup v-model="alertBox"
             mode="bottom"
             width="500rpx"
             height="140px"
             :mask-close-able='false'
             border-radius='24'>
      <text class="delete-user">{{$t('language-setting.language-setting.5r0s389cea00')}}</text>
      <view class="textStyle">{{$t('language-setting.language-setting.5r0s389ceqg0')}}</view>
      <view class="delete-user-btn">
        <u-button @click="alertBox = false;"
                  :hair-line="false"
                  class="quit-btn">{{$t('language-setting.language-setting.5r0s389cf080')}}</u-button>
        <u-button @click="changeLanguage"
                  :hair-line="false"
                  class="setting-btn">{{$t('language-setting.language-setting.5r0s389cf9c0')}}</u-button>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data () {
    return {
      //语言数组
      langData: [{
        label: "English",
        value: 1,
        positionX: 0,
        positionY: 0,
        languageCode: "en",
        icon: '../../../../static/fonts/Group196.png'
      },
      {
        label: "Español",
        value: 2,
        positionX: -24,
        positionY: 0,
        languageCode: "es",
        icon: '../../../../static/fonts/Group196.png'
      },
      {
        label: "Français",
        value: 3,
        positionX: -48,
        positionY: 0,
        languageCode: "fr",
        icon: '../../../../static/fonts/Group196.png'
      },
      {
        label: "العَرَبِيَّة",
        value: 4,
        positionX: -72,
        positionY: 0,
        languageCode: "ar",
        icon: '../../../../static/fonts/Group196.png'
      },
      {
        label: "Română",
        value: 5,
        positionX: -96,
        positionY: 0,
        languageCode: "ro",
        icon: '../../../../static/fonts/Group196.png'
      },
      {
        label: "Bahasa Indonesia",
        value: 6,
        positionX: -120,
        positionY: 0,
        languageCode: "id",
        icon: '../../../../static/fonts/Group196.png'
      },
      {
        label: "Hrvatski",
        value: 7,
        positionX: -144,
        positionY: 0,
        languageCode: "hr",
        icon: '../../../../static/fonts/Group196.png'
      },
      {
        label: "Русский",
        value: 8,
        positionX: -168,
        positionY: 0,
        languageCode: "ru",
        icon: '../../../../static/fonts/Group196.png'
      },
      {
        label: "Italiano",
        value: 9,
        positionX: -216,
        positionY: 0,
        languageCode: "it",
        icon: '../../../../static/fonts/Group196.png'
      },
      {
        label: "Slovenčina",
        value: 10,
        positionX: 0,
        positionY: -24,
        languageCode: "sk",
        icon: '../../../../static/fonts/Group196.png'
      },
      {
        label: "Български",
        value: 11,
        positionX: -24,
        positionY: -24,
        languageCode: "bg",
        icon: '../../../../static/fonts/Group196.png'
      },
      // {
      // 	label: "Latviešu",
      // 	value: 12,
      // 	positionX: -48,
      // 	positionY: -24,
      // 	languageCode: "lv",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "Slovenščina",
      // 	value: 13,
      // 	positionX: -72,
      // 	positionY: -24,
      // 	languageCode: "sl",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "Čeština",
      // 	value: 14,
      // 	positionX: -96,
      // 	positionY: -24,
      // 	languageCode: "cs",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "Lietuvių",
      // 	value: 15,
      // 	positionX: -120,
      // 	positionY: -24,
      // 	languageCode: "lt",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "Suomi",
      // 	value: 16,
      // 	positionX: -144,
      // 	positionY: -24,
      // 	languageCode: "fi",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "Dansk",
      // 	value: 17,
      // 	positionX: -168,
      // 	positionY: -24,
      // 	languageCode: "da",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "Magyar",
      // 	value: 18,
      // 	positionX: -192,
      // 	positionY: -24,
      // 	languageCode: "hu",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "Svenska",
      // 	value: 19,
      // 	positionX: -216,
      // 	positionY: -24,
      // 	languageCode: "sv",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "Deutsch",
      // 	value: 21,
      // 	positionX: -24,
      // 	positionY: -48,
      // 	languageCode: "de",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "Nederlands",
      // 	value: 22,
      // 	positionX: -48,
      // 	positionY: -48,
      // 	languageCode: "nl",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "Tiếng Việt",
      // 	value: 23,
      // 	positionX: -72,
      // 	positionY: -48,
      // 	languageCode: "vi",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "Eesti",
      // 	value: 24,
      // 	positionX: -96,
      // 	positionY: -48,
      // 	languageCode: "et",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "Polski",
      // 	value: 25,
      // 	positionX: -120,
      // 	positionY: -48,
      // 	languageCode: "pl",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "ไทย",
      // 	value: 26,
      // 	positionX: -144,
      // 	positionY: -48,
      // 	languageCode: "th",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "ελληνικά",
      // 	value: 27,
      // 	positionX: -168,
      // 	positionY: -48,
      // 	languageCode: "el",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      // {
      // 	label: "Português",
      // 	value: 28,
      // 	positionX: -192,
      // 	positionY: -48,
      // 	languageCode: "pt",
      // 	icon: '../../../../static/fonts/Group196.png'
      // },
      {
        label: this.$t('language-setting.language-setting.5r0s93glpkg0'),
        value: 37,
        positionX: -168,
        positionY: -72,
        languageCode: "zh-cn",
        icon: '../../../../static/fonts/Group196.png'
      },
      {
        label: this.$t('language-setting.language-setting.5r0s389cfiw0'),
        value: 38,
        positionX: -192,
        positionY: -72,
        languageCode: "zh-tw",
        icon: '../../../../static/fonts/Group196.png'
      },
      ],

      alertBox: false,
      value: '', //单选按钮存放值
      itemobj: {}, //点击单选按钮存放该对象
      activeLangValue: uni.getStorageSync('code') || "zh-cn" //存放语言的值
    };
  },
  //选中语言以后  单选按钮为选中状态
  onLoad () {
    let valueData = uni.getStorageSync('radio')
    this.langData.map(res => {
      if (res.value == valueData) {
        this.value = res.value
      }
    })
  },
  methods: {
    //点击确定按钮事件
    changeLanguage () {
      this.alertBox = false
      this.activeLangValue = this.itemobj.languageCode
      uni.setStorageSync('code', this.itemobj.languageCode)
      // this.$store.commit('code', this.itemobj.languageCode)
      this.$i18n.locale = this.itemobj.languageCode
      // window.location.href()
      // window.location.reload()
      //这里是用来强制刷新页面 移动端pc都适用
      uni.reLaunch({
        url: '/pages/home/home'
      })
      //存放选中语言后的值
      uni.setStorageSync('radio', this.itemobj.value)
      // console.log(this.$store.getters['code'])
      // 	console.log(item);
      //     this.activeLangValue = item.languageCode;
      //     this.language = false
      //     localStorage.setItem("languageCode", item.languageCode);
      //     // 切换语言并刷新页面，不然数组无法更新
      //     this.$i18n.locale = item.languageCode;
      //     // window.location.reload();
    },
    // 选中某个单选框时，由radio时触发
    radioChange (item) {
      this.itemobj = item
      console.log(this.itemobj)
      // this.key = e
      // this.data.forEach((item,index) => {
      // 	if(index == e){
      // 		this.border = 'black'
      // 		this.borderWidth = 1
      // 	}
      // })
    },
    // 选中任一radio时，由radio-group触发
    radioGroupChange (e) {
      // console.log(e);
    },
    saveHandler () {
      this.alertBox = true
    }
  }
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 1rem auto;

  .class1 {
    color: white !important;
    background-color: #12d18e !important;
  }

  .small-box {
    // width: 343px;
    height: 3rem;
    margin: 1rem 1rem;
    // background-color: #12D18E;
    border-radius: 1rem;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .top-small-box {
      display: flex;
      flex-direction: column;
    }
  }

  .first-box {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }

  uni-image {
    width: 0.5rem;
    height: 2.4rem;
  }

  .left-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
  }

  .bottom-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    // position: absolute;
    // bottom: 10px;
  }

  .yes-btn {
    // background-color: #12D18E;
    border-radius: 6.25rem;
    margin: 0.5rem 1rem;
    width: 100%;
    border: 1px solid #eeeeee;
    color: #e0e0e0;
    background-color: #f5f5f5;
  }
}

.delete-user {
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
  padding: 0 1rem;
  color: #212121;
  font-weight: 700;
  font-size: 1rem;
}

.textStyle {
  display: flex;
  justify-content: center;
  color: #9d9e9e;
  font-size: 0.8rem;
}

.delete-user-btn {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 10px;
  width: 100%;
}

.setting-btn,
.quit-btn {
  width: 40%;
  border-radius: 6.25rem;
  border: 0 !important;
}

.quit-btn {
  color: #12d18e !important;
}

.setting-btn {
  color: white !important;
  background-color: #12d18e !important;
}
</style>