<template>
  <form id="myform">
    <p>
      <label for="name">名字：</label>
      <input type="text" id="name" name="name">
    </p>
    <p>
      <label for="tel">電話</label>
      <input type="tel" id="tel" name="tel">
    </p>
    <p>
      <label for="date">日期：</label>
      <input type="date" id="date" name="date">
    </p>
    <p>
      <label for="time">時間：</label>
      <input type="time" id="time" name="time">
    </p>
    <p>
      性別：
      <input type="radio" id="male" name="gender" value="male" checked>
      <label for="male">生理男</label>

      <input type="radio" id="female" name="gender" value="female">
      <label for="female">生理女</label>

      <input type="radio" id="custom" name="gender" value="custom">
      <label for="custom">多元</label>
    </p>
    <p>
      TODO:
      <label for="interests">興趣：</label>
    </p>
    <p>
      TODO: 標籤輸入並新增
    </p>
    <p>
      <label for="location">棲息地：</label>
      <select>
        <option value="">請選擇</option>
        <option value="tainan">台南</option>
        <option value="taipei">台北</option>
        <option value="other">其他</option>
      </select>
    </p>
    <p>
      <label for="age">年齡：</label>
      <input type="number" id="age" name="age">
    </p>
    <p>
      <label for="email">Email：</label>
      <input type="email" id="email" name="email">
    </p>
    <p>
      TODO: visibility (on-click)
      <label for="password">Password：</label>
      <input type="password" id="password" name="password">
    </p>
    <p>
      <label for="feeling">體驗感受</label>
      <input type="range" id="feeling" name="feeling" min="1" max="3">
    </p>
    <p>
      <label for="comment">備註</label>
      <textarea form="myform" rows="3" id="comment" name="comment"></textarea>
    </p>
    <p>
      <input type="reset" value="Reset">
      <input type="submit" value="Submit">
    </p>
  </form>
</template>

<script setup>



</script>
