import originAxios from 'axios';

export default function request(option) {
	return new Promise((resolve, reject) => {
		const instance = originAxios.create({
			// baseURL: 'https://www.autumnfish.cn/',
      // baseURL: 'http://123.207.32.32:9001/',
      baseURL: 'http://localhost:3000',
      // baseURL: 'https://www.lghb.top/',
      withCredentials: true, // 请求带上 cookie
      timeout: 10000,
		});

		instance.interceptors.response.use(response => {
			return response.data
		}, err => {
			return err
		})

    instance(option).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
