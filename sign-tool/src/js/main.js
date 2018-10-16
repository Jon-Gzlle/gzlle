var showMessage = function (flag) {
  var t3 = document.getElementById('t3')
  if (flag === 'error') {
    t3.innerHTML = '请检查参数和商户Key'
    t3.parentElement.classList.add('red')
    document.getElementById('p3').innerHTML = ''
  } else if (flag === 'success') {
    t3.innerHTML = '生成sign并转成大写：'
    t3.parentElement.classList.remove('red')
  }
}

var handleFormSubmit = (event) => {
  event.preventDefault()
  document.getElementById('guide').style.display = 'block'
  var form1 = $('#form1').serializeArray()
  var form2 = $('#form2').serialize()
  var key = document.getElementById('form2').key.value
  var sign = form1.shift().value
  var obj = {}
  for (var i = 0; i < form1.length; i++) {
    if (i % 2 === 0) {
      if (form1[i].value && form1[i + 1].value) {
        obj[form1[i].value] = form1[i + 1].value
      }
    }
  }
  var objArr = Object.entries(obj)
  objArr.sort(function (a, b) {
    return a[0] === b[0] ? 0 : a[0] < b[0] ? -1 : 1
  })
  var param = []
  for (var itme of objArr) {
    var s = itme[0] + '=' + itme[1]
    param.push(s)
  }
  param = param.join('&')
  document.getElementById('p1').innerHTML = param
  param = param + '&' + form2
  document.getElementById('p2').innerHTML = param
  if (sign === '0') {
    var text = md5(param, key)
    document.getElementById('p3').innerHTML = text ? text : ''
  } else if (sign === '1') {
    var text = hmac_sha256(param, key)
    document.getElementById('p3').innerHTML = text ? text : ''
  }
}

var md5 = function (str, key) {
  if (!key) {
    showMessage('error')
    return
  } else {
    showMessage('success')
    return 'sign=' + CryptoJS.MD5(str, key).toString().toUpperCase()
  }
}

var hmac_sha256 = function (str, key) {
  if (!key) {
    showMessage('error')
    return
  } else {
    showMessage('success')
    return 'sign=' + CryptoJS.HmacSHA256(str, key).toString().toUpperCase()
  }
}

var handleDel = (node, event) => {
  event.preventDefault()
  var parent = document.getElementById('form1')
  var children = node.parentElement.parentElement
  parent.removeChild(children)
}

var handleAddElement = () => {
  var parent = document.getElementById('form1')
  var index = document.getElementsByClassName('form-group').length - 1
  var formGroup = document.createElement('div')
  formGroup.classList.add('form-group')
  //
  for (var i = 0; i < 2; i++) {
    // 首先创建最里层的input
    // 参数名称pName，参数值pValue
    var input = document.createElement('input')
    input.type = 'text'
    var label = document.createElement('label')
    label.classList.add('label')
    // 第一个是参数名称以及input，第二个是参数值以及input
    if (i === 0) {
      input.name = 'pName_' + index
      input.placeholder = '输入参数名称'
      input.autocomplete = 'off'
      label.innerText = '参数名称'
    } else if (i === 1) {
      input.name = 'pValue_' + index
      input.placeholder = '输入参数值'
      input.autocomplete = 'off'
      label.innerText = '参数值'
    }

    // 各级DOM节点
    var inner = document.createElement('span')
    inner.classList.add('inner')
    inner.appendChild(input)

    var txt = document.createElement('div')
    txt.classList.add('txt')
    txt.appendChild(inner)

    var formItem = document.createElement('div')
    formItem.classList.add('form-item')
    formItem.appendChild(label)
    formItem.appendChild(txt)

    formGroup.appendChild(formItem)
  }
  // 删除按钮
  var del = document.createElement('div')
  // del.classList.add('form-item small')
  del.classList.add('form-item', 'small')
  var a = document.createElement('a')
  a.href = 'javascript:void(0)'
  a.innerText = '删除'
  a.setAttribute('onclick', 'handleDel(this, event)')
  del.appendChild(a)
  formGroup.appendChild(del)
  parent.appendChild(formGroup)
}