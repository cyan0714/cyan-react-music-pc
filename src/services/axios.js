import originAxios from 'axios';

export default function request(option) {
	return new Promise((resolve, reject) => {
		const instance = originAxios.create({
			baseURL: 'https://www.autumnfish.cn/',
			timeout: 10000
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
