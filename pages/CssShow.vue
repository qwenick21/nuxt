<template lang="pug">
#container
  #top-container
    a(v-for="role in roles")
      img(:src="require(`~/assets/${role.picture}`)")
  #top-text
    .square-box
      .square-shadow
      nuxt-link(to="/")   
        .square.letter-31px MARIN HOUSE
    .contact-box
      .contact-before
        img(src="~/assets/instagram.png")
        img(src="~/assets/facebook.png")    
      .line
      .contact-after
        div
          i(class="el-icon-phone") 
          span 08-8888888
        div
          i(class="el-icon-message") 
          span marin456@gmail.com  
        div
          i(class="el-icon-s-home") 
          span 海軍總部        
  #role-container
    .role-box(v-for="role in roles")
      img(:src="require(`~/assets/${role.picture}`)")
      .letter-box
        .letter-14px {{ role.name }}
        .display
          .letter-12px {{ role.chineseName }}
          .price
            span.letter-21px {{ "฿" + role.price }}
            span.letter-14px
</template>

<script>
export default {
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
        {
          picture: 'Franky.jpeg',
          name: 'Franky',
          chineseName: '佛朗基',
          price: '94.000.000',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
$roles: 7;

#container {
  font-family: NotoSansCJKtc-Light;
}

#top-container {
  position: relative;
  height: 700px;
  opacity: 0.64;
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
  a:nth-child(7) {
    -webkit-animation-delay: 30s;
    animation-delay: 30s;
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-animation: slider $roles * 5s linear infinite;
    animation: slider $roles * 5s linear infinite;
    width: 100%;
    height: 100%;
    @media (min-width: 500px) {
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    @media (max-width: 499.99px) {
      img {
        object-fit: contain;
        width: 100%;
      }
    }
  }
}

#top-text {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #ffffff;
  .square-box {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    .square-shadow {
      width: 148px;
      height: 148px;
      background: repeating-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.28),
        rgba(255, 255, 255, 0.28) 10px,
        #ffffff 10px,
        #ffffff 12px
      );
      clip-path: polygon(0 0, 100% 0, 100% 15px, 14px 15px, 14px 100%, 0 100%);
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
      color: #ffffff;
    }
  }
  .contact-box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 210px;
    .line {
      height: 91px;
      border-left: 1px solid #ffffff;
      margin-left: 35px;
      margin-right: 28px;
    }
    .contact-before {
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
  1.5% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  13% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  14.3% {
    opacity: 0;
    filter: alpha(opacity=0);
  }
}
@keyframes slider {
  1.5% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  13% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  14.3% {
    opacity: 0;
    filter: alpha(opacity=0);
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

#role-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  top: -107px;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1200px;
}

.role-box {
  position: relative;
  z-index: 0;
  width: 29.33%;
  height: auto;
  background: #f7f7f7;
  box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.18);
  margin: 0px 1% 58px 1%;
  border-radius: 10px;
  overflow: hidden;
  padding: 0.5rem;
  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #1a232a;
    background-image: conic-gradient(
      transparent,
      rgba(168, 239, 255, 1),
      transparent 30%
    );
    animation: rotate 4s linear infinite;
  }
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0.5rem;
    top: 0.5rem;
    width: calc(100% - 1rem);
    height: calc(100% - 1rem);
    background: #f7f7f7;
    border-radius: 10px;
  }
  img {
    width: 100%;
    height: 80%;
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
      height: 70%;
    }
    .display {
      display: block;
    }
    @media (max-width: 549.99px) {
      img {
        height: 75%;
      }
    }
  }
}

@media (max-width: 799.99px) {
  .role-box {
    width: 43%;
    margin: 0px 2% 58px 2%;
  }
}

@media (max-width: 549.99px) {
  .role-box {
    width: 94%;
    margin: 0px 3% 58px 3%;
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

@media (min-width: 700px) {
  .letter-21px {
    font-size: 21px;
    color: #000000;
    letter-spacing: 2.19px;
    line-height: 31px;
  }
}

@media (max-width: 699.99px) {
  .letter-21px {
    font-size: 14px;
    color: #000000;
    letter-spacing: 1.46px;
  }
}

.letter-31px {
  font-family: NotoSansCJKtc-Medium;
  font-size: 31px;
  letter-spacing: 3.24px;
  line-height: 44px;
}
</style>
