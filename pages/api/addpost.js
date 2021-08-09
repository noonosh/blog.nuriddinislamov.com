export default function userHandler(req, res) {
	const {
		query: { title, date, post },
		method,
	} = req;

	switch (method) {
		case 'POST':
			// Create data in your database
			res.status(200).json({ id, title: title || `User ${id}` });
			break;
		default:
			res.setHeader('Allow', ['PUT', 'POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
