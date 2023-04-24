const http = uni.$u.http
export async function getCaptcha() {
	return await http.get('/api/getCaptcha')
}
