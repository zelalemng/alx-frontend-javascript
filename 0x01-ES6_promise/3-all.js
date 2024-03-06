import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
	try {
		const [p1, p2] = await Promise.all([
			uploadPhoto(),
			createUser()
		]);
		console.log('${p1.body} ${p2.firstName} ${p2.lastName}');
	} catch (error) {
		console.log('Signup system offline');
	}
}
