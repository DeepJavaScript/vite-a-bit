<template>
<section class="vite-a-form">
  <div class="banner__img"></div>
  <div>
    <div class="form__bar"></div>
    <div class="form__block form__title">
      <h1>vite 一個表單吧！</h1>
      <p class="form__desc">日期：Fri, Jan. 22, 2021</p>
      <p class="form__desc">地點：台南市東區北門路二段 16 號 L2A</p>
      <p class="form__desc required__hint">* 必填</p>
    </div>
  </div>
  <form 
    id="app"
    action="" 
    method="" 
    enctype="multipart/form-data"
    name="vite-form">

    <!-- date & time -->
    <div class="form__block form__question required">
      <label 
        for="datetime" 
        class="heading">
        填表時間
        <span class="required__hint"> *</span>
      </label>
      <p class="ques__desc">
        Date & Time
      </p>
      <input 
        type="datetime-local" 
        id="datetime" 
        class="fillIn" 
        name="datetime" 
        v-model="datetime" />
    </div>

    <!-- name -->
    <div class="form__block form__question required">
      <label 
        for="name" 
        class="heading">
        名字
        <span class="required__hint"> *</span>
      </label>
      <p class="ques__desc">
        Name
      </p>
      <input 
        type="text" 
        id="name" 
        class="fillIn" 
        name="name"
        v-model="name">
    </div>

    <!-- sex -->
    <div class="form__block form__question required">
      <p class="heading">
        生理性別
        <span class="required__hint"> *</span>
      </p>
      <p class="ques__desc">
        Sex
      </p>
      <input 
        type="radio" 
        id="female" 
        class="fillIn" 
        value="female" 
        name="sex" 
        v-model="sex" />
      <label for="female">生理女</label>
      <input 
        type="radio" 
        id="male" 
        class="fillIn" 
        value="male" 
        name="sex" 
        v-model="sex" />
      <label for="male">生理男</label>
      <input 
        type="radio" 
        id="other" 
        class="fillIn" 
        value="other" 
        name="sex" 
        v-model="sex" />
      <label for="other">第三性別</label>
    </div>

    <!-- age -->
    <div class="form__block form__question required">
      <label 
        for="age" 
        class="heading">
        年齡
        <span class="required__hint"> *</span>
      </label>
      <p class="ques__desc">
        Age
      </p>
      <input 
        type="number" 
        id="age" 
        class="fillIn" 
        name="age" 
        v-model="age" />
    </div>

    <!-- mobile -->
    <div class="form__block form__question required">
      <label 
        for="mobile" 
        class="heading">
        手機
        <span class="required__hint"> *</span>
      </label>
      <p class="ques__desc">
        Mobile
      </p>
      <input 
        type="text" 
        id="mobile" 
        class="fillIn" 
        name="mobile" 
        v-model="mobile" />
    </div>

    <!-- email -->
    <div class="form__block form__question required">
      <label 
        for="email" 
        class="heading">
        電子信箱
        <span class="required__hint"> *</span>
      </label>
      <p class="ques__desc">
        Email
      </p>
      <input 
        type="email" 
        id="email" 
        class="fillIn" 
        name="email" 
        v-model="email" />
    </div>

    <!-- password -->
    <div class="form__block form__question required">
      <label 
        for="password" 
        class="heading">
        密碼
        <span class="required__hint"> *</span>
      </label>
      <p class="ques__desc">
        Password
      </p>
      <input 
        type="password" 
        id="password" 
        class="fillIn" 
        name="password" 
        v-model="password" />
      <p>
        <input 
          type="checkbox" 
          name="lookPassword" 
          v-model="lookPassword" />
        <span 
          class="form__look__password__icon" 
          v-if="lookPassword">
            🐵 
        </span>
        <span 
          v-if="lookPassword" 
          class="form__look__password__text">
          {{ password }}
        </span>
        <span 
          v-else 
          class="form__look__password__icon">
            🙈
        </span>
      </p>
    </div>

    <!-- city -->
    <div class="form__block form__question required">
      <label 
        for="city" 
        class="heading">
        居住地
        <span class="required__hint"> *</span>
      </label>
      <p class="ques__desc">
        City
      </p>
      <select 
        name="city" 
        id="city" 
        v-model="city">
        <option disabled>請選擇！</option>
        <option>開山里</option>
        <option>非開山里</option>
      </select>
    </div>

    <!-- hobby -->
    <div class="form__block form__question required">
      <p class="heading">
        興趣
        <span class="required__hint"> *</span>
      </p>
      <p class="ques__desc">
        Hobby
      </p>
      <input 
        type="text" 
        id="hobby" 
        class="fillIn" 
        name="hobby" 
        v-model="hobby" />
      <button 
        type="button" 
        @click="addHobby(hobby)">
          + add
      </button>
      <br />
      <label 
        v-for="hobby of hobbyList" 
        :key="hobby">
        <input 
          type="checkbox" 
          class="fillIn" 
          name="hobby" 
          :id="hobby" 
          :value="hobby" 
          v-model="hobbys" />
        {{ hobby }}
      </label>
    </div>

    <!-- tags -->
    <div class="form__block form__question required">
      <p class="heading">
        標籤
        <span class="required__hint"> *</span>
      </p>
      <p class="ques__desc">
        Tags
      </p>
      <input 
        type="text" 
        id="tags" 
        class="fillIn" 
        name="tags" 
        v-model="tag" />
      <button 
        type="button" 
        @click="addTag(tag)">
          + add
      </button>
      <br />
      <div class="form__tags__list">
        <span 
          class="form__tag" 
          v-for="(item, index) of tags" 
          :key="item" 
          @click="removeTag(index)">
          <i class="far fa-times"></i>
          {{ item }}
        </span>
      </div>
    </div>

    <!-- photo -->
    <div class="form__block form__question required">
      <label 
        for="photo" 
        class="heading">
        照片
        <span class="required__hint"> *</span>
      </label>
      <p class="ques__desc">
        Photo
      </p>
      <input 
        type="file" 
        accept="image/*" 
        id="photo" 
        class="fillIn" 
        name="photo" 
        @change="selectPhoto" />
      <button 
        type="button" 
        name="photo" 
        v-if="!showPhoto"
        @click="previewPhoto">
        preview
      </button>
      <button 
        type="button" 
        name="photo" 
        v-if="showPhoto"
        @click="previewPhoto">
        hide
      </button>
      <br />
      <img 
        :src="photo" 
        class="preview__photo" 
        v-show="showPhoto" 
        alt="" />
    </div>

    <!-- review -->
    <div class="form__block form__question required">
      <label 
        for="review" 
        class="heading">
        評價
        <span class="required__hint"> *</span>
      </label>
      <p class="ques__desc">
        Review
      </p>
      <input 
        type="range" 
        id="review" 
        class="fillIn" 
        name="review" 
        min="0" 
        max="5" 
        step="1" 
        @change="showReviewStar"
        v-model="review" />
      <p>{{ reviewStar }}</p>
    </div>

    <!-- comment -->
    <div class="form__block form__question">
      <label 
        for="comment" 
        class="heading">
        留言
      </label>
      <p class="ques__desc">
        Comment
      </p>
      <textarea 
        id="comment" 
        class="fillIn" 
        name="comment" 
        cols="" 
        rows="3" 
        v-model="comment">
      </textarea>
    </div>

    <!-- reset & submit -->
    <div class="form__block form__btn">
      <input 
        type="reset" 
        id="form__btn__reset" 
        value="重寫" 
        @click="onReset" />
      <input 
        type="submit" 
        value="提交" 
        @click.prevent="onSubmit" />
    </div>

  </form>
