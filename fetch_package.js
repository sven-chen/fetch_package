// 1.封装 （http.js）
class Ajax {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => {
			// 因为status 400和500都会走进then里面
			if(res.status>=200 || res<300){
				return res.json();
			}else{
				return res.json().then(r => Promise.reject(r));
			}
		})
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
  // post方式
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))

    })
  }


  //put 修改
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))

    })
  }

  //delete
  delete(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve('数据删除成功!'))
        .catch(err => reject(err))
    })
  }
}
export default new Ajax();//ES6导出