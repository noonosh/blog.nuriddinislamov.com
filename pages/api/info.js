export default function handler(req, res) {
	res.status(200).json({
		first_name: 'Nuriddin',
		last_name: 'Islamov',
		country: 'Uzbekistan',
		phone: '998998789907',
		spoken_languages: ['English', 'Russian', 'Uzbek'],
		programming_in: ['Python', 'JavaScript', 'Swift'],
		moto: 'Everythin is EZ (e-a-s-y)',
		hobbies: 'bookaholic. Loving philosophy reads',
		telegram: 'https://t.me/nuriddin_i',
		github: 'https://github.com/nuriddinislamov',
		twitter: 'https://twitter.com/nuriddinislamov',
		instagram: null,
	});
}