</section>
<footer class="footer">
  <p>© 2020 © Copyright. All rights Reserved.</p>
</footer>
</template>

<script>
export default {
  data() {
		return {
			datetime: new Date(),
			name: '',
			sex: '',
			age: '',
			mobile: '',
			email: '',
			password: '',
			lookPassword: false,
			city: '',
			hobby: '',
			hobbyList: ['運動', '音樂', '電影'],
			hobbys: [],
			tag: '',
			tags: [],
			photoObj: '',
			photo: '',
			showPhoto: false,
			review: 0,
			reviewStar: '',
			comment: ''
		}
	},
	methods: {
		addTag(item) {
			this.tags.push(item);
			this.tag = '';
		},
		addHobby(hobby) {
			this.hobbyList.push(hobby);
			this.hobby = '';
		},
		removeTag(index) {
			this.tags = [
        ...this.tags.slice(0, index), 
        ...this.tags.slice(index+1)
      ];
		},
		selectPhoto() {
			let fileInput = event.target;
			if (fileInput.files && fileInput.files[0]) {
				this.photoObj = fileInput.files[0];
			}
			let reader = new FileReader();
			reader.addEventListener('load', this.loadPhoto);
			reader.readAsDataURL(this.photoObj);
		},
		loadPhoto(event) {
			this.photo = event.target.result;
		},
		previewPhoto() {
			this.showPhoto = !this.showPhoto;
		},
		showReviewStar() {
			switch (this.review) {
				case '1':
					this.reviewStar = '⭐️';
					break;
				case '2':
					this.reviewStar = '⭐️⭐️';
					break;
				case '3':
					this.reviewStar = '⭐️⭐️⭐️';
					break;
				case '4':
					this.reviewStar = '⭐️⭐️⭐️⭐️';
					break;
				case '5':
					this.reviewStar = '⭐️⭐️⭐️⭐️⭐️';
					break;
				default:
					this.reviewStar = '';
					break;
			}
		},
		onReset() {
			this.datetime = new Date();
			this.name = '';
			this.sex = '';
			this.age = '';
			this.mobile = '';
			this.email = '';
			this.password = '';
			this.lookPassword = false;
			this.city = ''; //
			this.hobbyList = ['運動', '音樂', '電影'];
			this.hobbys = [];
			this.tag = '';
			this.tags = [];
			this.photoObj = '';
			this.photo = '';
			this.showPhoto = false;
			this.review = 0; //
			this.reviewStar = '';
			this.comment = '';
		},
		onSubmit() {
			console.log('Prevented!');
		}
	}
}
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0 auto;
	padding: 0;
	outline: none;
}

