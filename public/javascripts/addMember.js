function check() {
  let data = $('#memberForm').serializeArray();
  let inputName = { "cid": "卡號", "name": "姓名" }
  let count = 0;
  let checkCid = new RegExp(/^[0-9]{10}$/)
  data.forEach(element => {
    if (element.name != "sid" && element.value == "") {
      alert(inputName[element.name] + " 不得為空");
      count += 1;
    }
    if (element.name == 'cid') {
      if (!checkCid.test(element.value)) {
        alert(inputName[element.name] + " 格式錯誤，卡號為 10 個 0 ~ 9 的數字")
        count += 1;
      }
    }
  });
  if (count == 0) {
    data = data.reduce((obj, item) => ({ ...obj, [item.name]: item.value }), {});
    $.ajax({
      url: "/addMember",
      method: "post",
      data: data,
      success: () => {
        console.log('新增成功');
        alert('新增成功');
        location.reload();
      }
    })
  }
}