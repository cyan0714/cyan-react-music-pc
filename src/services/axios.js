import originAxios from 'axios';

export default function request(option) {
	return new Promise((resolve, reject) => {
		const instance = originAxios.create({
      baseURL: 'http://119.23.214.219:3000',
      // baseURL: 'http://localhost:3000',
      withCredentials: true,
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