/* body */

body {
	background-color: rgba(202,102,83,.2);
	color: #292929;
}

.banner__img {
	background-image: url('assets/banner.jpg');
	background-size: cover;
	background-position: center;
	border-radius: 8px;
	width: 640px;
	height: 160px;
	margin-top: 15px;
	margin-bottom: 15px;
	z-index: -1;
}

.form__bar {
	background-color: #AF5F3C;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	width: 640px;
	height: 10px;
}

.form__block {
	border: solid 1.2px #AF5F3C;
	border-radius: 10px;
	padding: 30px 24px;
	margin-top: 15px;
	width: 640px;
}

.form__title {
	background: rgba(255,255,255);
	border-top: none;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	font-family: 'Noto Sans TC', sans-serif;
	padding-bottom: 60px;
	margin-top: 0;
}

.form__title h1 {
	margin: 0 0 30px;
	font-weight: 400;
}

.form__desc {
	font-size: 14px;
	line-height: 2em;
	padding-bottom: 3px;
}

.error {
	visibility: hidden;
}

.error__show {
	visibility: visible;
}

.required__hint {
	color: #e74149;
	font-size: 14px;
	position: absolute;
}

.form__question {
	background: rgba(255,255,255);
	font-family: 'Noto Sans TC', sans-serif;
}

.heading {
	display: block;
	font-size: 16px;
	letter-spacing: .1px;
	margin-bottom: 8px;
}

.ques__desc {
	color: #818181;
	font-size: 14px;
	margin-bottom: 16px;
}

.fillIn {
	border: none;
	border-bottom: solid 1.2px rgb(218, 220, 224);
	line-height: 1.6em;
	margin-bottom: 8px;
}

.form__look__password__icon {
	font-size: 20px;
}

.form__look__password__text {
	color: #909497;
}

.form__tags__list {
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
}

.form__tag {
	background-color: rgba(202,102,83,.5);
	border-radius: 10px;
	margin: 0 4px 8px 0;
	padding: .2em 1em;
	cursor: pointer;
	line-height: 1.6;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.form__tag i {
	padding-right: 5px;
	color: rgba(202,102,83,.8);
}

.preview__photo {
	display: block;
	max-width: 480px;
	margin-left: 0;
}

textarea {
	width: 100%;
	resize: none;
}

.form__btn {
	border: none;
	font-size: 14px;
	margin-bottom: 30px;
	margin-top: 60px;
	padding: 0;
	display: flex;
	justify-content: space-between;
}

.form__btn input {
	background-color: #AF5F3C;
	color: white;
	cursor: pointer;
	border: none;
	border-radius: 4px;
	/* margin: 0 auto; */
	padding: 12px 28px;
	transition: all 0.16s ease-in-out;
}

.form__btn input:hover {
	background-color: #9c5535;
}

/* 用 class 時權重竟然比不過 .form__btn input ？！ */
#form__btn__reset {
	background-color: rgba(0, 0, 0, 0)/*  !important */;
	border: 1.2px solid #AF5F3C/*  !important */;
	color: #AF5F3C/*  !important */;
	font-weight: 500;
}

/* ---------- footer ---------- */
.footer {
	background: #000000;
	height: 40px;
	display: flex;
    align-items: center;
    justify-content: center;
}

.footer p {
	color: #999999;
	font-size: 12px;
	text-align: center;
}
</style>