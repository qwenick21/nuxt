<template lang="pug">
div(id="container")
  div(id="top-container")
    a(v-for="role in roles")
      img(:src="require(`~/assets/${role.picture}`)")
  div(id="top-text")    
    div(class="square-shadow")  
    div(class="square letter-31px") MARIN HOUSE
    div(class="contact-box")
      div(class="contact-before")
        img(src="~assets/instagram.png")
        img(src="~assets/facebook.png") 
      div(class="line")
      div(class="contact-after")
        div
          i(class="el-icon-phone") 
          span 08-8888888
        div
          i(class="el-icon-message") 
          span marin456@gmail.com  
        div
          i(class="el-icon-s-home") 
          span 海軍總部  
  div(id="role-container")
    div(class="role-box" v-for="role in roles")
      img(:src="require(`~/assets/${role.picture}`)")
      div(class="letter-box")
        div(class="letter-14px") {{ role.name }}
        div(class="display")
          div(class="letter-12px") {{ role.chineseName }}
          div(class="price")
            span(class="letter-21px") {{ "฿" + role.price }}
            span(class="letter-14px") 懸賞金
</template>

<script>
export default {
  layout: 'show',
  data() {
    return {
      roles: [
        {
          picture: 'Luffy.jpeg',
          name: 'Luffy',
          chineseName: '魯夫',
          price: '1.500.000.000',
        },
        {
          picture: 'Zoro.jpeg',
          name: 'Zoro',
          chineseName: '索隆',
          price: '320.000.000',
        },
        {
          picture: 'Robin.jpeg',
          name: 'Robin',
          chineseName: '羅賓',
          price: '130.000.000',
        },
        {
          picture: 'Usopp.jpeg',
          name: 'Usopp',
          chineseName: '騙人布',
          price: '200.000.000',
        },
        {
          picture: 'Chopper.jpeg',
          name: 'Chopper',
          chineseName: '喬巴',
          price: '100',
        },
        {
          picture: 'Nami.jpeg',
          name: 'Nami',
          chineseName: '娜美',
          price: '66.000.000',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
#container {
  font-family: NotoSansCJKtc-Light;
}

#top-container {
  position: relative;
  height: 660px;
  opacity: 0.64;
  background: rgba(192, 192, 192, 0.2);
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
  a:nth-child(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  a:nth-child(2) {
    -webkit-animation-delay: 5s;
    animation-delay: 5s;
  }
  a:nth-child(3) {
    -webkit-animation-delay: 10s;
    animation-delay: 10s;
  }
  a:nth-child(4) {
    -webkit-animation-delay: 15s;
    animation-delay: 15s;
  }
  a:nth-child(5) {
    -webkit-animation-delay: 20s;
    animation-delay: 20s;
  }
  a:nth-child(6) {
    -webkit-animation-delay: 25s;
    animation-delay: 25s;
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-animation: slider 30s linear infinite;
    animation: slider 30s linear infinite;
    width: 100%;
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}

#top-text {
  position: absolute;
  top: 155px;
  left: 50%;
  color: #ffffff;
  .square-shadow {
    position: relative;
    width: 148px;
    height: 148px;
    background: repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.28),
      rgba(255, 255, 255, 0.28) 10px,
      #ffffff 10px,
      #ffffff 12px
    );
  }
  .square {
    position: absolute;
    top: 15px;
    left: 14px;
    display: flex;
    text-align: center;
    align-items: center;
    width: 148px;
    height: 148px;
    border: 2px solid #ffffff;
    background: rgba(255, 255, 255, 0.3);
  }
  .contact-box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 62px;
    .line {
      height: 91px;
      border-left: 1px solid #ffffff;
      margin-right: 28px;
    }
    .contact-before {
      position: absolute;
      left: -109px;
      img {
        width: 25px;
        height: 25px;
        margin: 6px;
        filter: invert(100%) sepia(42%) saturate(0%) hue-rotate(54deg)
          brightness(106%) contrast(100%);
      }
    }
    .contact-after {
      line-height: 2;
      i {
        font-size: 19px;
      }
      span {
        margin-left: 24px;
        font-family: NotoSansCJKtc-DemiLight;
        font-size: 14px;
      }
    }
  }
}

@-webkit-keyframes slider {
  2% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  14.6% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  16.6% {
    opacity: 0;
    filter: alpha(opacity=0);
  }
}
@keyframes slider {
  2% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  14.6% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  16.6% {
    opacity: 0;
    filter: alpha(opacity=0);
  }
}

#role-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -107px;
}

.role-box {
  width: 300px;
  height: 350px;
  background: #f7f7f7;
  box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.18);
  margin: 0px 11px 58px 11px;
  img {
    width: 100%;
    height: 280px;
  }
  .letter-box {
    padding: 23px 0px 0px 30px;
    .display {
      display: none;
      .price {
        margin-top: 23px;
      }
    }
  }
  &:hover {
    img {
      height: 218px;
    }
    .display {
      display: block;
    }
  }
}

.letter-14px {
  font-size: 14px;
  color: #000000;
  letter-spacing: 1.46px;
}

.letter-12px {
  font-size: 12px;
  color: #6d7278;
  letter-spacing: 1.25px;
}

.letter-21px {
  font-size: 21px;
  color: #000000;
  letter-spacing: 2.19px;
  line-height: 31px;
}

.letter-31px {
  font-family: NotoSansCJKtc-Medium;
  font-size: 31px;
  letter-spacing: 3.24px;
  line-height: 44px;
}
</style>
